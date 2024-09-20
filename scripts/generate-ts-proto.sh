# Runs "npx protoc --plugin=protoc-gen-ts_proto=".\\node_modules\\.bin\\protoc-gen-ts_proto.cmd" --ts_proto_out=./src/generated" for each file in the ./protobufs/source/**/* directories
# This script is used to generate the TypeScript files from the protobuf files

# First we need to cp all the proto files into the same directory, we'll name it _generated/progress
# This is because the proto files reference each other by their file name, so we need to make sure they're all in the same directory
echo "Copying all proto files into the same directory..."
mkdir -p ./src/proto/_tmp
mkdir -p ./src/proto/_tmp/complete
for file in ./protobufs/**/*; do
  if [ -f "$file" ]; then
    cp "$file" ./src/generated/_tmp
  fi
done

echo "Generating TypeScript files from proto files..."
# Now we can generate the TypeScript files
cd ./src/proto/_tmp
for file in ./*.proto; do
  if [ -f "$file" ]; then
    echo "Generating TypeScript file for $file"
    npx protoc --ts_out ./complete --proto_path ./ "$file"
  fi
done

# Now we can move the generated files into the correct directory and clean up
cd ../
mv ./_tmp/complete/* .
rm -rf ./_tmp
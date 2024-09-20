# Deadlock Match history

Retrieve your Deadlock match history in the form of JSON.

Requires you to login to Steam during running to be able to query the Deadlock Game Coordinator API.

## Requirements

- NodeJS v22

## Setup

Install the required packages.

```bash
npm install
```

Compile the typescript and run the CLI in one short command.

```bash
npm run dev
```

## Usage

Upon running it'll require a username and password for your Steam account to log in.

```bash
Account Name: <your steam username>
Password: [masked] ******
Steam Guard App Code: abcde
```

After a successful login, an API token will be generated (`token.txt`) and used for future runs of the CLI (until the token validity runs out).

It should be automatic from that point on and should see an output similar to below and a `matches.json` to go along with it:

```bash
Launched app 1422450
Requesting batch 1...
Got batch 1... Processing...
Requesting batch 2...
Got batch 2... Processing...
Requesting batch 3...
Got batch 3... Processing...
Requesting batch 4...
Got batch 4... Processing...
Requesting batch 5...
Got batch 5... Processing...
No new matches... We're done!
Match retrieval complete
App 1422450 quit
```

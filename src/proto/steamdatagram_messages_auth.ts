// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "steamdatagram_messages_auth.proto" (syntax proto2)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";
/**
 * @generated from protobuf message CMsgSteamDatagramRelayAuthTicket
 */
export interface CMsgSteamDatagramRelayAuthTicket {
    /**
     * @generated from protobuf field: optional fixed32 time_expiry = 1;
     */
    timeExpiry?: number;
    /**
     * @generated from protobuf field: optional string authorized_client_identity_string = 14;
     */
    authorizedClientIdentityString?: string;
    /**
     * @generated from protobuf field: optional string gameserver_identity_string = 15;
     */
    gameserverIdentityString?: string;
    /**
     * @generated from protobuf field: optional fixed32 authorized_public_ip = 3;
     */
    authorizedPublicIp?: number;
    /**
     * @generated from protobuf field: optional bytes gameserver_address = 11;
     */
    gameserverAddress?: Uint8Array;
    /**
     * @generated from protobuf field: optional uint32 app_id = 7;
     */
    appId?: number;
    /**
     * @generated from protobuf field: optional uint32 virtual_port = 10;
     */
    virtualPort?: number;
    /**
     * @generated from protobuf field: repeated CMsgSteamDatagramRelayAuthTicket.ExtraField extra_fields = 8;
     */
    extraFields: CMsgSteamDatagramRelayAuthTicket_ExtraField[];
    /**
     * @generated from protobuf field: optional fixed64 legacy_authorized_steam_id = 2;
     */
    legacyAuthorizedSteamId?: bigint;
    /**
     * @generated from protobuf field: optional fixed64 legacy_gameserver_steam_id = 4;
     */
    legacyGameserverSteamId?: bigint;
    /**
     * @generated from protobuf field: optional fixed32 legacy_gameserver_pop_id = 9;
     */
    legacyGameserverPopId?: number;
    /**
     * @generated from protobuf field: optional bytes legacy_authorized_client_identity_binary = 12;
     */
    legacyAuthorizedClientIdentityBinary?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes legacy_gameserver_identity_binary = 13;
     */
    legacyGameserverIdentityBinary?: Uint8Array;
}
/**
 * @generated from protobuf message CMsgSteamDatagramRelayAuthTicket.ExtraField
 */
export interface CMsgSteamDatagramRelayAuthTicket_ExtraField {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional string string_value = 2;
     */
    stringValue?: string;
    /**
     * @generated from protobuf field: optional sint64 int64_value = 3;
     */
    int64Value?: bigint;
    /**
     * @generated from protobuf field: optional fixed64 fixed64_value = 5;
     */
    fixed64Value?: bigint;
}
/**
 * @generated from protobuf message CMsgSteamDatagramSignedRelayAuthTicket
 */
export interface CMsgSteamDatagramSignedRelayAuthTicket {
    /**
     * @generated from protobuf field: optional fixed64 reserved_do_not_use = 1;
     */
    reservedDoNotUse?: bigint;
    /**
     * @generated from protobuf field: optional bytes ticket = 3;
     */
    ticket?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes signature = 4;
     */
    signature?: Uint8Array;
    /**
     * @generated from protobuf field: optional fixed64 key_id = 2;
     */
    keyId?: bigint;
    /**
     * @generated from protobuf field: repeated CMsgSteamDatagramCertificateSigned certs = 5;
     */
    certs: CMsgSteamDatagramCertificateSigned[];
}
/**
 * @generated from protobuf message CMsgSteamDatagramCachedCredentialsForApp
 */
export interface CMsgSteamDatagramCachedCredentialsForApp {
    /**
     * @generated from protobuf field: optional bytes private_key = 1;
     */
    privateKey?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes cert = 2;
     */
    cert?: Uint8Array;
    /**
     * @generated from protobuf field: repeated bytes relay_tickets = 3;
     */
    relayTickets: Uint8Array[];
}
/**
 * @generated from protobuf message CMsgSteamDatagramGameCoordinatorServerLogin
 */
export interface CMsgSteamDatagramGameCoordinatorServerLogin {
    /**
     * @generated from protobuf field: optional uint32 time_generated = 1;
     */
    timeGenerated?: number;
    /**
     * @generated from protobuf field: optional uint32 appid = 2;
     */
    appid?: number;
    /**
     * @generated from protobuf field: optional bytes routing = 3;
     */
    routing?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes appdata = 4;
     */
    appdata?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes legacy_identity_binary = 5;
     */
    legacyIdentityBinary?: Uint8Array;
    /**
     * @generated from protobuf field: optional string identity_string = 6;
     */
    identityString?: string;
    /**
     * @generated from protobuf field: optional fixed64 dummy_steam_id = 99;
     */
    dummySteamId?: bigint;
}
/**
 * @generated from protobuf message CMsgSteamDatagramSignedGameCoordinatorServerLogin
 */
export interface CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramCertificateSigned cert = 1;
     */
    cert?: CMsgSteamDatagramCertificateSigned;
    /**
     * @generated from protobuf field: optional bytes login = 2;
     */
    login?: Uint8Array;
    /**
     * @generated from protobuf field: optional bytes signature = 3;
     */
    signature?: Uint8Array;
}
/**
 * @generated from protobuf message CMsgSteamDatagramHostedServerAddressPlaintext
 */
export interface CMsgSteamDatagramHostedServerAddressPlaintext {
    /**
     * @generated from protobuf field: optional fixed32 ipv4 = 1;
     */
    ipv4?: number;
    /**
     * @generated from protobuf field: optional bytes ipv6 = 2;
     */
    ipv6?: Uint8Array;
    /**
     * @generated from protobuf field: optional uint32 port = 3;
     */
    port?: number;
    /**
     * @generated from protobuf field: optional fixed64 routing_secret = 4;
     */
    routingSecret?: bigint;
    /**
     * @generated from protobuf field: optional uint32 protocol_version = 5;
     */
    protocolVersion?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramRelayAuthTicket$Type extends MessageType<CMsgSteamDatagramRelayAuthTicket> {
    constructor() {
        super("CMsgSteamDatagramRelayAuthTicket", [
            { no: 1, name: "time_expiry", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 14, name: "authorized_client_identity_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "gameserver_identity_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "authorized_public_ip", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 11, name: "gameserver_address", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 7, name: "app_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "virtual_port", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "extra_fields", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => CMsgSteamDatagramRelayAuthTicket_ExtraField },
            { no: 2, name: "legacy_authorized_steam_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "legacy_gameserver_steam_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "legacy_gameserver_pop_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 12, name: "legacy_authorized_client_identity_binary", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "legacy_gameserver_identity_binary", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramRelayAuthTicket>): CMsgSteamDatagramRelayAuthTicket {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.extraFields = [];
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramRelayAuthTicket>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramRelayAuthTicket): CMsgSteamDatagramRelayAuthTicket {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 time_expiry */ 1:
                    message.timeExpiry = reader.fixed32();
                    break;
                case /* optional string authorized_client_identity_string */ 14:
                    message.authorizedClientIdentityString = reader.string();
                    break;
                case /* optional string gameserver_identity_string */ 15:
                    message.gameserverIdentityString = reader.string();
                    break;
                case /* optional fixed32 authorized_public_ip */ 3:
                    message.authorizedPublicIp = reader.fixed32();
                    break;
                case /* optional bytes gameserver_address */ 11:
                    message.gameserverAddress = reader.bytes();
                    break;
                case /* optional uint32 app_id */ 7:
                    message.appId = reader.uint32();
                    break;
                case /* optional uint32 virtual_port */ 10:
                    message.virtualPort = reader.uint32();
                    break;
                case /* repeated CMsgSteamDatagramRelayAuthTicket.ExtraField extra_fields */ 8:
                    message.extraFields.push(CMsgSteamDatagramRelayAuthTicket_ExtraField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional fixed64 legacy_authorized_steam_id */ 2:
                    message.legacyAuthorizedSteamId = reader.fixed64().toBigInt();
                    break;
                case /* optional fixed64 legacy_gameserver_steam_id */ 4:
                    message.legacyGameserverSteamId = reader.fixed64().toBigInt();
                    break;
                case /* optional fixed32 legacy_gameserver_pop_id */ 9:
                    message.legacyGameserverPopId = reader.fixed32();
                    break;
                case /* optional bytes legacy_authorized_client_identity_binary */ 12:
                    message.legacyAuthorizedClientIdentityBinary = reader.bytes();
                    break;
                case /* optional bytes legacy_gameserver_identity_binary */ 13:
                    message.legacyGameserverIdentityBinary = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramRelayAuthTicket, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 time_expiry = 1; */
        if (message.timeExpiry !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.timeExpiry);
        /* optional string authorized_client_identity_string = 14; */
        if (message.authorizedClientIdentityString !== undefined)
            writer.tag(14, WireType.LengthDelimited).string(message.authorizedClientIdentityString);
        /* optional string gameserver_identity_string = 15; */
        if (message.gameserverIdentityString !== undefined)
            writer.tag(15, WireType.LengthDelimited).string(message.gameserverIdentityString);
        /* optional fixed32 authorized_public_ip = 3; */
        if (message.authorizedPublicIp !== undefined)
            writer.tag(3, WireType.Bit32).fixed32(message.authorizedPublicIp);
        /* optional bytes gameserver_address = 11; */
        if (message.gameserverAddress !== undefined)
            writer.tag(11, WireType.LengthDelimited).bytes(message.gameserverAddress);
        /* optional uint32 app_id = 7; */
        if (message.appId !== undefined)
            writer.tag(7, WireType.Varint).uint32(message.appId);
        /* optional uint32 virtual_port = 10; */
        if (message.virtualPort !== undefined)
            writer.tag(10, WireType.Varint).uint32(message.virtualPort);
        /* repeated CMsgSteamDatagramRelayAuthTicket.ExtraField extra_fields = 8; */
        for (let i = 0; i < message.extraFields.length; i++)
            CMsgSteamDatagramRelayAuthTicket_ExtraField.internalBinaryWrite(message.extraFields[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* optional fixed64 legacy_authorized_steam_id = 2; */
        if (message.legacyAuthorizedSteamId !== undefined)
            writer.tag(2, WireType.Bit64).fixed64(message.legacyAuthorizedSteamId);
        /* optional fixed64 legacy_gameserver_steam_id = 4; */
        if (message.legacyGameserverSteamId !== undefined)
            writer.tag(4, WireType.Bit64).fixed64(message.legacyGameserverSteamId);
        /* optional fixed32 legacy_gameserver_pop_id = 9; */
        if (message.legacyGameserverPopId !== undefined)
            writer.tag(9, WireType.Bit32).fixed32(message.legacyGameserverPopId);
        /* optional bytes legacy_authorized_client_identity_binary = 12; */
        if (message.legacyAuthorizedClientIdentityBinary !== undefined)
            writer.tag(12, WireType.LengthDelimited).bytes(message.legacyAuthorizedClientIdentityBinary);
        /* optional bytes legacy_gameserver_identity_binary = 13; */
        if (message.legacyGameserverIdentityBinary !== undefined)
            writer.tag(13, WireType.LengthDelimited).bytes(message.legacyGameserverIdentityBinary);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramRelayAuthTicket
 */
export const CMsgSteamDatagramRelayAuthTicket = new CMsgSteamDatagramRelayAuthTicket$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramRelayAuthTicket_ExtraField$Type extends MessageType<CMsgSteamDatagramRelayAuthTicket_ExtraField> {
    constructor() {
        super("CMsgSteamDatagramRelayAuthTicket.ExtraField", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "string_value", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "int64_value", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "fixed64_value", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramRelayAuthTicket_ExtraField>): CMsgSteamDatagramRelayAuthTicket_ExtraField {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramRelayAuthTicket_ExtraField>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramRelayAuthTicket_ExtraField): CMsgSteamDatagramRelayAuthTicket_ExtraField {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string string_value */ 2:
                    message.stringValue = reader.string();
                    break;
                case /* optional sint64 int64_value */ 3:
                    message.int64Value = reader.sint64().toBigInt();
                    break;
                case /* optional fixed64 fixed64_value */ 5:
                    message.fixed64Value = reader.fixed64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramRelayAuthTicket_ExtraField, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* optional string string_value = 2; */
        if (message.stringValue !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.stringValue);
        /* optional sint64 int64_value = 3; */
        if (message.int64Value !== undefined)
            writer.tag(3, WireType.Varint).sint64(message.int64Value);
        /* optional fixed64 fixed64_value = 5; */
        if (message.fixed64Value !== undefined)
            writer.tag(5, WireType.Bit64).fixed64(message.fixed64Value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramRelayAuthTicket.ExtraField
 */
export const CMsgSteamDatagramRelayAuthTicket_ExtraField = new CMsgSteamDatagramRelayAuthTicket_ExtraField$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramSignedRelayAuthTicket$Type extends MessageType<CMsgSteamDatagramSignedRelayAuthTicket> {
    constructor() {
        super("CMsgSteamDatagramSignedRelayAuthTicket", [
            { no: 1, name: "reserved_do_not_use", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "ticket", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "signature", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "key_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "certs", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => CMsgSteamDatagramCertificateSigned }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramSignedRelayAuthTicket>): CMsgSteamDatagramSignedRelayAuthTicket {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.certs = [];
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramSignedRelayAuthTicket>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramSignedRelayAuthTicket): CMsgSteamDatagramSignedRelayAuthTicket {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed64 reserved_do_not_use */ 1:
                    message.reservedDoNotUse = reader.fixed64().toBigInt();
                    break;
                case /* optional bytes ticket */ 3:
                    message.ticket = reader.bytes();
                    break;
                case /* optional bytes signature */ 4:
                    message.signature = reader.bytes();
                    break;
                case /* optional fixed64 key_id */ 2:
                    message.keyId = reader.fixed64().toBigInt();
                    break;
                case /* repeated CMsgSteamDatagramCertificateSigned certs */ 5:
                    message.certs.push(CMsgSteamDatagramCertificateSigned.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramSignedRelayAuthTicket, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed64 reserved_do_not_use = 1; */
        if (message.reservedDoNotUse !== undefined)
            writer.tag(1, WireType.Bit64).fixed64(message.reservedDoNotUse);
        /* optional bytes ticket = 3; */
        if (message.ticket !== undefined)
            writer.tag(3, WireType.LengthDelimited).bytes(message.ticket);
        /* optional bytes signature = 4; */
        if (message.signature !== undefined)
            writer.tag(4, WireType.LengthDelimited).bytes(message.signature);
        /* optional fixed64 key_id = 2; */
        if (message.keyId !== undefined)
            writer.tag(2, WireType.Bit64).fixed64(message.keyId);
        /* repeated CMsgSteamDatagramCertificateSigned certs = 5; */
        for (let i = 0; i < message.certs.length; i++)
            CMsgSteamDatagramCertificateSigned.internalBinaryWrite(message.certs[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramSignedRelayAuthTicket
 */
export const CMsgSteamDatagramSignedRelayAuthTicket = new CMsgSteamDatagramSignedRelayAuthTicket$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramCachedCredentialsForApp$Type extends MessageType<CMsgSteamDatagramCachedCredentialsForApp> {
    constructor() {
        super("CMsgSteamDatagramCachedCredentialsForApp", [
            { no: 1, name: "private_key", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "cert", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "relay_tickets", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramCachedCredentialsForApp>): CMsgSteamDatagramCachedCredentialsForApp {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.relayTickets = [];
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramCachedCredentialsForApp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramCachedCredentialsForApp): CMsgSteamDatagramCachedCredentialsForApp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bytes private_key */ 1:
                    message.privateKey = reader.bytes();
                    break;
                case /* optional bytes cert */ 2:
                    message.cert = reader.bytes();
                    break;
                case /* repeated bytes relay_tickets */ 3:
                    message.relayTickets.push(reader.bytes());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramCachedCredentialsForApp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bytes private_key = 1; */
        if (message.privateKey !== undefined)
            writer.tag(1, WireType.LengthDelimited).bytes(message.privateKey);
        /* optional bytes cert = 2; */
        if (message.cert !== undefined)
            writer.tag(2, WireType.LengthDelimited).bytes(message.cert);
        /* repeated bytes relay_tickets = 3; */
        for (let i = 0; i < message.relayTickets.length; i++)
            writer.tag(3, WireType.LengthDelimited).bytes(message.relayTickets[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramCachedCredentialsForApp
 */
export const CMsgSteamDatagramCachedCredentialsForApp = new CMsgSteamDatagramCachedCredentialsForApp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramGameCoordinatorServerLogin$Type extends MessageType<CMsgSteamDatagramGameCoordinatorServerLogin> {
    constructor() {
        super("CMsgSteamDatagramGameCoordinatorServerLogin", [
            { no: 1, name: "time_generated", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "appid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "routing", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "appdata", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 5, name: "legacy_identity_binary", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "identity_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 99, name: "dummy_steam_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramGameCoordinatorServerLogin>): CMsgSteamDatagramGameCoordinatorServerLogin {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramGameCoordinatorServerLogin>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramGameCoordinatorServerLogin): CMsgSteamDatagramGameCoordinatorServerLogin {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 time_generated */ 1:
                    message.timeGenerated = reader.uint32();
                    break;
                case /* optional uint32 appid */ 2:
                    message.appid = reader.uint32();
                    break;
                case /* optional bytes routing */ 3:
                    message.routing = reader.bytes();
                    break;
                case /* optional bytes appdata */ 4:
                    message.appdata = reader.bytes();
                    break;
                case /* optional bytes legacy_identity_binary */ 5:
                    message.legacyIdentityBinary = reader.bytes();
                    break;
                case /* optional string identity_string */ 6:
                    message.identityString = reader.string();
                    break;
                case /* optional fixed64 dummy_steam_id */ 99:
                    message.dummySteamId = reader.fixed64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramGameCoordinatorServerLogin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 time_generated = 1; */
        if (message.timeGenerated !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.timeGenerated);
        /* optional uint32 appid = 2; */
        if (message.appid !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.appid);
        /* optional bytes routing = 3; */
        if (message.routing !== undefined)
            writer.tag(3, WireType.LengthDelimited).bytes(message.routing);
        /* optional bytes appdata = 4; */
        if (message.appdata !== undefined)
            writer.tag(4, WireType.LengthDelimited).bytes(message.appdata);
        /* optional bytes legacy_identity_binary = 5; */
        if (message.legacyIdentityBinary !== undefined)
            writer.tag(5, WireType.LengthDelimited).bytes(message.legacyIdentityBinary);
        /* optional string identity_string = 6; */
        if (message.identityString !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.identityString);
        /* optional fixed64 dummy_steam_id = 99; */
        if (message.dummySteamId !== undefined)
            writer.tag(99, WireType.Bit64).fixed64(message.dummySteamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramGameCoordinatorServerLogin
 */
export const CMsgSteamDatagramGameCoordinatorServerLogin = new CMsgSteamDatagramGameCoordinatorServerLogin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramSignedGameCoordinatorServerLogin$Type extends MessageType<CMsgSteamDatagramSignedGameCoordinatorServerLogin> {
    constructor() {
        super("CMsgSteamDatagramSignedGameCoordinatorServerLogin", [
            { no: 1, name: "cert", kind: "message", T: () => CMsgSteamDatagramCertificateSigned },
            { no: 2, name: "login", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "signature", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramSignedGameCoordinatorServerLogin>): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramSignedGameCoordinatorServerLogin>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramSignedGameCoordinatorServerLogin): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional CMsgSteamDatagramCertificateSigned cert */ 1:
                    message.cert = CMsgSteamDatagramCertificateSigned.internalBinaryRead(reader, reader.uint32(), options, message.cert);
                    break;
                case /* optional bytes login */ 2:
                    message.login = reader.bytes();
                    break;
                case /* optional bytes signature */ 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramSignedGameCoordinatorServerLogin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional CMsgSteamDatagramCertificateSigned cert = 1; */
        if (message.cert)
            CMsgSteamDatagramCertificateSigned.internalBinaryWrite(message.cert, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional bytes login = 2; */
        if (message.login !== undefined)
            writer.tag(2, WireType.LengthDelimited).bytes(message.login);
        /* optional bytes signature = 3; */
        if (message.signature !== undefined)
            writer.tag(3, WireType.LengthDelimited).bytes(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramSignedGameCoordinatorServerLogin
 */
export const CMsgSteamDatagramSignedGameCoordinatorServerLogin = new CMsgSteamDatagramSignedGameCoordinatorServerLogin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamDatagramHostedServerAddressPlaintext$Type extends MessageType<CMsgSteamDatagramHostedServerAddressPlaintext> {
    constructor() {
        super("CMsgSteamDatagramHostedServerAddressPlaintext", [
            { no: 1, name: "ipv4", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "ipv6", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "port", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "routing_secret", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "protocol_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamDatagramHostedServerAddressPlaintext>): CMsgSteamDatagramHostedServerAddressPlaintext {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamDatagramHostedServerAddressPlaintext>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamDatagramHostedServerAddressPlaintext): CMsgSteamDatagramHostedServerAddressPlaintext {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 ipv4 */ 1:
                    message.ipv4 = reader.fixed32();
                    break;
                case /* optional bytes ipv6 */ 2:
                    message.ipv6 = reader.bytes();
                    break;
                case /* optional uint32 port */ 3:
                    message.port = reader.uint32();
                    break;
                case /* optional fixed64 routing_secret */ 4:
                    message.routingSecret = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 protocol_version */ 5:
                    message.protocolVersion = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CMsgSteamDatagramHostedServerAddressPlaintext, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 ipv4 = 1; */
        if (message.ipv4 !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.ipv4);
        /* optional bytes ipv6 = 2; */
        if (message.ipv6 !== undefined)
            writer.tag(2, WireType.LengthDelimited).bytes(message.ipv6);
        /* optional uint32 port = 3; */
        if (message.port !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.port);
        /* optional fixed64 routing_secret = 4; */
        if (message.routingSecret !== undefined)
            writer.tag(4, WireType.Bit64).fixed64(message.routingSecret);
        /* optional uint32 protocol_version = 5; */
        if (message.protocolVersion !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.protocolVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamDatagramHostedServerAddressPlaintext
 */
export const CMsgSteamDatagramHostedServerAddressPlaintext = new CMsgSteamDatagramHostedServerAddressPlaintext$Type();

// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "steamnetworkingsockets_messages_udp.proto" (syntax proto2)
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
import { CMsgSteamDatagramConnectionQuality } from "./steamnetworkingsockets_messages";
import { CMsgSteamNetworkingIdentityLegacyBinary } from "./steamnetworkingsockets_messages_certs";
import { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";
import { CMsgSteamDatagramSessionCryptInfoSigned } from "./steamnetworkingsockets_messages";
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_ChallengeRequest
 */
export interface CMsgSteamSockets_UDP_ChallengeRequest {
    /**
     * @generated from protobuf field: optional fixed32 connection_id = 1;
     */
    connectionId?: number;
    /**
     * @generated from protobuf field: optional fixed64 my_timestamp = 3;
     */
    myTimestamp?: bigint;
    /**
     * @generated from protobuf field: optional uint32 protocol_version = 4;
     */
    protocolVersion?: number;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_ChallengeReply
 */
export interface CMsgSteamSockets_UDP_ChallengeReply {
    /**
     * @generated from protobuf field: optional fixed32 connection_id = 1;
     */
    connectionId?: number;
    /**
     * @generated from protobuf field: optional fixed64 challenge = 2;
     */
    challenge?: bigint;
    /**
     * @generated from protobuf field: optional fixed64 your_timestamp = 3;
     */
    yourTimestamp?: bigint;
    /**
     * @generated from protobuf field: optional uint32 protocol_version = 4;
     */
    protocolVersion?: number;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_ConnectRequest
 */
export interface CMsgSteamSockets_UDP_ConnectRequest {
    /**
     * @generated from protobuf field: optional fixed32 client_connection_id = 1;
     */
    clientConnectionId?: number;
    /**
     * @generated from protobuf field: optional fixed64 challenge = 2;
     */
    challenge?: bigint;
    /**
     * @generated from protobuf field: optional fixed64 my_timestamp = 5;
     */
    myTimestamp?: bigint;
    /**
     * @generated from protobuf field: optional uint32 ping_est_ms = 6;
     */
    pingEstMs?: number;
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramSessionCryptInfoSigned crypt = 7;
     */
    crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramCertificateSigned cert = 4;
     */
    cert?: CMsgSteamDatagramCertificateSigned;
    /**
     * @generated from protobuf field: optional uint32 legacy_protocol_version = 8;
     */
    legacyProtocolVersion?: number;
    /**
     * @generated from protobuf field: optional string identity_string = 10;
     */
    identityString?: string;
    /**
     * @generated from protobuf field: optional fixed64 legacy_client_steam_id = 3;
     */
    legacyClientSteamId?: bigint;
    /**
     * @generated from protobuf field: optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary = 9;
     */
    legacyIdentityBinary?: CMsgSteamNetworkingIdentityLegacyBinary;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_ConnectOK
 */
export interface CMsgSteamSockets_UDP_ConnectOK {
    /**
     * @generated from protobuf field: optional fixed32 client_connection_id = 1;
     */
    clientConnectionId?: number;
    /**
     * @generated from protobuf field: optional fixed32 server_connection_id = 5;
     */
    serverConnectionId?: number;
    /**
     * @generated from protobuf field: optional fixed64 your_timestamp = 3;
     */
    yourTimestamp?: bigint;
    /**
     * @generated from protobuf field: optional uint32 delay_time_usec = 4;
     */
    delayTimeUsec?: number;
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramSessionCryptInfoSigned crypt = 7;
     */
    crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramCertificateSigned cert = 8;
     */
    cert?: CMsgSteamDatagramCertificateSigned;
    /**
     * @generated from protobuf field: optional string identity_string = 11;
     */
    identityString?: string;
    /**
     * @generated from protobuf field: optional fixed64 legacy_server_steam_id = 2;
     */
    legacyServerSteamId?: bigint;
    /**
     * @generated from protobuf field: optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary = 10;
     */
    legacyIdentityBinary?: CMsgSteamNetworkingIdentityLegacyBinary;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_ConnectionClosed
 */
export interface CMsgSteamSockets_UDP_ConnectionClosed {
    /**
     * @generated from protobuf field: optional fixed32 to_connection_id = 4;
     */
    toConnectionId?: number;
    /**
     * @generated from protobuf field: optional fixed32 from_connection_id = 5;
     */
    fromConnectionId?: number;
    /**
     * @generated from protobuf field: optional string debug = 2;
     */
    debug?: string;
    /**
     * @generated from protobuf field: optional uint32 reason_code = 3;
     */
    reasonCode?: number;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_NoConnection
 */
export interface CMsgSteamSockets_UDP_NoConnection {
    /**
     * @generated from protobuf field: optional fixed32 from_connection_id = 2;
     */
    fromConnectionId?: number;
    /**
     * @generated from protobuf field: optional fixed32 to_connection_id = 3;
     */
    toConnectionId?: number;
}
/**
 * @generated from protobuf message CMsgSteamSockets_UDP_Stats
 */
export interface CMsgSteamSockets_UDP_Stats {
    /**
     * @generated from protobuf field: optional CMsgSteamDatagramConnectionQuality stats = 1;
     */
    stats?: CMsgSteamDatagramConnectionQuality;
    /**
     * @generated from protobuf field: optional uint32 flags = 3;
     */
    flags?: number;
}
/**
 * @generated from protobuf enum CMsgSteamSockets_UDP_Stats.Flags
 */
export enum CMsgSteamSockets_UDP_Stats_Flags {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    UNSPECIFIED$ = 0,
    /**
     * @generated from protobuf enum value: ACK_REQUEST_E2E = 2;
     */
    ACK_REQUEST_E2E = 2,
    /**
     * @generated from protobuf enum value: ACK_REQUEST_IMMEDIATE = 4;
     */
    ACK_REQUEST_IMMEDIATE = 4,
    /**
     * @generated from protobuf enum value: NOT_PRIMARY_TRANSPORT_E2E = 16;
     */
    NOT_PRIMARY_TRANSPORT_E2E = 16
}
/**
 * @generated from protobuf enum ESteamNetworkingUDPMsgID
 */
export enum ESteamNetworkingUDPMsgID {
    /**
     * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
     */
    UNSPECIFIED$ = 0,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_ChallengeRequest = 32;
     */
    k_ESteamNetworkingUDPMsg_ChallengeRequest = 32,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_ChallengeReply = 33;
     */
    k_ESteamNetworkingUDPMsg_ChallengeReply = 33,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_ConnectRequest = 34;
     */
    k_ESteamNetworkingUDPMsg_ConnectRequest = 34,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_ConnectOK = 35;
     */
    k_ESteamNetworkingUDPMsg_ConnectOK = 35,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_ConnectionClosed = 36;
     */
    k_ESteamNetworkingUDPMsg_ConnectionClosed = 36,
    /**
     * @generated from protobuf enum value: k_ESteamNetworkingUDPMsg_NoConnection = 37;
     */
    k_ESteamNetworkingUDPMsg_NoConnection = 37
}
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_ChallengeRequest$Type extends MessageType<CMsgSteamSockets_UDP_ChallengeRequest> {
    constructor() {
        super("CMsgSteamSockets_UDP_ChallengeRequest", [
            { no: 1, name: "connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "my_timestamp", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "protocol_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_ChallengeRequest>): CMsgSteamSockets_UDP_ChallengeRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_ChallengeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_ChallengeRequest): CMsgSteamSockets_UDP_ChallengeRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 connection_id */ 1:
                    message.connectionId = reader.fixed32();
                    break;
                case /* optional fixed64 my_timestamp */ 3:
                    message.myTimestamp = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 protocol_version */ 4:
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_ChallengeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 connection_id = 1; */
        if (message.connectionId !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.connectionId);
        /* optional fixed64 my_timestamp = 3; */
        if (message.myTimestamp !== undefined)
            writer.tag(3, WireType.Bit64).fixed64(message.myTimestamp);
        /* optional uint32 protocol_version = 4; */
        if (message.protocolVersion !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.protocolVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_ChallengeRequest
 */
export const CMsgSteamSockets_UDP_ChallengeRequest = new CMsgSteamSockets_UDP_ChallengeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_ChallengeReply$Type extends MessageType<CMsgSteamSockets_UDP_ChallengeReply> {
    constructor() {
        super("CMsgSteamSockets_UDP_ChallengeReply", [
            { no: 1, name: "connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "challenge", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "your_timestamp", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "protocol_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_ChallengeReply>): CMsgSteamSockets_UDP_ChallengeReply {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_ChallengeReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_ChallengeReply): CMsgSteamSockets_UDP_ChallengeReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 connection_id */ 1:
                    message.connectionId = reader.fixed32();
                    break;
                case /* optional fixed64 challenge */ 2:
                    message.challenge = reader.fixed64().toBigInt();
                    break;
                case /* optional fixed64 your_timestamp */ 3:
                    message.yourTimestamp = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 protocol_version */ 4:
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_ChallengeReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 connection_id = 1; */
        if (message.connectionId !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.connectionId);
        /* optional fixed64 challenge = 2; */
        if (message.challenge !== undefined)
            writer.tag(2, WireType.Bit64).fixed64(message.challenge);
        /* optional fixed64 your_timestamp = 3; */
        if (message.yourTimestamp !== undefined)
            writer.tag(3, WireType.Bit64).fixed64(message.yourTimestamp);
        /* optional uint32 protocol_version = 4; */
        if (message.protocolVersion !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.protocolVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_ChallengeReply
 */
export const CMsgSteamSockets_UDP_ChallengeReply = new CMsgSteamSockets_UDP_ChallengeReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_ConnectRequest$Type extends MessageType<CMsgSteamSockets_UDP_ConnectRequest> {
    constructor() {
        super("CMsgSteamSockets_UDP_ConnectRequest", [
            { no: 1, name: "client_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "challenge", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "my_timestamp", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "ping_est_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "crypt", kind: "message", T: () => CMsgSteamDatagramSessionCryptInfoSigned },
            { no: 4, name: "cert", kind: "message", T: () => CMsgSteamDatagramCertificateSigned },
            { no: 8, name: "legacy_protocol_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "identity_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "legacy_client_steam_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "legacy_identity_binary", kind: "message", T: () => CMsgSteamNetworkingIdentityLegacyBinary }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_ConnectRequest>): CMsgSteamSockets_UDP_ConnectRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_ConnectRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_ConnectRequest): CMsgSteamSockets_UDP_ConnectRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 client_connection_id */ 1:
                    message.clientConnectionId = reader.fixed32();
                    break;
                case /* optional fixed64 challenge */ 2:
                    message.challenge = reader.fixed64().toBigInt();
                    break;
                case /* optional fixed64 my_timestamp */ 5:
                    message.myTimestamp = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 ping_est_ms */ 6:
                    message.pingEstMs = reader.uint32();
                    break;
                case /* optional CMsgSteamDatagramSessionCryptInfoSigned crypt */ 7:
                    message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.internalBinaryRead(reader, reader.uint32(), options, message.crypt);
                    break;
                case /* optional CMsgSteamDatagramCertificateSigned cert */ 4:
                    message.cert = CMsgSteamDatagramCertificateSigned.internalBinaryRead(reader, reader.uint32(), options, message.cert);
                    break;
                case /* optional uint32 legacy_protocol_version */ 8:
                    message.legacyProtocolVersion = reader.uint32();
                    break;
                case /* optional string identity_string */ 10:
                    message.identityString = reader.string();
                    break;
                case /* optional fixed64 legacy_client_steam_id */ 3:
                    message.legacyClientSteamId = reader.fixed64().toBigInt();
                    break;
                case /* optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary */ 9:
                    message.legacyIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.internalBinaryRead(reader, reader.uint32(), options, message.legacyIdentityBinary);
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_ConnectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 client_connection_id = 1; */
        if (message.clientConnectionId !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.clientConnectionId);
        /* optional fixed64 challenge = 2; */
        if (message.challenge !== undefined)
            writer.tag(2, WireType.Bit64).fixed64(message.challenge);
        /* optional fixed64 my_timestamp = 5; */
        if (message.myTimestamp !== undefined)
            writer.tag(5, WireType.Bit64).fixed64(message.myTimestamp);
        /* optional uint32 ping_est_ms = 6; */
        if (message.pingEstMs !== undefined)
            writer.tag(6, WireType.Varint).uint32(message.pingEstMs);
        /* optional CMsgSteamDatagramSessionCryptInfoSigned crypt = 7; */
        if (message.crypt)
            CMsgSteamDatagramSessionCryptInfoSigned.internalBinaryWrite(message.crypt, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* optional CMsgSteamDatagramCertificateSigned cert = 4; */
        if (message.cert)
            CMsgSteamDatagramCertificateSigned.internalBinaryWrite(message.cert, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 legacy_protocol_version = 8; */
        if (message.legacyProtocolVersion !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.legacyProtocolVersion);
        /* optional string identity_string = 10; */
        if (message.identityString !== undefined)
            writer.tag(10, WireType.LengthDelimited).string(message.identityString);
        /* optional fixed64 legacy_client_steam_id = 3; */
        if (message.legacyClientSteamId !== undefined)
            writer.tag(3, WireType.Bit64).fixed64(message.legacyClientSteamId);
        /* optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary = 9; */
        if (message.legacyIdentityBinary)
            CMsgSteamNetworkingIdentityLegacyBinary.internalBinaryWrite(message.legacyIdentityBinary, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_ConnectRequest
 */
export const CMsgSteamSockets_UDP_ConnectRequest = new CMsgSteamSockets_UDP_ConnectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_ConnectOK$Type extends MessageType<CMsgSteamSockets_UDP_ConnectOK> {
    constructor() {
        super("CMsgSteamSockets_UDP_ConnectOK", [
            { no: 1, name: "client_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 5, name: "server_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "your_timestamp", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "delay_time_usec", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "crypt", kind: "message", T: () => CMsgSteamDatagramSessionCryptInfoSigned },
            { no: 8, name: "cert", kind: "message", T: () => CMsgSteamDatagramCertificateSigned },
            { no: 11, name: "identity_string", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "legacy_server_steam_id", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "legacy_identity_binary", kind: "message", T: () => CMsgSteamNetworkingIdentityLegacyBinary }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_ConnectOK>): CMsgSteamSockets_UDP_ConnectOK {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_ConnectOK>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_ConnectOK): CMsgSteamSockets_UDP_ConnectOK {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 client_connection_id */ 1:
                    message.clientConnectionId = reader.fixed32();
                    break;
                case /* optional fixed32 server_connection_id */ 5:
                    message.serverConnectionId = reader.fixed32();
                    break;
                case /* optional fixed64 your_timestamp */ 3:
                    message.yourTimestamp = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 delay_time_usec */ 4:
                    message.delayTimeUsec = reader.uint32();
                    break;
                case /* optional CMsgSteamDatagramSessionCryptInfoSigned crypt */ 7:
                    message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.internalBinaryRead(reader, reader.uint32(), options, message.crypt);
                    break;
                case /* optional CMsgSteamDatagramCertificateSigned cert */ 8:
                    message.cert = CMsgSteamDatagramCertificateSigned.internalBinaryRead(reader, reader.uint32(), options, message.cert);
                    break;
                case /* optional string identity_string */ 11:
                    message.identityString = reader.string();
                    break;
                case /* optional fixed64 legacy_server_steam_id */ 2:
                    message.legacyServerSteamId = reader.fixed64().toBigInt();
                    break;
                case /* optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary */ 10:
                    message.legacyIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.internalBinaryRead(reader, reader.uint32(), options, message.legacyIdentityBinary);
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_ConnectOK, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 client_connection_id = 1; */
        if (message.clientConnectionId !== undefined)
            writer.tag(1, WireType.Bit32).fixed32(message.clientConnectionId);
        /* optional fixed32 server_connection_id = 5; */
        if (message.serverConnectionId !== undefined)
            writer.tag(5, WireType.Bit32).fixed32(message.serverConnectionId);
        /* optional fixed64 your_timestamp = 3; */
        if (message.yourTimestamp !== undefined)
            writer.tag(3, WireType.Bit64).fixed64(message.yourTimestamp);
        /* optional uint32 delay_time_usec = 4; */
        if (message.delayTimeUsec !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.delayTimeUsec);
        /* optional CMsgSteamDatagramSessionCryptInfoSigned crypt = 7; */
        if (message.crypt)
            CMsgSteamDatagramSessionCryptInfoSigned.internalBinaryWrite(message.crypt, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* optional CMsgSteamDatagramCertificateSigned cert = 8; */
        if (message.cert)
            CMsgSteamDatagramCertificateSigned.internalBinaryWrite(message.cert, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* optional string identity_string = 11; */
        if (message.identityString !== undefined)
            writer.tag(11, WireType.LengthDelimited).string(message.identityString);
        /* optional fixed64 legacy_server_steam_id = 2; */
        if (message.legacyServerSteamId !== undefined)
            writer.tag(2, WireType.Bit64).fixed64(message.legacyServerSteamId);
        /* optional CMsgSteamNetworkingIdentityLegacyBinary legacy_identity_binary = 10; */
        if (message.legacyIdentityBinary)
            CMsgSteamNetworkingIdentityLegacyBinary.internalBinaryWrite(message.legacyIdentityBinary, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_ConnectOK
 */
export const CMsgSteamSockets_UDP_ConnectOK = new CMsgSteamSockets_UDP_ConnectOK$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_ConnectionClosed$Type extends MessageType<CMsgSteamSockets_UDP_ConnectionClosed> {
    constructor() {
        super("CMsgSteamSockets_UDP_ConnectionClosed", [
            { no: 4, name: "to_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 5, name: "from_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "debug", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "reason_code", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_ConnectionClosed>): CMsgSteamSockets_UDP_ConnectionClosed {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_ConnectionClosed>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_ConnectionClosed): CMsgSteamSockets_UDP_ConnectionClosed {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 to_connection_id */ 4:
                    message.toConnectionId = reader.fixed32();
                    break;
                case /* optional fixed32 from_connection_id */ 5:
                    message.fromConnectionId = reader.fixed32();
                    break;
                case /* optional string debug */ 2:
                    message.debug = reader.string();
                    break;
                case /* optional uint32 reason_code */ 3:
                    message.reasonCode = reader.uint32();
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_ConnectionClosed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 to_connection_id = 4; */
        if (message.toConnectionId !== undefined)
            writer.tag(4, WireType.Bit32).fixed32(message.toConnectionId);
        /* optional fixed32 from_connection_id = 5; */
        if (message.fromConnectionId !== undefined)
            writer.tag(5, WireType.Bit32).fixed32(message.fromConnectionId);
        /* optional string debug = 2; */
        if (message.debug !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.debug);
        /* optional uint32 reason_code = 3; */
        if (message.reasonCode !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.reasonCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_ConnectionClosed
 */
export const CMsgSteamSockets_UDP_ConnectionClosed = new CMsgSteamSockets_UDP_ConnectionClosed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_NoConnection$Type extends MessageType<CMsgSteamSockets_UDP_NoConnection> {
    constructor() {
        super("CMsgSteamSockets_UDP_NoConnection", [
            { no: 2, name: "from_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "to_connection_id", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_NoConnection>): CMsgSteamSockets_UDP_NoConnection {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_NoConnection>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_NoConnection): CMsgSteamSockets_UDP_NoConnection {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 from_connection_id */ 2:
                    message.fromConnectionId = reader.fixed32();
                    break;
                case /* optional fixed32 to_connection_id */ 3:
                    message.toConnectionId = reader.fixed32();
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_NoConnection, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional fixed32 from_connection_id = 2; */
        if (message.fromConnectionId !== undefined)
            writer.tag(2, WireType.Bit32).fixed32(message.fromConnectionId);
        /* optional fixed32 to_connection_id = 3; */
        if (message.toConnectionId !== undefined)
            writer.tag(3, WireType.Bit32).fixed32(message.toConnectionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_NoConnection
 */
export const CMsgSteamSockets_UDP_NoConnection = new CMsgSteamSockets_UDP_NoConnection$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMsgSteamSockets_UDP_Stats$Type extends MessageType<CMsgSteamSockets_UDP_Stats> {
    constructor() {
        super("CMsgSteamSockets_UDP_Stats", [
            { no: 1, name: "stats", kind: "message", T: () => CMsgSteamDatagramConnectionQuality },
            { no: 3, name: "flags", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CMsgSteamSockets_UDP_Stats>): CMsgSteamSockets_UDP_Stats {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CMsgSteamSockets_UDP_Stats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMsgSteamSockets_UDP_Stats): CMsgSteamSockets_UDP_Stats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional CMsgSteamDatagramConnectionQuality stats */ 1:
                    message.stats = CMsgSteamDatagramConnectionQuality.internalBinaryRead(reader, reader.uint32(), options, message.stats);
                    break;
                case /* optional uint32 flags */ 3:
                    message.flags = reader.uint32();
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
    internalBinaryWrite(message: CMsgSteamSockets_UDP_Stats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional CMsgSteamDatagramConnectionQuality stats = 1; */
        if (message.stats)
            CMsgSteamDatagramConnectionQuality.internalBinaryWrite(message.stats, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 flags = 3; */
        if (message.flags !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.flags);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMsgSteamSockets_UDP_Stats
 */
export const CMsgSteamSockets_UDP_Stats = new CMsgSteamSockets_UDP_Stats$Type();

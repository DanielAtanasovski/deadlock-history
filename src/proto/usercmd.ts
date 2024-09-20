// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "usercmd.proto" (syntax proto2)
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
import { CMsgQAngle } from "./networkbasetypes";
/**
 * @generated from protobuf message CInButtonStatePB
 */
export interface CInButtonStatePB {
    /**
     * @generated from protobuf field: optional uint64 buttonstate1 = 1;
     */
    buttonstate1?: bigint;
    /**
     * @generated from protobuf field: optional uint64 buttonstate2 = 2;
     */
    buttonstate2?: bigint;
    /**
     * @generated from protobuf field: optional uint64 buttonstate3 = 3;
     */
    buttonstate3?: bigint;
}
/**
 * @generated from protobuf message CSubtickMoveStep
 */
export interface CSubtickMoveStep {
    /**
     * @generated from protobuf field: optional uint64 button = 1;
     */
    button?: bigint;
    /**
     * @generated from protobuf field: optional bool pressed = 2;
     */
    pressed?: boolean;
    /**
     * @generated from protobuf field: optional float when = 3;
     */
    when?: number;
    /**
     * @generated from protobuf field: optional float analog_forward_delta = 4;
     */
    analogForwardDelta?: number;
    /**
     * @generated from protobuf field: optional float analog_left_delta = 5;
     */
    analogLeftDelta?: number;
}
/**
 * @generated from protobuf message CBaseUserCmdPB
 */
export interface CBaseUserCmdPB {
    /**
     * @generated from protobuf field: optional int32 legacy_command_number = 1;
     */
    legacyCommandNumber?: number;
    /**
     * @generated from protobuf field: optional int32 client_tick = 2;
     */
    clientTick?: number;
    /**
     * @generated from protobuf field: optional CInButtonStatePB buttons_pb = 3;
     */
    buttonsPb?: CInButtonStatePB;
    /**
     * @generated from protobuf field: optional CMsgQAngle viewangles = 4;
     */
    viewangles?: CMsgQAngle;
    /**
     * @generated from protobuf field: optional float forwardmove = 5;
     */
    forwardmove?: number;
    /**
     * @generated from protobuf field: optional float leftmove = 6;
     */
    leftmove?: number;
    /**
     * @generated from protobuf field: optional float upmove = 7;
     */
    upmove?: number;
    /**
     * @generated from protobuf field: optional int32 impulse = 8;
     */
    impulse?: number;
    /**
     * @generated from protobuf field: optional int32 weaponselect = 9;
     */
    weaponselect?: number;
    /**
     * @generated from protobuf field: optional int32 random_seed = 10;
     */
    randomSeed?: number;
    /**
     * @generated from protobuf field: optional int32 mousedx = 11;
     */
    mousedx?: number;
    /**
     * @generated from protobuf field: optional int32 mousedy = 12;
     */
    mousedy?: number;
    /**
     * @generated from protobuf field: optional uint32 pawn_entity_handle = 14;
     */
    pawnEntityHandle?: number;
    /**
     * @generated from protobuf field: repeated CSubtickMoveStep subtick_moves = 18;
     */
    subtickMoves: CSubtickMoveStep[];
    /**
     * @generated from protobuf field: optional bytes move_crc = 19;
     */
    moveCrc?: Uint8Array;
    /**
     * @generated from protobuf field: optional uint32 consumed_server_angle_changes = 20;
     */
    consumedServerAngleChanges?: number;
    /**
     * @generated from protobuf field: optional int32 cmd_flags = 21;
     */
    cmdFlags?: number;
}
/**
 * @generated from protobuf message CUserCmdBasePB
 */
export interface CUserCmdBasePB {
    /**
     * @generated from protobuf field: optional CBaseUserCmdPB base = 1;
     */
    base?: CBaseUserCmdPB;
}
// @generated message type with reflection information, may provide speed optimized methods
class CInButtonStatePB$Type extends MessageType<CInButtonStatePB> {
    constructor() {
        super("CInButtonStatePB", [
            { no: 1, name: "buttonstate1", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "buttonstate2", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "buttonstate3", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CInButtonStatePB>): CInButtonStatePB {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CInButtonStatePB>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CInButtonStatePB): CInButtonStatePB {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 buttonstate1 */ 1:
                    message.buttonstate1 = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 buttonstate2 */ 2:
                    message.buttonstate2 = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 buttonstate3 */ 3:
                    message.buttonstate3 = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: CInButtonStatePB, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 buttonstate1 = 1; */
        if (message.buttonstate1 !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.buttonstate1);
        /* optional uint64 buttonstate2 = 2; */
        if (message.buttonstate2 !== undefined)
            writer.tag(2, WireType.Varint).uint64(message.buttonstate2);
        /* optional uint64 buttonstate3 = 3; */
        if (message.buttonstate3 !== undefined)
            writer.tag(3, WireType.Varint).uint64(message.buttonstate3);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CInButtonStatePB
 */
export const CInButtonStatePB = new CInButtonStatePB$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CSubtickMoveStep$Type extends MessageType<CSubtickMoveStep> {
    constructor() {
        super("CSubtickMoveStep", [
            { no: 1, name: "button", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "pressed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "when", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "analog_forward_delta", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "analog_left_delta", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<CSubtickMoveStep>): CSubtickMoveStep {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CSubtickMoveStep>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CSubtickMoveStep): CSubtickMoveStep {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 button */ 1:
                    message.button = reader.uint64().toBigInt();
                    break;
                case /* optional bool pressed */ 2:
                    message.pressed = reader.bool();
                    break;
                case /* optional float when */ 3:
                    message.when = reader.float();
                    break;
                case /* optional float analog_forward_delta */ 4:
                    message.analogForwardDelta = reader.float();
                    break;
                case /* optional float analog_left_delta */ 5:
                    message.analogLeftDelta = reader.float();
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
    internalBinaryWrite(message: CSubtickMoveStep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 button = 1; */
        if (message.button !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.button);
        /* optional bool pressed = 2; */
        if (message.pressed !== undefined)
            writer.tag(2, WireType.Varint).bool(message.pressed);
        /* optional float when = 3; */
        if (message.when !== undefined)
            writer.tag(3, WireType.Bit32).float(message.when);
        /* optional float analog_forward_delta = 4; */
        if (message.analogForwardDelta !== undefined)
            writer.tag(4, WireType.Bit32).float(message.analogForwardDelta);
        /* optional float analog_left_delta = 5; */
        if (message.analogLeftDelta !== undefined)
            writer.tag(5, WireType.Bit32).float(message.analogLeftDelta);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CSubtickMoveStep
 */
export const CSubtickMoveStep = new CSubtickMoveStep$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CBaseUserCmdPB$Type extends MessageType<CBaseUserCmdPB> {
    constructor() {
        super("CBaseUserCmdPB", [
            { no: 1, name: "legacy_command_number", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "client_tick", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "buttons_pb", kind: "message", T: () => CInButtonStatePB },
            { no: 4, name: "viewangles", kind: "message", T: () => CMsgQAngle },
            { no: 5, name: "forwardmove", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "leftmove", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "upmove", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "impulse", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "weaponselect", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "random_seed", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "mousedx", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "mousedy", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "pawn_entity_handle", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "subtick_moves", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => CSubtickMoveStep },
            { no: 19, name: "move_crc", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 20, name: "consumed_server_angle_changes", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "cmd_flags", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CBaseUserCmdPB>): CBaseUserCmdPB {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.subtickMoves = [];
        if (value !== undefined)
            reflectionMergePartial<CBaseUserCmdPB>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CBaseUserCmdPB): CBaseUserCmdPB {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 legacy_command_number */ 1:
                    message.legacyCommandNumber = reader.int32();
                    break;
                case /* optional int32 client_tick */ 2:
                    message.clientTick = reader.int32();
                    break;
                case /* optional CInButtonStatePB buttons_pb */ 3:
                    message.buttonsPb = CInButtonStatePB.internalBinaryRead(reader, reader.uint32(), options, message.buttonsPb);
                    break;
                case /* optional CMsgQAngle viewangles */ 4:
                    message.viewangles = CMsgQAngle.internalBinaryRead(reader, reader.uint32(), options, message.viewangles);
                    break;
                case /* optional float forwardmove */ 5:
                    message.forwardmove = reader.float();
                    break;
                case /* optional float leftmove */ 6:
                    message.leftmove = reader.float();
                    break;
                case /* optional float upmove */ 7:
                    message.upmove = reader.float();
                    break;
                case /* optional int32 impulse */ 8:
                    message.impulse = reader.int32();
                    break;
                case /* optional int32 weaponselect */ 9:
                    message.weaponselect = reader.int32();
                    break;
                case /* optional int32 random_seed */ 10:
                    message.randomSeed = reader.int32();
                    break;
                case /* optional int32 mousedx */ 11:
                    message.mousedx = reader.int32();
                    break;
                case /* optional int32 mousedy */ 12:
                    message.mousedy = reader.int32();
                    break;
                case /* optional uint32 pawn_entity_handle */ 14:
                    message.pawnEntityHandle = reader.uint32();
                    break;
                case /* repeated CSubtickMoveStep subtick_moves */ 18:
                    message.subtickMoves.push(CSubtickMoveStep.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bytes move_crc */ 19:
                    message.moveCrc = reader.bytes();
                    break;
                case /* optional uint32 consumed_server_angle_changes */ 20:
                    message.consumedServerAngleChanges = reader.uint32();
                    break;
                case /* optional int32 cmd_flags */ 21:
                    message.cmdFlags = reader.int32();
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
    internalBinaryWrite(message: CBaseUserCmdPB, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int32 legacy_command_number = 1; */
        if (message.legacyCommandNumber !== undefined)
            writer.tag(1, WireType.Varint).int32(message.legacyCommandNumber);
        /* optional int32 client_tick = 2; */
        if (message.clientTick !== undefined)
            writer.tag(2, WireType.Varint).int32(message.clientTick);
        /* optional CInButtonStatePB buttons_pb = 3; */
        if (message.buttonsPb)
            CInButtonStatePB.internalBinaryWrite(message.buttonsPb, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* optional CMsgQAngle viewangles = 4; */
        if (message.viewangles)
            CMsgQAngle.internalBinaryWrite(message.viewangles, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* optional float forwardmove = 5; */
        if (message.forwardmove !== undefined)
            writer.tag(5, WireType.Bit32).float(message.forwardmove);
        /* optional float leftmove = 6; */
        if (message.leftmove !== undefined)
            writer.tag(6, WireType.Bit32).float(message.leftmove);
        /* optional float upmove = 7; */
        if (message.upmove !== undefined)
            writer.tag(7, WireType.Bit32).float(message.upmove);
        /* optional int32 impulse = 8; */
        if (message.impulse !== undefined)
            writer.tag(8, WireType.Varint).int32(message.impulse);
        /* optional int32 weaponselect = 9; */
        if (message.weaponselect !== undefined)
            writer.tag(9, WireType.Varint).int32(message.weaponselect);
        /* optional int32 random_seed = 10; */
        if (message.randomSeed !== undefined)
            writer.tag(10, WireType.Varint).int32(message.randomSeed);
        /* optional int32 mousedx = 11; */
        if (message.mousedx !== undefined)
            writer.tag(11, WireType.Varint).int32(message.mousedx);
        /* optional int32 mousedy = 12; */
        if (message.mousedy !== undefined)
            writer.tag(12, WireType.Varint).int32(message.mousedy);
        /* optional uint32 pawn_entity_handle = 14; */
        if (message.pawnEntityHandle !== undefined)
            writer.tag(14, WireType.Varint).uint32(message.pawnEntityHandle);
        /* repeated CSubtickMoveStep subtick_moves = 18; */
        for (let i = 0; i < message.subtickMoves.length; i++)
            CSubtickMoveStep.internalBinaryWrite(message.subtickMoves[i], writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* optional bytes move_crc = 19; */
        if (message.moveCrc !== undefined)
            writer.tag(19, WireType.LengthDelimited).bytes(message.moveCrc);
        /* optional uint32 consumed_server_angle_changes = 20; */
        if (message.consumedServerAngleChanges !== undefined)
            writer.tag(20, WireType.Varint).uint32(message.consumedServerAngleChanges);
        /* optional int32 cmd_flags = 21; */
        if (message.cmdFlags !== undefined)
            writer.tag(21, WireType.Varint).int32(message.cmdFlags);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CBaseUserCmdPB
 */
export const CBaseUserCmdPB = new CBaseUserCmdPB$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CUserCmdBasePB$Type extends MessageType<CUserCmdBasePB> {
    constructor() {
        super("CUserCmdBasePB", [
            { no: 1, name: "base", kind: "message", T: () => CBaseUserCmdPB }
        ]);
    }
    create(value?: PartialMessage<CUserCmdBasePB>): CUserCmdBasePB {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CUserCmdBasePB>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CUserCmdBasePB): CUserCmdBasePB {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional CBaseUserCmdPB base */ 1:
                    message.base = CBaseUserCmdPB.internalBinaryRead(reader, reader.uint32(), options, message.base);
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
    internalBinaryWrite(message: CUserCmdBasePB, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional CBaseUserCmdPB base = 1; */
        if (message.base)
            CBaseUserCmdPB.internalBinaryWrite(message.base, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CUserCmdBasePB
 */
export const CUserCmdBasePB = new CUserCmdBasePB$Type();

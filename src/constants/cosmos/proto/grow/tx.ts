/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "core.grow.v1beta1";

export const typeUrlMsgGrowDeposit = "/core.grow.v1beta1.MsgGrowDeposit";
export const typeUrlMsgGrowWithdrawal = "/core.grow.v1beta1.MsgGrowWithdrawal";
export const typeUrlMsgCreateBorrow = "/core.grow.v1beta1.MsgCreateBorrow";
export const typeUrlMsgDeleteBorrow = "/core.grow.v1beta1.MsgDeleteBorrow";
export const typeUrlMsgMsgCreateLend = "/core.grow.v1beta1.MsgCreateLend";
export const typeUrlMsgWithdrawalLend = "/core.grow.v1beta1.MsgWithdrawalLend";
export const typeUrlMsgOpenLiquidationPosition = "/core.grow.v1beta1.MsgOpenLiquidationPosition";
export const typeUrlMsgCloseLiquidationPosition = "/core.grow.v1beta1.MsgCloseLiquidationPosition";

/** Grow Logic */
export interface MsgGrowDeposit {
  creator: string;
  amountIn: string;
  denomOut: string;
}

export interface MsgGrowDepositResponse {
  creator: string;
  amountIn: string;
  amountOut: string;
}

export interface MsgGrowWithdrawal {
  creator: string;
  amountIn: string;
}

export interface MsgGrowWithdrawalResponse {
  creator: string;
  amountIn: string;
  amountOut: string;
}

export interface MsgCreateBorrow {
  borrower: string;
  denomIn: string;
  desiredAmount: string;
}

export interface MsgCreateBorrowResponse {
  borrower: string;
  denomIn: string;
  amountOut: string;
  loanId: string;
}

export interface MsgDeleteBorrow {
  borrower: string;
  amountIn: string;
  denomOut: string;
}

export interface MsgDeleteBorrowResponse {
  borrower: string;
  amountOut: string;
  LoanId: string;
}

export interface MsgCreateLend {
  depositor: string;
  amountIn: string;
}

export interface MsgCreateLendResponse {
  depositor: string;
  positionId: string;
}

export interface MsgWithdrawalLend {
  depositor: string;
  amountIn: string;
  denomOut: string;
}

export interface MsgWithdrawalLendResponse {
  depositor: string;
  amountOut: string;
}

export interface MsgOpenLiquidationPosition {
  creator: string;
  amountIn: string;
  asset: string;
  premium: string;
}

export interface MsgOpenLiquidationPositionResponse {
  creator: string;
  liquidatorPositionId: string;
}

export interface MsgCloseLiquidationPosition {
  creator: string;
  liquidatorPositionId: string;
}

export interface MsgCloseLiquidationPositionResponse {
  creator: string;
  amountOut: string;
}

function createBaseMsgGrowDeposit(): MsgGrowDeposit {
  return { creator: "", amountIn: "", denomOut: "" };
}

export const MsgGrowDeposit = {
  encode(message: MsgGrowDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrowDeposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrowDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denomOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGrowDeposit {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      denomOut: isSet(object.denomOut) ? globalThis.String(object.denomOut) : "",
    };
  },

  toJSON(message: MsgGrowDeposit): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGrowDeposit>, I>>(base?: I): MsgGrowDeposit {
    return MsgGrowDeposit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrowDeposit>, I>>(object: I): MsgGrowDeposit {
    const message = createBaseMsgGrowDeposit();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseMsgGrowDepositResponse(): MsgGrowDepositResponse {
  return { creator: "", amountIn: "", amountOut: "" };
}

export const MsgGrowDepositResponse = {
  encode(message: MsgGrowDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrowDepositResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrowDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGrowDepositResponse {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgGrowDepositResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGrowDepositResponse>, I>>(base?: I): MsgGrowDepositResponse {
    return MsgGrowDepositResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrowDepositResponse>, I>>(object: I): MsgGrowDepositResponse {
    const message = createBaseMsgGrowDepositResponse();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseMsgGrowWithdrawal(): MsgGrowWithdrawal {
  return { creator: "", amountIn: "" };
}

export const MsgGrowWithdrawal = {
  encode(message: MsgGrowWithdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrowWithdrawal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrowWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGrowWithdrawal {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
    };
  },

  toJSON(message: MsgGrowWithdrawal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGrowWithdrawal>, I>>(base?: I): MsgGrowWithdrawal {
    return MsgGrowWithdrawal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrowWithdrawal>, I>>(object: I): MsgGrowWithdrawal {
    const message = createBaseMsgGrowWithdrawal();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    return message;
  },
};

function createBaseMsgGrowWithdrawalResponse(): MsgGrowWithdrawalResponse {
  return { creator: "", amountIn: "", amountOut: "" };
}

export const MsgGrowWithdrawalResponse = {
  encode(message: MsgGrowWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrowWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrowWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGrowWithdrawalResponse {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgGrowWithdrawalResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGrowWithdrawalResponse>, I>>(base?: I): MsgGrowWithdrawalResponse {
    return MsgGrowWithdrawalResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrowWithdrawalResponse>, I>>(object: I): MsgGrowWithdrawalResponse {
    const message = createBaseMsgGrowWithdrawalResponse();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseMsgCreateBorrow(): MsgCreateBorrow {
  return { borrower: "", denomIn: "", desiredAmount: "" };
}

export const MsgCreateBorrow = {
  encode(message: MsgCreateBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    if (message.desiredAmount !== "") {
      writer.uint32(26).string(message.desiredAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBorrow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrower = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denomIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.desiredAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBorrow {
    return {
      borrower: isSet(object.borrower) ? globalThis.String(object.borrower) : "",
      denomIn: isSet(object.denomIn) ? globalThis.String(object.denomIn) : "",
      desiredAmount: isSet(object.desiredAmount) ? globalThis.String(object.desiredAmount) : "",
    };
  },

  toJSON(message: MsgCreateBorrow): unknown {
    const obj: any = {};
    if (message.borrower !== "") {
      obj.borrower = message.borrower;
    }
    if (message.denomIn !== "") {
      obj.denomIn = message.denomIn;
    }
    if (message.desiredAmount !== "") {
      obj.desiredAmount = message.desiredAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateBorrow>, I>>(base?: I): MsgCreateBorrow {
    return MsgCreateBorrow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBorrow>, I>>(object: I): MsgCreateBorrow {
    const message = createBaseMsgCreateBorrow();
    message.borrower = object.borrower ?? "";
    message.denomIn = object.denomIn ?? "";
    message.desiredAmount = object.desiredAmount ?? "";
    return message;
  },
};

function createBaseMsgCreateBorrowResponse(): MsgCreateBorrowResponse {
  return { borrower: "", denomIn: "", amountOut: "", loanId: "" };
}

export const MsgCreateBorrowResponse = {
  encode(message: MsgCreateBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    if (message.loanId !== "") {
      writer.uint32(34).string(message.loanId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBorrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrower = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denomIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountOut = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loanId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBorrowResponse {
    return {
      borrower: isSet(object.borrower) ? globalThis.String(object.borrower) : "",
      denomIn: isSet(object.denomIn) ? globalThis.String(object.denomIn) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
      loanId: isSet(object.loanId) ? globalThis.String(object.loanId) : "",
    };
  },

  toJSON(message: MsgCreateBorrowResponse): unknown {
    const obj: any = {};
    if (message.borrower !== "") {
      obj.borrower = message.borrower;
    }
    if (message.denomIn !== "") {
      obj.denomIn = message.denomIn;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    if (message.loanId !== "") {
      obj.loanId = message.loanId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateBorrowResponse>, I>>(base?: I): MsgCreateBorrowResponse {
    return MsgCreateBorrowResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBorrowResponse>, I>>(object: I): MsgCreateBorrowResponse {
    const message = createBaseMsgCreateBorrowResponse();
    message.borrower = object.borrower ?? "";
    message.denomIn = object.denomIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.loanId = object.loanId ?? "";
    return message;
  },
};

function createBaseMsgDeleteBorrow(): MsgDeleteBorrow {
  return { borrower: "", amountIn: "", denomOut: "" };
}

export const MsgDeleteBorrow = {
  encode(message: MsgDeleteBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBorrow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrower = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denomOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBorrow {
    return {
      borrower: isSet(object.borrower) ? globalThis.String(object.borrower) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      denomOut: isSet(object.denomOut) ? globalThis.String(object.denomOut) : "",
    };
  },

  toJSON(message: MsgDeleteBorrow): unknown {
    const obj: any = {};
    if (message.borrower !== "") {
      obj.borrower = message.borrower;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteBorrow>, I>>(base?: I): MsgDeleteBorrow {
    return MsgDeleteBorrow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteBorrow>, I>>(object: I): MsgDeleteBorrow {
    const message = createBaseMsgDeleteBorrow();
    message.borrower = object.borrower ?? "";
    message.amountIn = object.amountIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseMsgDeleteBorrowResponse(): MsgDeleteBorrowResponse {
  return { borrower: "", amountOut: "", LoanId: "" };
}

export const MsgDeleteBorrowResponse = {
  encode(message: MsgDeleteBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.amountOut !== "") {
      writer.uint32(18).string(message.amountOut);
    }
    if (message.LoanId !== "") {
      writer.uint32(26).string(message.LoanId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBorrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrower = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountOut = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.LoanId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBorrowResponse {
    return {
      borrower: isSet(object.borrower) ? globalThis.String(object.borrower) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
      LoanId: isSet(object.LoanId) ? globalThis.String(object.LoanId) : "",
    };
  },

  toJSON(message: MsgDeleteBorrowResponse): unknown {
    const obj: any = {};
    if (message.borrower !== "") {
      obj.borrower = message.borrower;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    if (message.LoanId !== "") {
      obj.LoanId = message.LoanId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteBorrowResponse>, I>>(base?: I): MsgDeleteBorrowResponse {
    return MsgDeleteBorrowResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteBorrowResponse>, I>>(object: I): MsgDeleteBorrowResponse {
    const message = createBaseMsgDeleteBorrowResponse();
    message.borrower = object.borrower ?? "";
    message.amountOut = object.amountOut ?? "";
    message.LoanId = object.LoanId ?? "";
    return message;
  },
};

function createBaseMsgCreateLend(): MsgCreateLend {
  return { depositor: "", amountIn: "" };
}

export const MsgCreateLend = {
  encode(message: MsgCreateLend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLend {
    return {
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
    };
  },

  toJSON(message: MsgCreateLend): unknown {
    const obj: any = {};
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateLend>, I>>(base?: I): MsgCreateLend {
    return MsgCreateLend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateLend>, I>>(object: I): MsgCreateLend {
    const message = createBaseMsgCreateLend();
    message.depositor = object.depositor ?? "";
    message.amountIn = object.amountIn ?? "";
    return message;
  },
};

function createBaseMsgCreateLendResponse(): MsgCreateLendResponse {
  return { depositor: "", positionId: "" };
}

export const MsgCreateLendResponse = {
  encode(message: MsgCreateLendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.positionId !== "") {
      writer.uint32(18).string(message.positionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.positionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLendResponse {
    return {
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      positionId: isSet(object.positionId) ? globalThis.String(object.positionId) : "",
    };
  },

  toJSON(message: MsgCreateLendResponse): unknown {
    const obj: any = {};
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.positionId !== "") {
      obj.positionId = message.positionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateLendResponse>, I>>(base?: I): MsgCreateLendResponse {
    return MsgCreateLendResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateLendResponse>, I>>(object: I): MsgCreateLendResponse {
    const message = createBaseMsgCreateLendResponse();
    message.depositor = object.depositor ?? "";
    message.positionId = object.positionId ?? "";
    return message;
  },
};

function createBaseMsgWithdrawalLend(): MsgWithdrawalLend {
  return { depositor: "", amountIn: "", denomOut: "" };
}

export const MsgWithdrawalLend = {
  encode(message: MsgWithdrawalLend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawalLend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawalLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denomOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawalLend {
    return {
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      denomOut: isSet(object.denomOut) ? globalThis.String(object.denomOut) : "",
    };
  },

  toJSON(message: MsgWithdrawalLend): unknown {
    const obj: any = {};
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawalLend>, I>>(base?: I): MsgWithdrawalLend {
    return MsgWithdrawalLend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawalLend>, I>>(object: I): MsgWithdrawalLend {
    const message = createBaseMsgWithdrawalLend();
    message.depositor = object.depositor ?? "";
    message.amountIn = object.amountIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseMsgWithdrawalLendResponse(): MsgWithdrawalLendResponse {
  return { depositor: "", amountOut: "" };
}

export const MsgWithdrawalLendResponse = {
  encode(message: MsgWithdrawalLendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amountOut !== "") {
      writer.uint32(18).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawalLendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawalLendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawalLendResponse {
    return {
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgWithdrawalLendResponse): unknown {
    const obj: any = {};
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawalLendResponse>, I>>(base?: I): MsgWithdrawalLendResponse {
    return MsgWithdrawalLendResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawalLendResponse>, I>>(object: I): MsgWithdrawalLendResponse {
    const message = createBaseMsgWithdrawalLendResponse();
    message.depositor = object.depositor ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseMsgOpenLiquidationPosition(): MsgOpenLiquidationPosition {
  return { creator: "", amountIn: "", asset: "", premium: "" };
}

export const MsgOpenLiquidationPosition = {
  encode(message: MsgOpenLiquidationPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.premium !== "") {
      writer.uint32(34).string(message.premium);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenLiquidationPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenLiquidationPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.asset = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.premium = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgOpenLiquidationPosition {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      premium: isSet(object.premium) ? globalThis.String(object.premium) : "",
    };
  },

  toJSON(message: MsgOpenLiquidationPosition): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.premium !== "") {
      obj.premium = message.premium;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOpenLiquidationPosition>, I>>(base?: I): MsgOpenLiquidationPosition {
    return MsgOpenLiquidationPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgOpenLiquidationPosition>, I>>(object: I): MsgOpenLiquidationPosition {
    const message = createBaseMsgOpenLiquidationPosition();
    message.creator = object.creator ?? "";
    message.amountIn = object.amountIn ?? "";
    message.asset = object.asset ?? "";
    message.premium = object.premium ?? "";
    return message;
  },
};

function createBaseMsgOpenLiquidationPositionResponse(): MsgOpenLiquidationPositionResponse {
  return { creator: "", liquidatorPositionId: "" };
}

export const MsgOpenLiquidationPositionResponse = {
  encode(message: MsgOpenLiquidationPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.liquidatorPositionId !== "") {
      writer.uint32(18).string(message.liquidatorPositionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenLiquidationPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenLiquidationPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidatorPositionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgOpenLiquidationPositionResponse {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      liquidatorPositionId: isSet(object.liquidatorPositionId) ? globalThis.String(object.liquidatorPositionId) : "",
    };
  },

  toJSON(message: MsgOpenLiquidationPositionResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.liquidatorPositionId !== "") {
      obj.liquidatorPositionId = message.liquidatorPositionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOpenLiquidationPositionResponse>, I>>(
    base?: I,
  ): MsgOpenLiquidationPositionResponse {
    return MsgOpenLiquidationPositionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgOpenLiquidationPositionResponse>, I>>(
    object: I,
  ): MsgOpenLiquidationPositionResponse {
    const message = createBaseMsgOpenLiquidationPositionResponse();
    message.creator = object.creator ?? "";
    message.liquidatorPositionId = object.liquidatorPositionId ?? "";
    return message;
  },
};

function createBaseMsgCloseLiquidationPosition(): MsgCloseLiquidationPosition {
  return { creator: "", liquidatorPositionId: "" };
}

export const MsgCloseLiquidationPosition = {
  encode(message: MsgCloseLiquidationPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.liquidatorPositionId !== "") {
      writer.uint32(18).string(message.liquidatorPositionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLiquidationPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLiquidationPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidatorPositionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLiquidationPosition {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      liquidatorPositionId: isSet(object.liquidatorPositionId) ? globalThis.String(object.liquidatorPositionId) : "",
    };
  },

  toJSON(message: MsgCloseLiquidationPosition): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.liquidatorPositionId !== "") {
      obj.liquidatorPositionId = message.liquidatorPositionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseLiquidationPosition>, I>>(base?: I): MsgCloseLiquidationPosition {
    return MsgCloseLiquidationPosition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseLiquidationPosition>, I>>(object: I): MsgCloseLiquidationPosition {
    const message = createBaseMsgCloseLiquidationPosition();
    message.creator = object.creator ?? "";
    message.liquidatorPositionId = object.liquidatorPositionId ?? "";
    return message;
  },
};

function createBaseMsgCloseLiquidationPositionResponse(): MsgCloseLiquidationPositionResponse {
  return { creator: "", amountOut: "" };
}

export const MsgCloseLiquidationPositionResponse = {
  encode(message: MsgCloseLiquidationPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amountOut !== "") {
      writer.uint32(18).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLiquidationPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLiquidationPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountOut = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLiquidationPositionResponse {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amountOut: isSet(object.amountOut) ? globalThis.String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgCloseLiquidationPositionResponse): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amountOut !== "") {
      obj.amountOut = message.amountOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseLiquidationPositionResponse>, I>>(
    base?: I,
  ): MsgCloseLiquidationPositionResponse {
    return MsgCloseLiquidationPositionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseLiquidationPositionResponse>, I>>(
    object: I,
  ): MsgCloseLiquidationPositionResponse {
    const message = createBaseMsgCloseLiquidationPositionResponse();
    message.creator = object.creator ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  GrowDeposit(request: MsgGrowDeposit): Promise<MsgGrowDepositResponse>;
  GrowWithdrawal(request: MsgGrowWithdrawal): Promise<MsgGrowWithdrawalResponse>;
  CreateLend(request: MsgCreateLend): Promise<MsgCreateLendResponse>;
  WithdrawalLend(request: MsgWithdrawalLend): Promise<MsgWithdrawalLendResponse>;
  CreateBorrow(request: MsgCreateBorrow): Promise<MsgCreateBorrowResponse>;
  DeleteBorrow(request: MsgDeleteBorrow): Promise<MsgDeleteBorrowResponse>;
  OpenLiquidationPosition(request: MsgOpenLiquidationPosition): Promise<MsgOpenLiquidationPositionResponse>;
  CloseLiquidationPosition(request: MsgCloseLiquidationPosition): Promise<MsgCloseLiquidationPositionResponse>;
}

export const MsgServiceName = "core.grow.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.GrowDeposit = this.GrowDeposit.bind(this);
    this.GrowWithdrawal = this.GrowWithdrawal.bind(this);
    this.CreateLend = this.CreateLend.bind(this);
    this.WithdrawalLend = this.WithdrawalLend.bind(this);
    this.CreateBorrow = this.CreateBorrow.bind(this);
    this.DeleteBorrow = this.DeleteBorrow.bind(this);
    this.OpenLiquidationPosition = this.OpenLiquidationPosition.bind(this);
    this.CloseLiquidationPosition = this.CloseLiquidationPosition.bind(this);
  }
  GrowDeposit(request: MsgGrowDeposit): Promise<MsgGrowDepositResponse> {
    const data = MsgGrowDeposit.encode(request).finish();
    const promise = this.rpc.request(this.service, "GrowDeposit", data);
    return promise.then((data) => MsgGrowDepositResponse.decode(_m0.Reader.create(data)));
  }

  GrowWithdrawal(request: MsgGrowWithdrawal): Promise<MsgGrowWithdrawalResponse> {
    const data = MsgGrowWithdrawal.encode(request).finish();
    const promise = this.rpc.request(this.service, "GrowWithdrawal", data);
    return promise.then((data) => MsgGrowWithdrawalResponse.decode(_m0.Reader.create(data)));
  }

  CreateLend(request: MsgCreateLend): Promise<MsgCreateLendResponse> {
    const data = MsgCreateLend.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateLend", data);
    return promise.then((data) => MsgCreateLendResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawalLend(request: MsgWithdrawalLend): Promise<MsgWithdrawalLendResponse> {
    const data = MsgWithdrawalLend.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawalLend", data);
    return promise.then((data) => MsgWithdrawalLendResponse.decode(_m0.Reader.create(data)));
  }

  CreateBorrow(request: MsgCreateBorrow): Promise<MsgCreateBorrowResponse> {
    const data = MsgCreateBorrow.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBorrow", data);
    return promise.then((data) => MsgCreateBorrowResponse.decode(_m0.Reader.create(data)));
  }

  DeleteBorrow(request: MsgDeleteBorrow): Promise<MsgDeleteBorrowResponse> {
    const data = MsgDeleteBorrow.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteBorrow", data);
    return promise.then((data) => MsgDeleteBorrowResponse.decode(_m0.Reader.create(data)));
  }

  OpenLiquidationPosition(request: MsgOpenLiquidationPosition): Promise<MsgOpenLiquidationPositionResponse> {
    const data = MsgOpenLiquidationPosition.encode(request).finish();
    const promise = this.rpc.request(this.service, "OpenLiquidationPosition", data);
    return promise.then((data) => MsgOpenLiquidationPositionResponse.decode(_m0.Reader.create(data)));
  }

  CloseLiquidationPosition(request: MsgCloseLiquidationPosition): Promise<MsgCloseLiquidationPositionResponse> {
    const data = MsgCloseLiquidationPosition.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseLiquidationPosition", data);
    return promise.then((data) => MsgCloseLiquidationPositionResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

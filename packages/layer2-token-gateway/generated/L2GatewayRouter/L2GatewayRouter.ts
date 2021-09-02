// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DefaultGatewayUpdated extends ethereum.Event {
  get params(): DefaultGatewayUpdated__Params {
    return new DefaultGatewayUpdated__Params(this);
  }
}

export class DefaultGatewayUpdated__Params {
  _event: DefaultGatewayUpdated;

  constructor(event: DefaultGatewayUpdated) {
    this._event = event;
  }

  get newDefaultGateway(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GatewaySet extends ethereum.Event {
  get params(): GatewaySet__Params {
    return new GatewaySet__Params(this);
  }
}

export class GatewaySet__Params {
  _event: GatewaySet;

  constructor(event: GatewaySet) {
    this._event = event;
  }

  get l1Token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gateway(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferRouted extends ethereum.Event {
  get params(): TransferRouted__Params {
    return new TransferRouted__Params(this);
  }
}

export class TransferRouted__Params {
  _event: TransferRouted;

  constructor(event: TransferRouted) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _userFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _userTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get gateway(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TxToL1 extends ethereum.Event {
  get params(): TxToL1__Params {
    return new TxToL1__Params(this);
  }
}

export class TxToL1__Params {
  _event: TxToL1;

  constructor(event: TxToL1) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class L2GatewayRouter extends ethereum.SmartContract {
  static bind(address: Address): L2GatewayRouter {
    return new L2GatewayRouter("L2GatewayRouter", address);
  }

  calculateL2TokenAddress(l1ERC20: Address): Address {
    let result = super.call(
      "calculateL2TokenAddress",
      "calculateL2TokenAddress(address):(address)",
      [ethereum.Value.fromAddress(l1ERC20)]
    );

    return result[0].toAddress();
  }

  try_calculateL2TokenAddress(l1ERC20: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "calculateL2TokenAddress",
      "calculateL2TokenAddress(address):(address)",
      [ethereum.Value.fromAddress(l1ERC20)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  counterpartGateway(): Address {
    let result = super.call(
      "counterpartGateway",
      "counterpartGateway():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_counterpartGateway(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "counterpartGateway",
      "counterpartGateway():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultGateway(): Address {
    let result = super.call("defaultGateway", "defaultGateway():(address)", []);

    return result[0].toAddress();
  }

  try_defaultGateway(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "defaultGateway",
      "defaultGateway():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getGateway(_token: Address): Address {
    let result = super.call("getGateway", "getGateway(address):(address)", [
      ethereum.Value.fromAddress(_token)
    ]);

    return result[0].toAddress();
  }

  try_getGateway(_token: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getGateway", "getGateway(address):(address)", [
      ethereum.Value.fromAddress(_token)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOutboundCalldata(
    _token: Address,
    _from: Address,
    _to: Address,
    _amount: BigInt,
    _data: Bytes
  ): Bytes {
    let result = super.call(
      "getOutboundCalldata",
      "getOutboundCalldata(address,address,address,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBytes();
  }

  try_getOutboundCalldata(
    _token: Address,
    _from: Address,
    _to: Address,
    _amount: BigInt,
    _data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getOutboundCalldata",
      "getOutboundCalldata(address,address,address,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  l1TokenToGateway(param0: Address): Address {
    let result = super.call(
      "l1TokenToGateway",
      "l1TokenToGateway(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_l1TokenToGateway(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "l1TokenToGateway",
      "l1TokenToGateway(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  router(): Address {
    let result = super.call("router", "router():(address)", []);

    return result[0].toAddress();
  }

  try_router(): ethereum.CallResult<Address> {
    let result = super.tryCall("router", "router():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class FinalizeInboundTransferCall extends ethereum.Call {
  get inputs(): FinalizeInboundTransferCall__Inputs {
    return new FinalizeInboundTransferCall__Inputs(this);
  }

  get outputs(): FinalizeInboundTransferCall__Outputs {
    return new FinalizeInboundTransferCall__Outputs(this);
  }
}

export class FinalizeInboundTransferCall__Inputs {
  _call: FinalizeInboundTransferCall;

  constructor(call: FinalizeInboundTransferCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class FinalizeInboundTransferCall__Outputs {
  _call: FinalizeInboundTransferCall;

  constructor(call: FinalizeInboundTransferCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _counterpartGateway(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _defaultGateway(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OutboundTransferCall extends ethereum.Call {
  get inputs(): OutboundTransferCall__Inputs {
    return new OutboundTransferCall__Inputs(this);
  }

  get outputs(): OutboundTransferCall__Outputs {
    return new OutboundTransferCall__Outputs(this);
  }
}

export class OutboundTransferCall__Inputs {
  _call: OutboundTransferCall;

  constructor(call: OutboundTransferCall) {
    this._call = call;
  }

  get _l1Token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OutboundTransferCall__Outputs {
  _call: OutboundTransferCall;

  constructor(call: OutboundTransferCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OutboundTransfer1Call extends ethereum.Call {
  get inputs(): OutboundTransfer1Call__Inputs {
    return new OutboundTransfer1Call__Inputs(this);
  }

  get outputs(): OutboundTransfer1Call__Outputs {
    return new OutboundTransfer1Call__Outputs(this);
  }
}

export class OutboundTransfer1Call__Inputs {
  _call: OutboundTransfer1Call;

  constructor(call: OutboundTransfer1Call) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _maxGas(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _gasPriceBid(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class OutboundTransfer1Call__Outputs {
  _call: OutboundTransfer1Call;

  constructor(call: OutboundTransfer1Call) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PostUpgradeInitCall extends ethereum.Call {
  get inputs(): PostUpgradeInitCall__Inputs {
    return new PostUpgradeInitCall__Inputs(this);
  }

  get outputs(): PostUpgradeInitCall__Outputs {
    return new PostUpgradeInitCall__Outputs(this);
  }
}

export class PostUpgradeInitCall__Inputs {
  _call: PostUpgradeInitCall;

  constructor(call: PostUpgradeInitCall) {
    this._call = call;
  }
}

export class PostUpgradeInitCall__Outputs {
  _call: PostUpgradeInitCall;

  constructor(call: PostUpgradeInitCall) {
    this._call = call;
  }
}

export class SetDefaultGatewayCall extends ethereum.Call {
  get inputs(): SetDefaultGatewayCall__Inputs {
    return new SetDefaultGatewayCall__Inputs(this);
  }

  get outputs(): SetDefaultGatewayCall__Outputs {
    return new SetDefaultGatewayCall__Outputs(this);
  }
}

export class SetDefaultGatewayCall__Inputs {
  _call: SetDefaultGatewayCall;

  constructor(call: SetDefaultGatewayCall) {
    this._call = call;
  }

  get newL2DefaultGateway(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultGatewayCall__Outputs {
  _call: SetDefaultGatewayCall;

  constructor(call: SetDefaultGatewayCall) {
    this._call = call;
  }
}

export class SetGatewayCall extends ethereum.Call {
  get inputs(): SetGatewayCall__Inputs {
    return new SetGatewayCall__Inputs(this);
  }

  get outputs(): SetGatewayCall__Outputs {
    return new SetGatewayCall__Outputs(this);
  }
}

export class SetGatewayCall__Inputs {
  _call: SetGatewayCall;

  constructor(call: SetGatewayCall) {
    this._call = call;
  }

  get _l1Token(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _gateway(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class SetGatewayCall__Outputs {
  _call: SetGatewayCall;

  constructor(call: SetGatewayCall) {
    this._call = call;
  }
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DefaultGatewayUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("newDefaultGateway", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DefaultGatewayUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DefaultGatewayUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DefaultGatewayUpdated", id.toString(), this);
    }
  }

  static load(id: string): DefaultGatewayUpdated | null {
    return changetype<DefaultGatewayUpdated | null>(
      store.get("DefaultGatewayUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newDefaultGateway(): Bytes {
    let value = this.get("newDefaultGateway");
    return value!.toBytes();
  }

  set newDefaultGateway(value: Bytes) {
    this.set("newDefaultGateway", Value.fromBytes(value));
  }
}

export class GatewaySet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("l1Token", Value.fromBytes(Bytes.empty()));
    this.set("gateway", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GatewaySet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save GatewaySet entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("GatewaySet", id.toString(), this);
    }
  }

  static load(id: string): GatewaySet | null {
    return changetype<GatewaySet | null>(store.get("GatewaySet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get l1Token(): Bytes {
    let value = this.get("l1Token");
    return value!.toBytes();
  }

  set l1Token(value: Bytes) {
    this.set("l1Token", Value.fromBytes(value));
  }

  get gateway(): Bytes {
    let value = this.get("gateway");
    return value!.toBytes();
  }

  set gateway(value: Bytes) {
    this.set("gateway", Value.fromBytes(value));
  }
}

export class TransferRouted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromBytes(Bytes.empty()));
    this.set("_userFrom", Value.fromBytes(Bytes.empty()));
    this.set("_userTo", Value.fromBytes(Bytes.empty()));
    this.set("gateway", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferRouted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransferRouted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransferRouted", id.toString(), this);
    }
  }

  static load(id: string): TransferRouted | null {
    return changetype<TransferRouted | null>(store.get("TransferRouted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value!.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get _userFrom(): Bytes {
    let value = this.get("_userFrom");
    return value!.toBytes();
  }

  set _userFrom(value: Bytes) {
    this.set("_userFrom", Value.fromBytes(value));
  }

  get _userTo(): Bytes {
    let value = this.get("_userTo");
    return value!.toBytes();
  }

  set _userTo(value: Bytes) {
    this.set("_userTo", Value.fromBytes(value));
  }

  get gateway(): Bytes {
    let value = this.get("gateway");
    return value!.toBytes();
  }

  set gateway(value: Bytes) {
    this.set("gateway", Value.fromBytes(value));
  }
}

export class TxToL2 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("_from", Value.fromBytes(Bytes.empty()));
    this.set("_to", Value.fromBytes(Bytes.empty()));
    this.set("_seqNum", Value.fromBigInt(BigInt.zero()));
    this.set("_data", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TxToL2 entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TxToL2 entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TxToL2", id.toString(), this);
    }
  }

  static load(id: string): TxToL2 | null {
    return changetype<TxToL2 | null>(store.get("TxToL2", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _from(): Bytes {
    let value = this.get("_from");
    return value!.toBytes();
  }

  set _from(value: Bytes) {
    this.set("_from", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _seqNum(): BigInt {
    let value = this.get("_seqNum");
    return value!.toBigInt();
  }

  set _seqNum(value: BigInt) {
    this.set("_seqNum", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }
}

export class WhitelistSourceUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("newSource", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save WhitelistSourceUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WhitelistSourceUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WhitelistSourceUpdated", id.toString(), this);
    }
  }

  static load(id: string): WhitelistSourceUpdated | null {
    return changetype<WhitelistSourceUpdated | null>(
      store.get("WhitelistSourceUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newSource(): Bytes {
    let value = this.get("newSource");
    return value!.toBytes();
  }

  set newSource(value: Bytes) {
    this.set("newSource", Value.fromBytes(value));
  }
}

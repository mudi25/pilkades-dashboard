import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Perhitungan extends jspb.Message {
  getPemilihlaki(): number;
  setPemilihlaki(value: number): Perhitungan;

  getPemilihperempuan(): number;
  setPemilihperempuan(value: number): Perhitungan;

  getPemilihtotal(): number;
  setPemilihtotal(value: number): Perhitungan;

  getPenggunahakpilihlaki(): number;
  setPenggunahakpilihlaki(value: number): Perhitungan;

  getPenggunahakpilihperempuan(): number;
  setPenggunahakpilihperempuan(value: number): Perhitungan;

  getPenggunahakpilihtotal(): number;
  setPenggunahakpilihtotal(value: number): Perhitungan;

  getNomorurut1(): number;
  setNomorurut1(value: number): Perhitungan;

  getNomorurut2(): number;
  setNomorurut2(value: number): Perhitungan;

  getNomorurut3(): number;
  setNomorurut3(value: number): Perhitungan;

  getNomorurut4(): number;
  setNomorurut4(value: number): Perhitungan;

  getSuarasah(): number;
  setSuarasah(value: number): Perhitungan;

  getSuaratidaksah(): number;
  setSuaratidaksah(value: number): Perhitungan;

  getTpsmasuk(): number;
  setTpsmasuk(value: number): Perhitungan;

  getTotaltps(): number;
  setTotaltps(value: number): Perhitungan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Perhitungan.AsObject;
  static toObject(includeInstance: boolean, msg: Perhitungan): Perhitungan.AsObject;
  static serializeBinaryToWriter(message: Perhitungan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Perhitungan;
  static deserializeBinaryFromReader(message: Perhitungan, reader: jspb.BinaryReader): Perhitungan;
}

export namespace Perhitungan {
  export type AsObject = {
    pemilihlaki: number,
    pemilihperempuan: number,
    pemilihtotal: number,
    penggunahakpilihlaki: number,
    penggunahakpilihperempuan: number,
    penggunahakpilihtotal: number,
    nomorurut1: number,
    nomorurut2: number,
    nomorurut3: number,
    nomorurut4: number,
    suarasah: number,
    suaratidaksah: number,
    tpsmasuk: number,
    totaltps: number,
  }
}

export class Lokasi extends jspb.Message {
  getId(): string;
  setId(value: string): Lokasi;

  getIdparent(): string;
  setIdparent(value: string): Lokasi;

  getNama(): string;
  setNama(value: string): Lokasi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lokasi.AsObject;
  static toObject(includeInstance: boolean, msg: Lokasi): Lokasi.AsObject;
  static serializeBinaryToWriter(message: Lokasi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lokasi;
  static deserializeBinaryFromReader(message: Lokasi, reader: jspb.BinaryReader): Lokasi;
}

export namespace Lokasi {
  export type AsObject = {
    id: string,
    idparent: string,
    nama: string,
  }
}

export class AddLokasi extends jspb.Message {
  getIdparent(): string;
  setIdparent(value: string): AddLokasi;

  getNama(): string;
  setNama(value: string): AddLokasi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLokasi.AsObject;
  static toObject(includeInstance: boolean, msg: AddLokasi): AddLokasi.AsObject;
  static serializeBinaryToWriter(message: AddLokasi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLokasi;
  static deserializeBinaryFromReader(message: AddLokasi, reader: jspb.BinaryReader): AddLokasi;
}

export namespace AddLokasi {
  export type AsObject = {
    idparent: string,
    nama: string,
  }
}

export class UpdateLokasi extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateLokasi;

  getNama(): string;
  setNama(value: string): UpdateLokasi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLokasi.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLokasi): UpdateLokasi.AsObject;
  static serializeBinaryToWriter(message: UpdateLokasi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLokasi;
  static deserializeBinaryFromReader(message: UpdateLokasi, reader: jspb.BinaryReader): UpdateLokasi;
}

export namespace UpdateLokasi {
  export type AsObject = {
    id: string,
    nama: string,
  }
}

export class ListLokasi extends jspb.Message {
  getItemsList(): Array<Lokasi>;
  setItemsList(value: Array<Lokasi>): ListLokasi;
  clearItemsList(): ListLokasi;
  addItems(value?: Lokasi, index?: number): Lokasi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLokasi.AsObject;
  static toObject(includeInstance: boolean, msg: ListLokasi): ListLokasi.AsObject;
  static serializeBinaryToWriter(message: ListLokasi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLokasi;
  static deserializeBinaryFromReader(message: ListLokasi, reader: jspb.BinaryReader): ListLokasi;
}

export namespace ListLokasi {
  export type AsObject = {
    itemsList: Array<Lokasi.AsObject>,
  }
}

export class Query extends jspb.Message {
  getValue(): string;
  setValue(value: string): Query;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    value: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getIdscope(): string;
  setIdscope(value: string): User;

  getDispalyname(): string;
  setDispalyname(value: string): User;

  getPhonenumber(): string;
  setPhonenumber(value: string): User;

  getRoles(): UserRoles;
  setRoles(value: UserRoles): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    idscope: string,
    dispalyname: string,
    phonenumber: string,
    roles: UserRoles,
  }
}

export class AddUser extends jspb.Message {
  getIdscope(): string;
  setIdscope(value: string): AddUser;

  getDispalyname(): string;
  setDispalyname(value: string): AddUser;

  getPhonenumber(): string;
  setPhonenumber(value: string): AddUser;

  getRoles(): UserRoles;
  setRoles(value: UserRoles): AddUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUser.AsObject;
  static toObject(includeInstance: boolean, msg: AddUser): AddUser.AsObject;
  static serializeBinaryToWriter(message: AddUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUser;
  static deserializeBinaryFromReader(message: AddUser, reader: jspb.BinaryReader): AddUser;
}

export namespace AddUser {
  export type AsObject = {
    idscope: string,
    dispalyname: string,
    phonenumber: string,
    roles: UserRoles,
  }
}

export class ListUser extends jspb.Message {
  getItemsList(): Array<User>;
  setItemsList(value: Array<User>): ListUser;
  clearItemsList(): ListUser;
  addItems(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUser.AsObject;
  static toObject(includeInstance: boolean, msg: ListUser): ListUser.AsObject;
  static serializeBinaryToWriter(message: ListUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUser;
  static deserializeBinaryFromReader(message: ListUser, reader: jspb.BinaryReader): ListUser;
}

export namespace ListUser {
  export type AsObject = {
    itemsList: Array<User.AsObject>,
  }
}

export class Tps extends jspb.Message {
  getId(): string;
  setId(value: string): Tps;

  getIdkota(): string;
  setIdkota(value: string): Tps;

  getIdkecamatan(): string;
  setIdkecamatan(value: string): Tps;

  getIdkelurahan(): string;
  setIdkelurahan(value: string): Tps;

  getNama(): string;
  setNama(value: string): Tps;

  getPemilihlaki(): number;
  setPemilihlaki(value: number): Tps;

  getPemilihperempuan(): number;
  setPemilihperempuan(value: number): Tps;

  getPemilihtotal(): number;
  setPemilihtotal(value: number): Tps;

  getPenggunahakpilihlaki(): number;
  setPenggunahakpilihlaki(value: number): Tps;

  getPenggunahakpilihperempuan(): number;
  setPenggunahakpilihperempuan(value: number): Tps;

  getPenggunahakpilihtotal(): number;
  setPenggunahakpilihtotal(value: number): Tps;

  getNomorurut1(): number;
  setNomorurut1(value: number): Tps;

  getNomorurut2(): number;
  setNomorurut2(value: number): Tps;

  getNomorurut3(): number;
  setNomorurut3(value: number): Tps;

  getNomorurut4(): number;
  setNomorurut4(value: number): Tps;

  getSuarasah(): number;
  setSuarasah(value: number): Tps;

  getSuaratidaksah(): number;
  setSuaratidaksah(value: number): Tps;

  getCatatan(): string;
  setCatatan(value: string): Tps;

  getIsinput(): boolean;
  setIsinput(value: boolean): Tps;

  getImageurlplano(): string;
  setImageurlplano(value: string): Tps;

  getImageurlc1kwk(): string;
  setImageurlc1kwk(value: string): Tps;

  getImageurlhasil(): string;
  setImageurlhasil(value: string): Tps;

  getImageurlnotakeberatan(): string;
  setImageurlnotakeberatan(value: string): Tps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tps.AsObject;
  static toObject(includeInstance: boolean, msg: Tps): Tps.AsObject;
  static serializeBinaryToWriter(message: Tps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tps;
  static deserializeBinaryFromReader(message: Tps, reader: jspb.BinaryReader): Tps;
}

export namespace Tps {
  export type AsObject = {
    id: string,
    idkota: string,
    idkecamatan: string,
    idkelurahan: string,
    nama: string,
    pemilihlaki: number,
    pemilihperempuan: number,
    pemilihtotal: number,
    penggunahakpilihlaki: number,
    penggunahakpilihperempuan: number,
    penggunahakpilihtotal: number,
    nomorurut1: number,
    nomorurut2: number,
    nomorurut3: number,
    nomorurut4: number,
    suarasah: number,
    suaratidaksah: number,
    catatan: string,
    isinput: boolean,
    imageurlplano: string,
    imageurlc1kwk: string,
    imageurlhasil: string,
    imageurlnotakeberatan: string,
  }
}

export class UpdateTps extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateTps;

  getNama(): string;
  setNama(value: string): UpdateTps;

  getPemilihlaki(): number;
  setPemilihlaki(value: number): UpdateTps;

  getPemilihperempuan(): number;
  setPemilihperempuan(value: number): UpdateTps;

  getPenggunahakpilihlaki(): number;
  setPenggunahakpilihlaki(value: number): UpdateTps;

  getPenggunahakpilihperempuan(): number;
  setPenggunahakpilihperempuan(value: number): UpdateTps;

  getNomorurut1(): number;
  setNomorurut1(value: number): UpdateTps;

  getNomorurut2(): number;
  setNomorurut2(value: number): UpdateTps;

  getNomorurut3(): number;
  setNomorurut3(value: number): UpdateTps;

  getNomorurut4(): number;
  setNomorurut4(value: number): UpdateTps;

  getCatatan(): string;
  setCatatan(value: string): UpdateTps;

  getIsinput(): boolean;
  setIsinput(value: boolean): UpdateTps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTps.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTps): UpdateTps.AsObject;
  static serializeBinaryToWriter(message: UpdateTps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTps;
  static deserializeBinaryFromReader(message: UpdateTps, reader: jspb.BinaryReader): UpdateTps;
}

export namespace UpdateTps {
  export type AsObject = {
    id: string,
    nama: string,
    pemilihlaki: number,
    pemilihperempuan: number,
    penggunahakpilihlaki: number,
    penggunahakpilihperempuan: number,
    nomorurut1: number,
    nomorurut2: number,
    nomorurut3: number,
    nomorurut4: number,
    catatan: string,
    isinput: boolean,
  }
}

export class UpdateSuaraTps extends jspb.Message {
  getPenggunahakpilihlaki(): number;
  setPenggunahakpilihlaki(value: number): UpdateSuaraTps;

  getPenggunahakpilihperempuan(): number;
  setPenggunahakpilihperempuan(value: number): UpdateSuaraTps;

  getNomorurut1(): number;
  setNomorurut1(value: number): UpdateSuaraTps;

  getNomorurut2(): number;
  setNomorurut2(value: number): UpdateSuaraTps;

  getNomorurut3(): number;
  setNomorurut3(value: number): UpdateSuaraTps;

  getNomorurut4(): number;
  setNomorurut4(value: number): UpdateSuaraTps;

  getCatatan(): string;
  setCatatan(value: string): UpdateSuaraTps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSuaraTps.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSuaraTps): UpdateSuaraTps.AsObject;
  static serializeBinaryToWriter(message: UpdateSuaraTps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSuaraTps;
  static deserializeBinaryFromReader(message: UpdateSuaraTps, reader: jspb.BinaryReader): UpdateSuaraTps;
}

export namespace UpdateSuaraTps {
  export type AsObject = {
    penggunahakpilihlaki: number,
    penggunahakpilihperempuan: number,
    nomorurut1: number,
    nomorurut2: number,
    nomorurut3: number,
    nomorurut4: number,
    catatan: string,
  }
}

export class AddTps extends jspb.Message {
  getIdkota(): string;
  setIdkota(value: string): AddTps;

  getIdkecamatan(): string;
  setIdkecamatan(value: string): AddTps;

  getIdkelurahan(): string;
  setIdkelurahan(value: string): AddTps;

  getNama(): string;
  setNama(value: string): AddTps;

  getPemilihlaki(): number;
  setPemilihlaki(value: number): AddTps;

  getPemilihperempuan(): number;
  setPemilihperempuan(value: number): AddTps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTps.AsObject;
  static toObject(includeInstance: boolean, msg: AddTps): AddTps.AsObject;
  static serializeBinaryToWriter(message: AddTps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTps;
  static deserializeBinaryFromReader(message: AddTps, reader: jspb.BinaryReader): AddTps;
}

export namespace AddTps {
  export type AsObject = {
    idkota: string,
    idkecamatan: string,
    idkelurahan: string,
    nama: string,
    pemilihlaki: number,
    pemilihperempuan: number,
  }
}

export class UpdateImageUrl extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateImageUrl;

  getDestination(): string;
  setDestination(value: string): UpdateImageUrl;

  getOldurl(): string;
  setOldurl(value: string): UpdateImageUrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageUrl.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageUrl): UpdateImageUrl.AsObject;
  static serializeBinaryToWriter(message: UpdateImageUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageUrl;
  static deserializeBinaryFromReader(message: UpdateImageUrl, reader: jspb.BinaryReader): UpdateImageUrl;
}

export namespace UpdateImageUrl {
  export type AsObject = {
    id: string,
    destination: string,
    oldurl: string,
  }
}

export class ListTps extends jspb.Message {
  getItemsList(): Array<Tps>;
  setItemsList(value: Array<Tps>): ListTps;
  clearItemsList(): ListTps;
  addItems(value?: Tps, index?: number): Tps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTps.AsObject;
  static toObject(includeInstance: boolean, msg: ListTps): ListTps.AsObject;
  static serializeBinaryToWriter(message: ListTps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTps;
  static deserializeBinaryFromReader(message: ListTps, reader: jspb.BinaryReader): ListTps;
}

export namespace ListTps {
  export type AsObject = {
    itemsList: Array<Tps.AsObject>,
  }
}

export enum UserRoles { 
  SUPER = 0,
  VIEWERS = 1,
  SAKSI = 2,
}

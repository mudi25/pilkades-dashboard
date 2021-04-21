import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_core_pb from '../proto/core_pb';


export class CoreServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isRegister(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Query) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Query>;

  findSuara(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Perhitungan) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Perhitungan>;

  lokasiFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListLokasi) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListLokasi>;

  lokasiFind(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListLokasi) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListLokasi>;

  lokasiAdd(
    request: proto_core_pb.AddLokasi,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Lokasi) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Lokasi>;

  lokasiUpdate(
    request: proto_core_pb.UpdateLokasi,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  lokasiDelete(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  tpsFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListTps) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListTps>;

  tpsFind(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListTps) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListTps>;

  myTps(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Tps) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Tps>;

  tpsAdd(
    request: proto_core_pb.AddTps,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Tps) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Tps>;

  tpsUpdate(
    request: proto_core_pb.UpdateTps,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  tpsUpdateSuara(
    request: proto_core_pb.UpdateSuaraTps,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  tpsUpdateImageUrlPlano(
    request: proto_core_pb.UpdateImageUrl,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Query) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Query>;

  tpsUpdateImageUrlC1Kwk(
    request: proto_core_pb.UpdateImageUrl,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Query) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Query>;

  tpsUpdateImageUrlHasil(
    request: proto_core_pb.UpdateImageUrl,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Query) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Query>;

  tpsUpdateImageUrlNotaKeberantan(
    request: proto_core_pb.UpdateImageUrl,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.Query) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.Query>;

  tpsSaveSuara(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  tpsDelete(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  userFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListUser) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListUser>;

  userFindSaksi(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.ListUser) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.ListUser>;

  userAdd(
    request: proto_core_pb.AddUser,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_core_pb.User) => void
  ): grpcWeb.ClientReadableStream<proto_core_pb.User>;

  userDelete(
    request: proto_core_pb.Query,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class CoreServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isRegister(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Query>;

  findSuara(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Perhitungan>;

  lokasiFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListLokasi>;

  lokasiFind(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListLokasi>;

  lokasiAdd(
    request: proto_core_pb.AddLokasi,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Lokasi>;

  lokasiUpdate(
    request: proto_core_pb.UpdateLokasi,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  lokasiDelete(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  tpsFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListTps>;

  tpsFind(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListTps>;

  myTps(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Tps>;

  tpsAdd(
    request: proto_core_pb.AddTps,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Tps>;

  tpsUpdate(
    request: proto_core_pb.UpdateTps,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  tpsUpdateSuara(
    request: proto_core_pb.UpdateSuaraTps,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  tpsUpdateImageUrlPlano(
    request: proto_core_pb.UpdateImageUrl,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Query>;

  tpsUpdateImageUrlC1Kwk(
    request: proto_core_pb.UpdateImageUrl,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Query>;

  tpsUpdateImageUrlHasil(
    request: proto_core_pb.UpdateImageUrl,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Query>;

  tpsUpdateImageUrlNotaKeberantan(
    request: proto_core_pb.UpdateImageUrl,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.Query>;

  tpsSaveSuara(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  tpsDelete(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  userFindAll(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListUser>;

  userFindSaksi(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.ListUser>;

  userAdd(
    request: proto_core_pb.AddUser,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_core_pb.User>;

  userDelete(
    request: proto_core_pb.Query,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}


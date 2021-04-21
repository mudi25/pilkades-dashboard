/**
 * @fileoverview gRPC-Web generated client stub for core
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.core = require('./core_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.core.CoreServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.core.CoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.Query>}
 */
const methodDescriptor_CoreService_IsRegister = new grpc.web.MethodDescriptor(
  '/core.CoreService/IsRegister',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.Query,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.Query>}
 */
const methodInfo_CoreService_IsRegister = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Query,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Query)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Query>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.isRegister =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/IsRegister',
      request,
      metadata || {},
      methodDescriptor_CoreService_IsRegister,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Query>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.isRegister =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/IsRegister',
      request,
      metadata || {},
      methodDescriptor_CoreService_IsRegister);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.Perhitungan>}
 */
const methodDescriptor_CoreService_FindSuara = new grpc.web.MethodDescriptor(
  '/core.CoreService/FindSuara',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.Perhitungan,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Perhitungan.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.Perhitungan>}
 */
const methodInfo_CoreService_FindSuara = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Perhitungan,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Perhitungan.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Perhitungan)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Perhitungan>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.findSuara =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/FindSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_FindSuara,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Perhitungan>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.findSuara =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/FindSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_FindSuara);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListLokasi>}
 */
const methodDescriptor_CoreService_LokasiFindAll = new grpc.web.MethodDescriptor(
  '/core.CoreService/LokasiFindAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.core.ListLokasi,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListLokasi.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListLokasi>}
 */
const methodInfo_CoreService_LokasiFindAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListLokasi,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListLokasi.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListLokasi)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListLokasi>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.lokasiFindAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/LokasiFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiFindAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListLokasi>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.lokasiFindAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/LokasiFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiFindAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.ListLokasi>}
 */
const methodDescriptor_CoreService_LokasiFind = new grpc.web.MethodDescriptor(
  '/core.CoreService/LokasiFind',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.ListLokasi,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListLokasi.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.ListLokasi>}
 */
const methodInfo_CoreService_LokasiFind = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListLokasi,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListLokasi.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListLokasi)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListLokasi>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.lokasiFind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/LokasiFind',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiFind,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListLokasi>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.lokasiFind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/LokasiFind',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiFind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.AddLokasi,
 *   !proto.core.Lokasi>}
 */
const methodDescriptor_CoreService_LokasiAdd = new grpc.web.MethodDescriptor(
  '/core.CoreService/LokasiAdd',
  grpc.web.MethodType.UNARY,
  proto.core.AddLokasi,
  proto.core.Lokasi,
  /**
   * @param {!proto.core.AddLokasi} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Lokasi.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.AddLokasi,
 *   !proto.core.Lokasi>}
 */
const methodInfo_CoreService_LokasiAdd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Lokasi,
  /**
   * @param {!proto.core.AddLokasi} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Lokasi.deserializeBinary
);


/**
 * @param {!proto.core.AddLokasi} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Lokasi)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Lokasi>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.lokasiAdd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/LokasiAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiAdd,
      callback);
};


/**
 * @param {!proto.core.AddLokasi} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Lokasi>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.lokasiAdd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/LokasiAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiAdd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateLokasi,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_LokasiUpdate = new grpc.web.MethodDescriptor(
  '/core.CoreService/LokasiUpdate',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateLokasi,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateLokasi} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateLokasi,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_LokasiUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateLokasi} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.UpdateLokasi} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.lokasiUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/LokasiUpdate',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiUpdate,
      callback);
};


/**
 * @param {!proto.core.UpdateLokasi} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.lokasiUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/LokasiUpdate',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_LokasiDelete = new grpc.web.MethodDescriptor(
  '/core.CoreService/LokasiDelete',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_LokasiDelete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.lokasiDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/LokasiDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiDelete,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.lokasiDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/LokasiDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_LokasiDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListTps>}
 */
const methodDescriptor_CoreService_TpsFindAll = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsFindAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.core.ListTps,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListTps.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListTps>}
 */
const methodInfo_CoreService_TpsFindAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListTps,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListTps.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListTps)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListTps>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsFindAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsFindAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListTps>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsFindAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsFindAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.ListTps>}
 */
const methodDescriptor_CoreService_TpsFind = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsFind',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.ListTps,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListTps.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.ListTps>}
 */
const methodInfo_CoreService_TpsFind = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListTps,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListTps.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListTps)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListTps>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsFind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsFind',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsFind,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListTps>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsFind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsFind',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsFind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.Tps>}
 */
const methodDescriptor_CoreService_MyTps = new grpc.web.MethodDescriptor(
  '/core.CoreService/MyTps',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.Tps,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Tps.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.Tps>}
 */
const methodInfo_CoreService_MyTps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Tps,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Tps.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Tps)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Tps>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.myTps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/MyTps',
      request,
      metadata || {},
      methodDescriptor_CoreService_MyTps,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Tps>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.myTps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/MyTps',
      request,
      metadata || {},
      methodDescriptor_CoreService_MyTps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.AddTps,
 *   !proto.core.Tps>}
 */
const methodDescriptor_CoreService_TpsAdd = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsAdd',
  grpc.web.MethodType.UNARY,
  proto.core.AddTps,
  proto.core.Tps,
  /**
   * @param {!proto.core.AddTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Tps.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.AddTps,
 *   !proto.core.Tps>}
 */
const methodInfo_CoreService_TpsAdd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Tps,
  /**
   * @param {!proto.core.AddTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Tps.deserializeBinary
);


/**
 * @param {!proto.core.AddTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Tps)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Tps>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsAdd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsAdd,
      callback);
};


/**
 * @param {!proto.core.AddTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Tps>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsAdd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsAdd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateTps,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_TpsUpdate = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdate',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateTps,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateTps,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_TpsUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.UpdateTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdate',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdate,
      callback);
};


/**
 * @param {!proto.core.UpdateTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdate',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateSuaraTps,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_TpsUpdateSuara = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdateSuara',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateSuaraTps,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateSuaraTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateSuaraTps,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_TpsUpdateSuara = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.UpdateSuaraTps} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.UpdateSuaraTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdateSuara =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdateSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateSuara,
      callback);
};


/**
 * @param {!proto.core.UpdateSuaraTps} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdateSuara =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdateSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateSuara);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodDescriptor_CoreService_TpsUpdateImageUrlPlano = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdateImageUrlPlano',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateImageUrl,
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodInfo_CoreService_TpsUpdateImageUrlPlano = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Query)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Query>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdateImageUrlPlano =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlPlano',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlPlano,
      callback);
};


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Query>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdateImageUrlPlano =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlPlano',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlPlano);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodDescriptor_CoreService_TpsUpdateImageUrlC1Kwk = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdateImageUrlC1Kwk',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateImageUrl,
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodInfo_CoreService_TpsUpdateImageUrlC1Kwk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Query)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Query>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdateImageUrlC1Kwk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlC1Kwk',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlC1Kwk,
      callback);
};


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Query>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdateImageUrlC1Kwk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlC1Kwk',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlC1Kwk);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodDescriptor_CoreService_TpsUpdateImageUrlHasil = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdateImageUrlHasil',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateImageUrl,
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodInfo_CoreService_TpsUpdateImageUrlHasil = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Query)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Query>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdateImageUrlHasil =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlHasil',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlHasil,
      callback);
};


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Query>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdateImageUrlHasil =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlHasil',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlHasil);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodDescriptor_CoreService_TpsUpdateImageUrlNotaKeberantan = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsUpdateImageUrlNotaKeberantan',
  grpc.web.MethodType.UNARY,
  proto.core.UpdateImageUrl,
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.UpdateImageUrl,
 *   !proto.core.Query>}
 */
const methodInfo_CoreService_TpsUpdateImageUrlNotaKeberantan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.Query,
  /**
   * @param {!proto.core.UpdateImageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.Query.deserializeBinary
);


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.Query)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.Query>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsUpdateImageUrlNotaKeberantan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlNotaKeberantan',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlNotaKeberantan,
      callback);
};


/**
 * @param {!proto.core.UpdateImageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.Query>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsUpdateImageUrlNotaKeberantan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsUpdateImageUrlNotaKeberantan',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsUpdateImageUrlNotaKeberantan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_TpsSaveSuara = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsSaveSuara',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_TpsSaveSuara = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsSaveSuara =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsSaveSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsSaveSuara,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsSaveSuara =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsSaveSuara',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsSaveSuara);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_TpsDelete = new grpc.web.MethodDescriptor(
  '/core.CoreService/TpsDelete',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_TpsDelete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.tpsDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/TpsDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsDelete,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.tpsDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/TpsDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_TpsDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListUser>}
 */
const methodDescriptor_CoreService_UserFindAll = new grpc.web.MethodDescriptor(
  '/core.CoreService/UserFindAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.core.ListUser,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListUser.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.core.ListUser>}
 */
const methodInfo_CoreService_UserFindAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListUser,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListUser.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListUser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListUser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.userFindAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/UserFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserFindAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListUser>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.userFindAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/UserFindAll',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserFindAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.core.ListUser>}
 */
const methodDescriptor_CoreService_UserFindSaksi = new grpc.web.MethodDescriptor(
  '/core.CoreService/UserFindSaksi',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  proto.core.ListUser,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListUser.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.core.ListUser>}
 */
const methodInfo_CoreService_UserFindSaksi = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.ListUser,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.ListUser.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.ListUser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.ListUser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.userFindSaksi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/UserFindSaksi',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserFindSaksi,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.ListUser>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.userFindSaksi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/UserFindSaksi',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserFindSaksi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.AddUser,
 *   !proto.core.User>}
 */
const methodDescriptor_CoreService_UserAdd = new grpc.web.MethodDescriptor(
  '/core.CoreService/UserAdd',
  grpc.web.MethodType.UNARY,
  proto.core.AddUser,
  proto.core.User,
  /**
   * @param {!proto.core.AddUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.AddUser,
 *   !proto.core.User>}
 */
const methodInfo_CoreService_UserAdd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.core.User,
  /**
   * @param {!proto.core.AddUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.core.User.deserializeBinary
);


/**
 * @param {!proto.core.AddUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.core.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.core.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.userAdd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/UserAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserAdd,
      callback);
};


/**
 * @param {!proto.core.AddUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.core.User>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.userAdd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/UserAdd',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserAdd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CoreService_UserDelete = new grpc.web.MethodDescriptor(
  '/core.CoreService/UserDelete',
  grpc.web.MethodType.UNARY,
  proto.core.Query,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.core.Query,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CoreService_UserDelete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.core.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.core.CoreServiceClient.prototype.userDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/core.CoreService/UserDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserDelete,
      callback);
};


/**
 * @param {!proto.core.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.core.CoreServicePromiseClient.prototype.userDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/core.CoreService/UserDelete',
      request,
      metadata || {},
      methodDescriptor_CoreService_UserDelete);
};


module.exports = proto.core;


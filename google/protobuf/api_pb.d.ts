// package: google.protobuf
// file: google/protobuf/api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";
import * as google_protobuf_type_pb from "google-protobuf/google/protobuf/type_pb";

export class Api extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearMethodsList(): void;
  getMethodsList(): Array<Method>;
  setMethodsList(value: Array<Method>): void;
  addMethods(opt_value?: Method, opt_index?: number): void;

  clearOptionsList(): void;
  getOptionsList(): Array<google_protobuf_type_pb.Option>;
  setOptionsList(value: Array<google_protobuf_type_pb.Option>): void;
  addOptions(opt_value?: google_protobuf_type_pb.Option, opt_index?: number): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext;
  setSourceContext(value: google_protobuf_source_context_pb.SourceContext): void;

  clearMixinsList(): void;
  getMixinsList(): Array<Mixin>;
  setMixinsList(value: Array<Mixin>): void;
  addMixins(opt_value?: Mixin, opt_index?: number): void;

  getSyntax(): google_protobuf_type_pb.Syntax;
  setSyntax(value: google_protobuf_type_pb.Syntax): void;

  static deserializeBinary(bytes: Uint8Array): Api;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Api): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
}

export class Method extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRequestTypeUrl(): string;
  setRequestTypeUrl(value: string): void;

  getRequestStreaming(): boolean;
  setRequestStreaming(value: boolean): void;

  getResponseTypeUrl(): string;
  setResponseTypeUrl(value: string): void;

  getResponseStreaming(): boolean;
  setResponseStreaming(value: boolean): void;

  clearOptionsList(): void;
  getOptionsList(): Array<google_protobuf_type_pb.Option>;
  setOptionsList(value: Array<google_protobuf_type_pb.Option>): void;
  addOptions(opt_value?: google_protobuf_type_pb.Option, opt_index?: number): void;

  getSyntax(): google_protobuf_type_pb.Syntax;
  setSyntax(value: google_protobuf_type_pb.Syntax): void;

  static deserializeBinary(bytes: Uint8Array): Method;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Method): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export class Mixin extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRoot(): string;
  setRoot(value: string): void;

  static deserializeBinary(bytes: Uint8Array): Mixin;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object;
  static toObject(includeInstance: boolean, msg: Mixin): Object;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mixin, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Mixin, reader: jspb.BinaryReader): Mixin;
}


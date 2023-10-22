import React from "react";
import logo from "./logo.svg";

import { useEffect, useState } from "react";
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
  GetObjectCommand,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";

// import { createWriteStream } from "fs";
// import { readFile } from "node:fs/promises";
import fs from "fs/promises";
import { WriteStream, createWriteStream } from "fs";
import { Readable, Writable } from "stream";
import internal from "stream";
// import { Re} from "stream"

import { saveAs } from "file-saver";

import "./App.css";

export const DownloadS3Object = async (client: S3Client, fileName: string) => {
  const s3Object = await client.send(
    new GetObjectCommand({
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Key: fileName,
    })
  );
  console.log(s3Object);
  console.log(fileName);

  //   s3Object.Body.pipe(createWriteStream(fileName));

  //   const s3ObjectStream: ReadableStream = s3Object.Body!.transformToWebStream();
  const s3ObjectByteArray = await s3Object.Body!.transformToByteArray();
  //   const s3ObjectText = s3Object.Body!.transformToString();

  //   const s3stream: internal.Readable = s3Object.Body as internal.Readable;
  const blob = new Blob([s3ObjectByteArray], { type: "octet/stream" });
  saveAs(blob, fileName);

  //   const file: WriteStream = createWriteStream(fileName);

  //   const file2: WritableStream = new WritableStream();
  // file2.

  // s3Object.Body.pipe(createWriteStream(fileName));
  //   s3ObjectStream.pipeTo(file2);
  //   s3stream.pipe(file);

  //   file2.getWriter().write(fileName);
  //   await file2.close();
  //   let file = createWriteStream(("~/Download/" + fileName) as string);

  //   s3ObjectStream.pipe(file);
  // const ws = file.createWriteStream(  'myfolder', 'siberian.png'));

  // rs.pipe(ws);

  //   s3.getObject(params).createReadStream().pipe(file);

  //   await new Promise((resolve, reject) => {
  //     if (s3Object.Body instanceof Readable) {
  //       s3Object.Body.pipe(createWriteStream(objects[0].Key as string))
  //         .on("error", (err) => reject(err))
  //         .on("close", () => resolve(0));
  //     }
  // });
};

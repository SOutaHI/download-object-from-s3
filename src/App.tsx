import React from "react";
import logo from "./logo.svg";

import { useEffect, useState } from "react";
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import { createWriteStream } from "fs";
import { Readable } from "stream";

import "./App.css";

function App() {
  const [objects, setObjects] = useState<
    Required<ListObjectsCommandOutput>["Contents"]
  >([]);

  useEffect(() => {
    const client = new S3Client({
      region: process.env.REACT_APP_AWS_DEFAULT_REGION as string,
      credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY as string,
      },
    });
    const command = new ListObjectsCommand({
      Bucket: process.env.REACT_APP_BUCKET_NAME as string,
    });
    client.send(command).then(({ Contents }) => {
      console.log(Contents);
      setObjects(Contents || []);
    });
  }, []);

  const downloadFileOnFileSystem = async () => {
    const client = new S3Client({
      region: process.env.REACT_APP_AWS_DEFAULT_REGION as string,
      credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY as string,
      },
    });

    const s3Object = await client.send(
      new GetObjectCommand({
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: objects[0].Key as string,
      })
    );
    console.log(s3Object);

    let file = require("fs").createWriteStream("~/Download/" + objects[0].Key as string);
    // s3.getObject(params).createReadStream().pipe(file);

    // await new Promise((resolve, reject) => {
    //   if (s3Object.Body instanceof Readable) {
    //     s3Object.Body.pipe(createWriteStream(objects[0].Key as string))
    //       .on("error", (err) => reject(err))
    //       .on("close", () => resolve(0));
    //   }
    // });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {objects.map((o) => (
          <div key={o.ETag}>{o.Key}</div>
        ))}
        <button onClick={() => downloadFileOnFileSystem()}>Download</button>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";

import { useEffect, useState } from "react";
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {objects.map((o) => (
          <div key={o.ETag}>{o.Key}</div>
        ))}
      </header>
    </div>
  );
}

export default App;

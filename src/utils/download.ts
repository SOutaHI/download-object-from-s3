import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

import { saveAs } from "file-saver";

export const downloadS3Object = async (client: S3Client, fileName: string) => {
  const s3Object = await client.send(
    new GetObjectCommand({
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Key: fileName,
    })
  );
  // console.log(s3Object);
  // console.log(fileName);

  const s3ObjectByteArray = await s3Object.Body!.transformToByteArray();
  const blob = new Blob([s3ObjectByteArray], { type: "octet/stream" });
  saveAs(blob, fileName);
};

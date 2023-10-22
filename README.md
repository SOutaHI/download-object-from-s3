# download-object-from-s3

- download object from s3 without server.
- only use frontend.

## setup
- create .env file, and write access key for s3.
```sh
REACT_APP_AWS_ACCESS_KEY_ID='*************'
REACT_APP_AWS_SECRET_ACCESS_KEY='**********'
REACT_APP_AWS_DEFAULT_REGION='ap-northeast-1'
REACT_APP_BUCKET_NAME='***************'
```

## execute

### start
```sh
npm start
```

### download file
- push "download" button. and download file on s3 bucket under ~/Downloads/.

## ref
### uniform info
- [Amazon S3 examples using SDK for JavaScript (v3)](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html)
- [@aws-sdk/credential-providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/#fromenv)
- [aws-sdk/client-s3 ListBucketsCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListBucketsCommand/)

### authorize
- [Can't export fromIni from @aws-sdk/credential-providers](https://stackoverflow.com/questions/72088326/cant-export-fromini-from-aws-sdk-credential-providers)
- [type checking error with fromEnv in @aws-sdk/credential-providers](https://github.com/aws/aws-sdk-js-v3/issues/3392)

### allow CORS
- [S3とCloudfrontを使った際にCORSエラーを解消する方法](https://zenn.dev/okita_kamegoro/scraps/17cd1e1653cb57)
- [Amazon S3 で CORS を設定し、cURL を使用して CORS ルールを確認する方法](https://repost.aws/ja/knowledge-center/s3-configure-cors)

### example

- [AWS SDK を使用して Amazon S3 オブジェクトを一覧表示するウェブページ](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/example_s3_Scenario_ListObjectsWeb_section.html)
- [AWS SDK for JavaScript（Version 3） と TypeScript を用いて S3 バケットの一覧を取得するサンプルコードを試してみた](https://dev.classmethod.jp/articles/aws-sdk-for-javascript-v3-typescript/)

### download s3 object
- [how to download file in react js](https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js)
- [How to download the file from server location in react Js](https://stackoverflow.com/questions/58830976/how-to-download-the-file-from-server-location-in-react-js)
- [Download file in React JS | Download a File or Image using React](https://www.youtube.com/watch?v=zslesB7EWs0)
- [How to download a File in React.js (local or from URL)](https://bobbyhadz.com/blog/react-download-file)
- [AWS-SDK v3 - Download file with Typescript](https://stackoverflow.com/questions/68373349/aws-sdk-v3-download-file-with-typescript)
- [S3.GetObject no longer returns the result as a string](https://github.com/aws/aws-sdk-js-v3/issues/1877)

- [JavaScriptのStreams APIで細切れのデータを読み書きする](https://sbfl.net/blog/2018/05/26/javascript-streams-api/)
- [Download happening, but not getting saved anywhere #223](https://github.com/jimmywarting/StreamSaver.js/issues/223)
- [ストリームAPIを使いこなす](https://zenn.dev/kojiroueda/articles/e5a18b2c0dc3d4)
- [Nodejs writable stream.write method creates a file but doesn't write in it](https://stackoverflow.com/questions/74432089/nodejs-writable-stream-write-method-creates-a-file-but-doesnt-write-in-it)
- [TypeError: fs.createWriteStream is not a function in Node](https://stackoverflow.com/questions/72812903/typeerror-fs-createwritestream-is-not-a-function-in-node)
- [What's the difference between a WriteSteam and WritableStream?](https://stackoverflow.com/questions/74409885/whats-the-difference-between-a-writesteam-and-writablestream)
- [Node.js Stream を使いこなす](https://qiita.com/masakura/items/5683e8e3e655bfda6756)
- [サーバを使わずに、フロントエンドだけでファイルダウンロードを実装する](https://walking-succession-falls.com/%E3%82%B5%E3%83%BC%E3%83%90%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%9A%E3%81%AB%E3%80%81%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%81%A0%E3%81%91%E3%81%A7%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%82%92%E5%AE%9F%E8%A3%85%E3%81%99%E3%82%8B(typescript%E5%AF%BE%E5%BF%9C)/)
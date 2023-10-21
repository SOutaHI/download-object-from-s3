# get-ObjectList-from-s3

## setup
- create .env file, and write access key for s3.
```sh
REACT_APP_AWS_ACCESS_KEY_ID='*************'
REACT_APP_AWS_SECRET_ACCESS_KEY='**********'
REACT_APP_AWS_DEFAULT_REGION='ap-northeast-1'
REACT_APP_BUCKET_NAME='***************'
```

## execute

```sh
npm start
```

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
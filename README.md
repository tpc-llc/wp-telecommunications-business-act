# 改正電気通信事業法対応プラグイン

## 開発者向け

VSCodeとDockerを利用した開発を想定しています。

VSCodeの「実行とデバッグ」からxdebugが使えます。

```
$ docker compose up -d
```

で必要なサービスが全て起動します。

- http://localhost:8080
  - WordPress
- http://localhost:8081
  - phpmyadmin
- http://localhost:8082
  - REST APIのSwagger
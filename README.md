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

### セットアップ

1. 開発環境用の依存ライブラリのインストール

```
$ composer install --dev
```

2. コーディング規約の適用

```
$ ./vendor/bin/phpcs --config-set installed_paths ./vendor/wp-coding-standards/wpcs,./vendor/phpcompatibility/php-compatibility,./vendor/phpcompatibility/phpcompatibility-paragonie,./vendor/phpcompatibility/phpcompatibility-wp
```

3. Orvalの利用

```
$ npm i -g orval
$ cd frontend
$ npm run openapi
```

4. Storybookの利用

```
$ npm run storybook
```
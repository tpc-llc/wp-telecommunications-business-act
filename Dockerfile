FROM wordpress:latest

RUN pecl install xdebug-3.1.6 \
    && docker-php-ext-enable xdebug
# XDebugインストール

COPY php.ini /usr/local/etc/php/conf.d/
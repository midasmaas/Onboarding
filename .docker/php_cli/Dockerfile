FROM php:7.4-apache

# Install basic dependencies
RUN apt-get update && \
    apt-get install -y unzip zip tar wget imagemagick zlib1g-dev libpng-dev libjpeg-dev libfreetype6-dev libonig-dev libzip-dev libicu-dev libxml2-dev libcurl4-openssl-dev bash-completion

# Setup GD
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install php libraries
RUN docker-php-ext-install -j$(nproc) mbstring zip gd intl xml curl json mysqli opcache pdo pdo_mysql
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y locales
RUN sed -i -e 's/# nl_NL.UTF-8 UTF-8/nl_NL.UTF-8 UTF-8/' /etc/locale.gen && \
    sed -i 's/^# *\(en_US.UTF-8\)/\1/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=nl_NL.UTF-8 && \
    update-locale LANG=en_US.UTF-8
ENV LANG en_US.UTF-8

# install mysql client to restore backup
RUN apt-get install default-mysql-client -y

RUN apt-get clean -y

# Create user (will be "synced" with local user)
RUN useradd -m php-cli

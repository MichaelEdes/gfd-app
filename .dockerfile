# Dockerfile
FROM laravelsail/php80-composer:latest

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

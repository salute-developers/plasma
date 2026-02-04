FROM cypress/base:24.11.1

RUN apt-get update && \
    apt-get install --no-install-recommends -y chromium && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN npm install --location=global "cypress@15.9.0" && \
    cypress verify

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    locales \
    unzip

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    CHROMIUM_FLAGS="--no-sandbox --disable-dev-shm-usage --disable-gpu"

RUN ln -sf /usr/bin/chromium /usr/bin/chromium-browser

WORKDIR /e2e

RUN cypress version

CMD ["cypress", "run"]

FROM cypress/base:22.17.0

# 1️⃣ Полностью заменяем источники apt на snapshot с нужной датой
RUN echo "deb [check-valid-until=no] http://snapshot.debian.org/archive/debian/20240110T000000Z bookworm main" > /etc/apt/sources.list && \
    echo "Acquire::Check-Valid-Until \"false\";" > /etc/apt/apt.conf.d/99no-check-valid && \
    apt-get update && \
    apt-get install -y --no-install-recommends chromium && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

# Install Cypress and dependencies
RUN npm install -g "cypress@15.6.0" && \
    cypress verify

RUN apt-mark hold chromium

## Additional packages
#RUN apt-get update && apt-get install -y --no-install-recommends \
#    ca-certificates \
#    apt-utils \
#    locales \
#    unzip

## Set environment variables for Chromium
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
#    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium\
#    CYPRESS_RUN_BINARY=/root/.cache/Cypress/13.17.0/Cypress/Cypress

# Create working directory
WORKDIR /e2e

# Verify Cypress is accessible
RUN cypress version

CMD ["cypress", "run"]


#FROM cypress/base:22.17.0
#
#RUN apt-get update && \
#    apt-get install -y --no-install-recommends wget ca-certificates && \
#    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*
#
#RUN wget https://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux_x64/1200000/chrome-linux.zip && \
#    apt-get install -y unzip && \
#    unzip chrome-linux.zip -d /opt/chromium && \
#    ln -s /opt/chromium/chrome-linux/chrome /usr/bin/chromium && \
#    rm -rf chrome-linux.zip
#
## Install Cypress and dependencies
#RUN npm install -g "cypress@15.6.0" && \
#    cypress verify
#
## Additional packages
#RUN apt-get update && apt-get install -y --no-install-recommends \
#    ca-certificates \
#    apt-utils \
#    locales \
#    unzip
#
## Set environment variables for Chromium
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
#    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium\
#    CYPRESS_RUN_BINARY=/root/.cache/Cypress/13.17.0/Cypress/Cypress
#
## Create working directory
#WORKDIR /e2e
#
## Verify Cypress is accessible
#RUN cypress version
#
#CMD ["cypress", "run"]

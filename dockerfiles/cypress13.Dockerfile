#https://hub.docker.com/r/younggod/cypress-13
FROM cypress/base:16.16.0

# Install Chromium
RUN apt-get update && \
    apt-get install --no-install-recommends -y chromium && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Cypress and dependencies
RUN npm install --location=global "cypress@13.17.0" && \
    cypress verify

# Additional packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    apt-utils \
    locales \
    unzip

# Set environment variables for Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium\
    CYPRESS_RUN_BINARY=/root/.cache/Cypress/13.17.0/Cypress/Cypress

# Create working directory
WORKDIR /e2e

# Verify Cypress is accessible
RUN cypress version

CMD ["cypress", "run"]

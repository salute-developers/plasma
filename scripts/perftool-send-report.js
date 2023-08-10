#!/usr/bin/env node

/* eslint-disable no-console,  @typescript-eslint/no-var-requires */
const crypto = require('crypto');
const fetch = require('node-fetch');
const { program } = require('commander');

const getMetadata = (data) => {
    if (!data) {
        return JSON.stringify({});
    }

    const result = {};
    for (const key of Object.keys(data)) {
        result[key] = String(data[key]);
    }

    return JSON.stringify(result);
};

const METRICS_URL = 'https://metrics.prom.third-party-app.sberdevices.ru/create-canvas-app-metrics';

program.option('--reportPath <string>').parse();

async function perftoolSendReport() {
    const { reportPath } = program.opts();
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { staticTaskChange, result, isVersionChanged } = require(reportPath);

    if (isVersionChanged) {
        console.info('Perftool version was changed, so we are not sending report.');
        return;
    }

    if (!Object.keys(result).length) {
        console.info('No data to send');
        return;
    }

    console.info('Sending report...');
    const data = {
        ...result,
    };

    if (staticTaskChange) {
        data.staticTaskChange = staticTaskChange;
    }

    const body = [];
    const sessionId = crypto.randomUUID();
    const commitHash = process.env.GITHUB_SHA;
    // e.g. componentId = src/components/Carousel/Carousel.perftest.tsx#CarouselLiteBasic
    for (const componentId of Object.keys(data)) {
        // e.g. taskId = rerender | render
        for (const taskId of Object.keys(data[componentId])) {
            for (const metricId of ['median', 'mean']) {
                const metric = data[componentId][taskId][metricId];
                for (const typeId of ['old', 'new', 'change']) {
                    const item = {
                        ua: 'perftest/packages/plasma',
                        hostname: commitHash,
                        sessionId,
                        path: componentId,
                        key: `${taskId}_${metricId}`,
                        valueStr: typeId,
                        metadata: getMetadata(metric[typeId]),
                    };
                    body.push(item);
                }
            }
        }
    }

    const response = await fetch(METRICS_URL, { body: JSON.stringify(body), method: 'POST' });
    if (!response.ok) {
        const errorInfo = await response.json();
        console.error(`Sent report with error: ${errorInfo}`);
    } else {
        console.info(`Sent report with success: ${response.status}`);
    }
}

perftoolSendReport()
    .then(() => process.exit())
    .catch((err) => {
        console.error(err.name, err.message, err.stack);
        process.exit(1);
    });

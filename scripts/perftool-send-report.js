#!/usr/bin/env node

/* eslint-disable no-console,  @typescript-eslint/no-var-requires */
const crypto = require('crypto');
const fetch = require('node-fetch');
const { program } = require('commander');

const getMetadata = (data) => {
    const result = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]));

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
    // e.g. subjectId = src/components/Carousel/Carousel.perftest.tsx#CarouselLiteBasic
    for (const [subjectId, subject] of Object.entries(data)) {
        // e.g. taskId = rerender | render
        for (const [taskId, task] of Object.entries(subject)) {
            const filteredMetrics = Object.entries(task).filter(([k]) => !k.startsWith('_'));
            // e.g. metricId = median | mean
            for (const [metricId, metric] of filteredMetrics) {
                for (const typeId of ['old', 'new', 'change']) {
                    // change, old are optional
                    if (!metric[typeId]) {
                        // eslint-disable-next-line no-continue
                        continue;
                    }

                    const item = {
                        ua: 'perftest/packages/plasma',
                        hostname: commitHash,
                        sessionId,
                        path: subjectId,
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

#!/usr/bin/env node

/* eslint-disable no-console,  @typescript-eslint/no-var-requires */
const crypto = require('crypto');
const fetch = require('node-fetch');
const { program } = require('commander');

const getMetadata = (data) => {
    const result = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]));

    return JSON.stringify(result);
};

const METRICS_URL = 'https://metrics.prom.third-party-app.sberdevices.ru/perftool';

program.option('--reportPath <string>').option('--referrer <string>').parse();

async function perftoolSendReport() {
    const { reportPath, referrer } = program.opts();
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
    const runId = crypto.randomUUID();
    const commitHash = process.env.GITHUB_SHA;
    // e.g. subjectId = src/components/Carousel/Carousel.perftest.tsx#CarouselLiteBasic
    for (const [componentId, subject] of Object.entries(data)) {
        // e.g. taskId = rerender | render
        for (const [taskId, task] of Object.entries(subject)) {
            const filteredMetrics = Object.entries(task).filter(([k]) => !k.startsWith('_'));
            // e.g. metricId = median | mean
            for (const [metricId, metric] of filteredMetrics) {
                for (const kind of ['old', 'new', 'change']) {
                    // change, old are optional
                    if (!metric[kind]) {
                        // eslint-disable-next-line no-continue
                        continue;
                    }

                    const item = {
                        commitHash,
                        runId,
                        componentId,
                        taskId,
                        metricId,
                        kind,
                        referrer,
                        service: 'packages/plasma',
                        payload: getMetadata(metric[kind]),
                    };

                    console.log(JSON.stringify(item, null, 4));

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

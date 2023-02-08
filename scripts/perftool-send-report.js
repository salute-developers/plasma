#!/usr/bin/env node
/* eslint-disable no-continue */

/* eslint-disable no-console,  @typescript-eslint/no-var-requires */
const path = require('path');
const uuid = require('uuid');
const fetch = require('node-fetch');
const fsPromises = require('fs/promises');

const getMetadata = (data) => {
    if (!data) {
        return JSON.stringify({});
    }

    let result = {};

    if (Array.isArray(data)) {
        result = data.reduce((acc, v, idx) => {
            acc[idx] = String(v);
            return acc;
        }, {});
    } else {
        for (const key of Object.keys(data)) {
            result[key] = String(data[key]);
        }
    }

    return JSON.stringify(result);
};

const URL = 'https://metrics.prom.third-party-app.sberdevices.ru/create-canvas-app-metrics';

async function perftoolSendReport() {
    const { staticTaskChange, result } = await fsPromises
        .readFile(path.resolve('./packages/plasma-ui/perftest/comparison.json'), { encoding: 'utf-8' })
        .then(JSON.parse);

    // TODO: обсудить с Артемом нужно ли это все-таки
    // if (!isVersionChanged) {
    //     console.log('Not sending report');
    //     return;
    // }

    console.info('Sending report...');
    const data = {
        staticTaskChange,
        ...result,
    };

    const body = [];
    const sessionId = uuid.v4();
    const commitHash = process.env.GITHUB_SHA;
    try {
        // e.g. componentId = src/components/Carousel/Carousel.perftest.tsx#CarouselLiteBasic
        for (const componentId of Object.keys(data)) {
            // e.g. taskId = rerender | render
            for (const taskId of Object.keys(data[componentId])) {
                for (const metricId of ['median', 'mean']) {
                    const metric = data[componentId][taskId][metricId];
                    for (const typeId of ['old', 'new', 'change']) {
                        const item = {
                            ua: 'perftool',
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
    } catch (error) {
        console.error('Body creation Error', error);
    }

    const message = 'Sent report';
    const response = await fetch(URL, { body: JSON.stringify(body), method: 'POST' });
    if (!response.ok) {
        const errorInfo = await response.json();
        console.error(`${message} with error: ${errorInfo}`);
    } else {
        console.info(`${message} with success: ${response.status}`);
    }
}

perftoolSendReport()
    .then(() => process.exit())
    .catch((err) => {
        console.error(err.name, err.message, err.stack);
        process.exit(1);
    });

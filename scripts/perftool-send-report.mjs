#!/usr/bin/env node

/* eslint-disable no-console */
import path from 'path';
import uuid from 'uuid';
import fetch from 'node-fetch';
import fsPromises from 'fs/promises';

function getValue(metric) {
    switch (typeof metric) {
        case 'boolean':
            return {
                valueBool: metric,
            };
        case 'number':
            return {
                valueNum: metric,
            };
        case 'string':
            return {
                valueStr: metric,
            };
        default:
            return {
                valueStr: JSON.stringify(metric),
            };
    }
}

const URL = 'https://metrics.prom.third-party-app.sberdevices.ru/create-canvas-app-metrics';

async function perftoolSendReport() {
    const message = 'Sending report';
    console.log(`${message}...`);

    const commithash = process.env.GITHUB_SHA;
    console.log(`commithash = ${commithash}...`);

    const data = await fsPromises
        .readFile(path.resolve('./perftest/comparison.json'), { encoding: 'utf-8' })
        .then(JSON.parse);

    const sessionId = uuid.v4();

    const body = [];
    const subjectIdList = Object.keys(data);
    for (const subjectId of subjectIdList) {
        const taskIdList = Object.keys(data[subjectId]);
        for (const taskId of taskIdList) {
            const task = data[subjectId][taskId];
            const metricIdList = Object.keys(task);
            for (const metricId of metricIdList) {
                const metric = task[metricId];
                const item = {
                    hostname: `perftool_${commithash}`,
                    sessionId,
                    path: subjectId,
                    ua: taskId,
                    key: metricId,
                    ...getValue(metric),
                    // TODO: fix any
                    metadata: JSON.stringify(metric.change || {}),
                };
                body.push(item);
            }
        }
    }
    console.log(message);

    const response = await fetch(URL, { body: JSON.stringify(body), method: 'POST' });
    if (!response.ok) {
        const errorInfo = await response.json();
        console.error(`${message} with error: ${errorInfo}`);
    } else {
        console.info(`${message} with success status: ${response.status}`);
    }
}

perftoolSendReport()
    .then(() => process.exit())
    .catch((err) => {
        console.error(err.name, err.message, err.stack);
        process.exit(1);
    });

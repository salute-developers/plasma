#!/usr/bin/env node

/* eslint-disable no-console */

import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
import fsPromises from 'fs/promises';
import { createCommand, createArgument } from 'commander';

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

const cli = createCommand('perftool-sendReport');

cli.addArgument(createArgument('<commitSHA>', 'The commit SHA that triggered the workflow.'));

async function start() {
    const message = 'Sending report';
    console.log(`${message}...`);

    const data = await fsPromises
        .readFile(path.resolve('./perftest/comparison.json'), { encoding: 'utf-8' })
        .then(JSON.parse);

    const sessionId = uuidv4();
    const [commithash] = cli.processedArgs;
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
                    metadata: JSON.stringify(metric?.change || {}),
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

await start()
    .then(() => process.exit())
    .catch((err) => {
        console.error(err.name, err.message, err.stack);
        process.exit(1);
    });

/* eslint-disable no-console */
import path from 'path';
import crypto from 'crypto';
import got from 'got';

import { readJson } from '../utils/fs';

import { ReportType, SubjectResult } from './types';

export type SendParams = {
    commitHash: string;
    reportPath: string;
    subject: string;
    referrer: string;
};

type MetricsRecord = {
    commitHash: string;
    runId: string;
    componentId: string;
    taskId: string;
    metricId: string;
    kind: string;
    referrer: string;
    service: string;
    payload: string;
};

class PerftestSendReportApi {
    METRICS_URL = 'https://metrics.prom.third-party-app.sberdevices.ru/perftool';

    async send({ reportPath, commitHash, subject, referrer }: SendParams): Promise<void> {
        const { staticTaskChange, result, isVersionChanged } = await readJson<ReportType>(path.resolve(reportPath));

        if (isVersionChanged) {
            console.log('Perftool version was changed, so we are not sending report.');

            return;
        }

        if (!Object.keys(result).length) {
            console.log('No data to send');

            return;
        }

        const body = this.transform({
            result,
            staticTaskChange,
            subject,
            commitHash,
            referrer,
        });

        const response = await got(this.METRICS_URL, {
            body: JSON.stringify(body),
            method: 'POST',
        });

        if (response.statusCode !== 200) {
            const errorInfo = JSON.parse(response.body);
            console.log(`Report sent with error: ${errorInfo}`);

            return;
        }

        console.log('Report sent successfully');
    }

    protected transform({
        result,
        staticTaskChange,
        subject: service,
        commitHash,
        referrer,
    }: {
        result: Record<string, SubjectResult>;
        staticTaskChange: SubjectResult;
        subject: string;
        commitHash: string;
        referrer: string;
    }): MetricsRecord[] {
        const body = [];
        const runId = crypto.randomUUID();
        const data = {
            ...result,
        };

        if (staticTaskChange) {
            data.staticTaskChange = staticTaskChange;
        }

        // e.g. componentId = src/components/Carousel/Carousel.perftest.tsx#CarouselLiteBasic
        for (const [componentId, subject] of Object.entries(data)) {
            // e.g. taskId = rerender | render
            for (const [taskId, task] of Object.entries(subject)) {
                const filteredMetrics = Object.entries(task).filter(([k]) => !k.startsWith('_'));
                // e.g. metricId = median | mean
                for (const [metricId, metric] of filteredMetrics) {
                    for (const kind of ['old', 'new', 'change'] as const) {
                        const metricValue = metric[kind];

                        // change, old are optional
                        if (!metricValue) {
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
                            service,
                            payload: this.getPayload(metricValue),
                        };

                        body.push(item);
                    }
                }
            }
        }

        return body;
    }

    protected getPayload(data: Record<string, unknown> | [number, number] | number): string {
        if (typeof data === 'number') {
            data = { 0: data };
        }

        const result = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v)]));

        return JSON.stringify(result);
    }
}

export default PerftestSendReportApi;

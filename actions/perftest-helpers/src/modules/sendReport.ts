/* eslint-disable no-console */
import path from 'path';
import crypto from 'crypto';
import got from 'got';

import { readJson } from '../utils/fs';

import { ComparableResult, ReportType, SubjectResult } from './types';

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

    MAX_BODY_SIZE = 1024 ** 2 / 2;

    async send({ reportPath, commitHash, subject, referrer }: SendParams): Promise<void> {
        const { staticTaskChange, result, isVersionChanged } = await readJson<ReportType>(path.resolve(reportPath));

        if (isVersionChanged) {
            console.log('Perftool version was changed, so we are not sending report.');

            return;
        }

        const body = this.transform({
            result,
            staticTaskChange,
            subject,
            commitHash,
            referrer,
        });

        const payloads = this.splitRecords(body);

        console.log(`Sending ${payloads.length} chunks`);

        const requests = payloads.map(async (payload, i) => {
            const response = await got(this.METRICS_URL, {
                body: JSON.stringify(payload),
                method: 'POST',
                retry: { limit: 2, methods: ['POST'] },
            });

            if (response.statusCode < 200 && response.statusCode > 299) {
                const errorInfo = JSON.parse(response.body);
                console.log(`Report chunk #${i} sent with error: ${errorInfo}`);
            }
        });

        await Promise.all(requests);

        console.log(`Report sent successfully in ${requests.length} chunks`);
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
        const body = [] as MetricsRecord[];
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
                const commonRecordFields = {
                    commitHash,
                    runId,
                    taskId,
                    referrer,
                    service,
                };

                body.push(
                    ...this.getMetricRecords(task, {
                        ...commonRecordFields,
                        componentId,
                    }),
                );

                if (Array.isArray(task.modes)) {
                    const { length } = task.modes;

                    task.modes.forEach((mode, i) => {
                        const componentVirtualId = `${componentId}${length > 1 ? `_mode${i}` : ''}`;
                        body.push(
                            ...this.getMetricRecords(mode, {
                                ...commonRecordFields,
                                componentId: componentVirtualId,
                            }),
                        );
                    });

                    body.push(
                        ...['old', 'new'].map((kind) => ({
                            ...commonRecordFields,
                            componentId,
                            metricId: 'modeCount',
                            kind,
                            payload: this.getPayload(length),
                        })),
                    );
                } else if (task.modes) {
                    const { new: now, old } = task.modes;
                    const common = {
                        ...commonRecordFields,
                        componentId,
                        metricId: 'modeCount',
                    };

                    body.push({
                        ...common,
                        kind: 'new',
                        payload: this.getPayload(now.length),
                    });

                    if (old) {
                        body.push({
                            ...common,
                            kind: 'old',
                            payload: this.getPayload(old.length),
                        });

                        body.push({
                            ...common,
                            kind: 'change',
                            payload: this.getPayload({
                                difference: now.length - old.length,
                                percentage: (now.length / (old.length || 1)) * 100,
                            }),
                        });
                    }
                }
            }
        }

        // If there's no result, add the empty mark to see the run on the dashboard
        if (!body.length) {
            body.push({
                commitHash,
                runId,
                referrer,
                service,
                taskId: 'mark',
                componentId: 'mark',
                metricId: 'mark',
                kind: 'new',
                payload: this.getPayload(0),
            });
        }

        return body;
    }

    protected getMetricRecords(
        task: SubjectResult[string],
        common: Omit<MetricsRecord, 'kind' | 'payload' | 'metricId'>,
    ): MetricsRecord[] {
        const res = [] as MetricsRecord[];

        /* eslint-disable prettier/prettier */
        const filteredMetrics = Object.entries(task).filter(([k]) => !k.startsWith('_') && !['modes'].includes(k)) as [
            string,
            ComparableResult,
        ][];
        /* eslint-enable prettier/prettier */

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
                    ...common,
                    kind,
                    metricId,
                    payload: this.getPayload(metricValue),
                };

                res.push(item);
            }
        }

        return res;
    }

    protected splitRecords(records: MetricsRecord[]): MetricsRecord[][] {
        const singleRecordApproxSize = JSON.stringify(records[0]).length;
        const maxPayloadLength = Math.trunc(this.MAX_BODY_SIZE / singleRecordApproxSize) || 1;
        const result = [];

        for (let i = 0; i < records.length; i += maxPayloadLength) {
            result.push(records.slice(i, i + maxPayloadLength));
        }

        return result;
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

import { Config } from '../config';
import { Task } from '../client/measurement/types';
import { RunTaskResult } from '../client/measurement/runner';
import { JSONSerializable } from '../utils/types';
import { defer } from '../utils/deferred';
import { id as staticTaskSubjectId } from '../stabilizers/staticTask';

import metrics from './metrics';
import { MetricResult } from './types';

export type StatsMap = { __statsMap: true } & {
    [statKey: string]: MetricResult;
};
export type StatsReport = {
    [subjectId: string]: {
        [taskId: string]: JSONSerializable | StatsMap;
    };
};

export default class Statistics<T extends Task<any, any>[]> {
    config: Config;

    computableObservations: Map<string, Map<T[number]['id'], number[]>> = new Map();

    bypassedObservations: Map<string, Map<T[number]['id'], JSONSerializable>> = new Map();

    taskIdToTaskMap: Map<T[number]['id'], T[number]>;

    isConsuming = false;

    constructor(config: Config, tasks: T) {
        this.config = config;

        this.taskIdToTaskMap = new Map(tasks.map((task) => [task.id, task]));
    }

    private addObservation({ taskId, subjectId, ...rest }: RunTaskResult<T[number]>): void {
        if (!('result' in rest)) {
            return;
        }

        if (typeof rest.result !== 'number' || this.taskIdToTaskMap.get(taskId)?.isIdempotent) {
            if (!this.bypassedObservations.has(subjectId)) {
                this.bypassedObservations.set(
                    subjectId,
                    new Map([[taskId, (rest.result as unknown) as JSONSerializable]]),
                );
            }

            return;
        }

        if (!this.computableObservations.has(subjectId)) {
            this.computableObservations.set(subjectId, new Map([[taskId, [rest.result]]]));
            return;
        }

        if (!this.computableObservations.get(subjectId)?.has(taskId)) {
            this.computableObservations.get(subjectId)?.set(taskId, [rest.result]);
            return;
        }

        this.computableObservations.get(subjectId)?.get(taskId)?.push(rest.result);
    }

    async consume(source: AsyncGenerator<RunTaskResult<T[number]>[], undefined>): Promise<void> {
        this.isConsuming = true;

        for await (const resultGroup of source) {
            if (!this.isConsuming) {
                break;
            }

            for (const result of resultGroup) {
                this.addObservation(result);
            }
        }

        this.isConsuming = false;
    }

    async *stream(): AsyncGenerator<StatsReport, undefined> {
        while (this.isConsuming) {
            await defer(this.config.intermediateRefreshInterval);

            yield this.getResult();
        }

        return undefined;
    }

    getResult(): StatsReport {
        // TODO filter outsiders, feedback & restart for more,
        const report: StatsReport = {};

        for (const [subjectId, value] of this.bypassedObservations) {
            report[subjectId] = Object.fromEntries(value);
        }

        for (const [subjectId, tasksResult] of this.computableObservations) {
            report[subjectId] = report[subjectId] || {};

            for (const [taskId, results] of tasksResult) {
                report[subjectId][taskId] = report[subjectId][taskId] || { __statsMap: true };

                // Presort for faster median and quantiles
                // eslint-disable-next-line no-nested-ternary
                results.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
                for (const metric of metrics) {
                    // TODO exclude metrics by task id
                    this.config;
                    const metricResult = metric.compute(results);

                    if (Array.isArray(metricResult) && subjectId !== staticTaskSubjectId) {
                        metricResult[1] += this.config.absoluteError;
                    }

                    (report[subjectId][taskId] as StatsMap)[metric.id] = metricResult;
                }
            }
        }

        return report;
    }

    clear() {
        this.isConsuming = false;
        this.computableObservations.clear();
    }
}

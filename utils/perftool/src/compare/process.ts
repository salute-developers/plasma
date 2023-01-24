import assert from 'assert';

import { ReportWithMeta } from '../reporter';
import { JSONSerializable } from '../utils/types';
import { Comparator, CompareResult, MetricResult } from '../statistics/types';
import { StatsMap, StatsReport } from '../statistics';
import metrics from '../statistics/metrics';
import { compareSimpleMetricResults } from '../statistics/comparators';
import { Config, getAllTasks } from '../config';
import { TaskAim } from '../client/measurement/types';
import { warn } from '../utils/logger';
import { isStatsMap } from '../utils/statsMap';
import getCurrentVersion from '../utils/version';
import { id as staticTaskSubjectId, overrideMetric } from '../stabilizers/staticTask';
import { intersectStabilizers } from '../utils/stabilizers';

type IncomparableResult = {
    old?: JSONSerializable;
    new: JSONSerializable;
};

type ComparableResult = {
    old?: MetricResult;
    new: MetricResult;
    change?: CompareResult;
};

type ComparableResultMap = { __comparable: true } & { [statKey: string]: ComparableResult };

type Report = {
    [subjectId: string]: {
        [taskId: string]: IncomparableResult | ComparableResultMap;
    };
};

type CompareReport = {
    version: string;
    isVersionChanged: boolean;
    timestamp: number;
    hasSignificantNegativeChanges: boolean;
    staticTaskChange?: Report[string];
    stabilizers: string[];
    result: Report;
};

const metricIdToMetricMap = Object.fromEntries(metrics.map((metric) => [metric.id, metric]));

function isNegativeChange(aim: TaskAim, { difference }: CompareResult): boolean {
    return (aim === 'decrease' && difference > 0) || (aim === 'increase' && difference < 0);
}

function findSignificantNegativeChanges(config: Config, report: Report): boolean {
    const allTasks = getAllTasks(config);
    const taskIdToTaskMap = Object.fromEntries(allTasks.map((task) => [task.id, task]));

    for (const tasks of Object.values(report)) {
        for (const [taskId, result] of Object.entries(tasks)) {
            const taskAim = taskIdToTaskMap[taskId]?.aim;
            const taskShouldFailOnNegativeChanges =
                config.taskConfiguration[taskId]?.failOnSignificantChanges !== false;

            if (!('__comparable' in result) || !taskAim || !taskShouldFailOnNegativeChanges) {
                continue;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { __comparable, ...comparableResults } = result;

            for (const [metricId, { change }] of Object.entries(comparableResults)) {
                const metricShouldFailOnNegativeChanges =
                    config.metricConfiguration[metricId]?.failOnSignificantChanges !== false;

                if (
                    change?.significanceRank === 'high' &&
                    isNegativeChange(taskAim, change) &&
                    metricShouldFailOnNegativeChanges
                ) {
                    return true;
                }
            }
        }
    }

    return false;
}

function processMetricResult<T extends MetricResult>(
    current: T,
    previous?: T,
    comparator?: Comparator<T>,
): ComparableResult {
    if (!previous) {
        return { new: current };
    }
    assert(comparator);

    return {
        old: previous,
        new: current,
        change: comparator(current, previous),
    };
}

function processTaskResult(
    current: JSONSerializable | StatsMap,
    previous?: JSONSerializable | StatsMap,
): IncomparableResult | ComparableResultMap {
    const isCurrentNumber = typeof current === 'number';

    if (!isStatsMap(current) && !isCurrentNumber) {
        const result: IncomparableResult = { new: current };
        if (typeof previous !== 'undefined') result.old = previous;
        return result;
    }

    if (isCurrentNumber) {
        return processMetricResult(
            current,
            typeof previous === 'number' ? previous : undefined,
            compareSimpleMetricResults,
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __statsMap, ...restReport } = current;
    const result = { __comparable: true } as ComparableResultMap;

    for (const [currentMetricId, currentMetricResult] of Object.entries(restReport)) {
        const metric = metricIdToMetricMap[currentMetricId];

        assert(metric);

        const previousMetricResult = isStatsMap(previous) ? previous[currentMetricId] : undefined;
        const isCurrentMetricResultWithError = Array.isArray(currentMetricResult);
        const isPreviousMetricResultWithError = Array.isArray(previousMetricResult);

        if (isCurrentMetricResultWithError !== isPreviousMetricResultWithError) {
            warn(`Metric ${currentMetricId} changed output`);

            result[currentMetricId] = processMetricResult(currentMetricResult);
            continue;
        }

        result[currentMetricId] = processMetricResult<MetricResult>(
            currentMetricResult,
            previousMetricResult,
            metric.compare as Comparator<MetricResult>,
        );
    }

    return result;
}

function processStaticTaskStabilizer(
    config: Config,
    report: StatsReport,
    staticTaskStabilizerResult: StatsReport[string],
): void {
    const staticTaskResult = staticTaskStabilizerResult as { [k: string]: StatsMap };
    const allTasks = getAllTasks(config);
    const taskIdToTaskMap = new Map(allTasks.map((task) => [task.id, task]));

    for (const subjectResults of Object.values(report)) {
        for (const [taskId, results] of Object.entries(subjectResults)) {
            const task = taskIdToTaskMap.get(taskId);

            if (
                !task ||
                !intersectStabilizers(config, task.availableStabilizers).includes(staticTaskSubjectId) ||
                !isStatsMap(results)
            ) {
                continue;
            }

            for (const [metricId, metricResult] of Object.entries(results)) {
                if (metricId === '__statsMap') continue;

                results[metricId] = overrideMetric(staticTaskResult[taskId][metricId], metricResult as MetricResult);
            }
        }
    }
}

function processSubjectResult(
    current: StatsReport[keyof StatsReport],
    previous?: StatsReport[keyof StatsReport],
): Report[keyof Report] {
    const result: Report[keyof Report] = {};

    for (const [currentTaskId, currentTaskReport] of Object.entries(current)) {
        result[currentTaskId] = processTaskResult(currentTaskReport, previous?.[currentTaskId]);
    }

    return result;
}

export async function processReports(
    config: Config,
    currentReport: ReportWithMeta,
    previousReport: ReportWithMeta,
): Promise<CompareReport> {
    const { version: currentVersion, result: currentResult, staticTaskResult: currentStaticTaskResult } = currentReport;
    const {
        version: previousVersion,
        result: previousResult,
        staticTaskResult: previousStaticTaskResult,
    } = previousReport;

    const stabilizers = [];
    const isVersionChanged = currentVersion !== previousVersion;
    if (isVersionChanged) {
        warn('Looks like perftool version is changed. Some results may be falsy');
    }

    if (currentStaticTaskResult && previousStaticTaskResult) {
        stabilizers.push(staticTaskSubjectId);

        processStaticTaskStabilizer(config, currentResult, currentStaticTaskResult);
        processStaticTaskStabilizer(config, previousResult, previousStaticTaskResult);
    }

    const result: Report = {};
    for (const [currentSubjectId, currentSubjectReport] of Object.entries(currentResult)) {
        result[currentSubjectId] = processSubjectResult(currentSubjectReport, previousResult[currentSubjectId]);
    }
    const staticTaskChange = currentStaticTaskResult
        ? processSubjectResult(currentStaticTaskResult, previousStaticTaskResult)
        : undefined;

    const hasSignificantNegativeChanges = findSignificantNegativeChanges(config, result);

    return {
        version: await getCurrentVersion(),
        isVersionChanged,
        timestamp: Date.now(),
        staticTaskChange,
        hasSignificantNegativeChanges,
        stabilizers,
        result,
    };
}

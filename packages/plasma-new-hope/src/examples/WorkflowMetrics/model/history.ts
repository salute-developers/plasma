import { validateRange } from '../utils/dates.ts';

import { collectionRevision, repository, workflows, outcomes } from './constants.ts';
import type { History, Workflow } from './types.ts';
import { measurementKey } from './jobs.ts';

export function createHistory(workflow: Workflow, from: string, to: string): History {
    validateRange(from, to);
    return {
        version: 3,
        collectionRevision,
        repository,
        workflow,
        from,
        to,
        updatedAt: new Date().toISOString(),
        coverage: [],
        runs: [],
        warnings: [],
        measurements: [],
    };
}

export function parseHistory(value: unknown): History {
    const fail = () => {
        throw new Error('Неверный формат данных прогонов workflow-metrics v3.');
    };
    if (!value || typeof value !== 'object') {
        return fail();
    }
    const history = value as History;
    const integer = (number: unknown) => typeof number === 'number' && Number.isSafeInteger(number) && number >= 0;
    const timestamp = (date: unknown) => typeof date === 'string' && Number.isFinite(Date.parse(date));
    if (
        history.version !== 3 ||
        (history.collectionRevision !== undefined && !integer(history.collectionRevision)) ||
        history.repository !== repository ||
        !Object.hasOwn(workflows, history.workflow) ||
        !timestamp(history.updatedAt) ||
        typeof history.from !== 'string' ||
        typeof history.to !== 'string' ||
        !Array.isArray(history.runs) ||
        !Array.isArray(history.coverage) ||
        !Array.isArray(history.warnings) ||
        !history.warnings.every((warning) => typeof warning === 'string') ||
        !Array.isArray(history.measurements)
    ) {
        return fail();
    }
    validateRange(history.from, history.to);
    const runIds = new Set<number>();
    history.runs.forEach((run) => {
        if (
            !run ||
            !integer(run.id) ||
            !integer(run.attempt) ||
            (run.collectionRevision !== undefined && !integer(run.collectionRevision)) ||
            (run.headSha !== undefined && (typeof run.headSha !== 'string' || !/^[a-f0-9]{40}$/.test(run.headSha))) ||
            !timestamp(run.createdAt) ||
            runIds.has(run.id) ||
            run.createdAt.slice(0, 10) < history.from ||
            run.createdAt.slice(0, 10) > history.to
        ) {
            fail();
        }
        runIds.add(run.id);
    });
    history.coverage.forEach((range) => {
        if (
            !range ||
            !timestamp(range.from) ||
            !timestamp(range.to) ||
            range.from > range.to ||
            range.from.slice(0, 10) < history.from ||
            range.to.slice(0, 10) > history.to
        ) {
            fail();
        }
    });
    const keys = new Set<string>();
    history.measurements.forEach((measurement) => {
        if (
            !measurement ||
            !integer(measurement.runId) ||
            !runIds.has(measurement.runId) ||
            !integer(measurement.jobId) ||
            !integer(measurement.runNumber) ||
            !integer(measurement.attempt) ||
            measurement.workflow !== history.workflow ||
            !timestamp(measurement.createdAt) ||
            typeof measurement.branch !== 'string' ||
            !/^(plasma|sdds)-[a-z][a-z0-9-]*$/.test(measurement.packageName) ||
            !['chromium', 'webkit'].includes(measurement.browser) ||
            (measurement.reactVersion !== undefined &&
                (typeof measurement.reactVersion !== 'string' ||
                    !/^\d+(?:\.\d+){0,2}$/.test(measurement.reactVersion))) ||
            (measurement.sourceWorkflow !== undefined &&
                (typeof measurement.sourceWorkflow !== 'string' ||
                    !/^[a-z0-9-]+\.ya?ml$/.test(measurement.sourceWorkflow))) ||
            (measurement.specFiles !== undefined &&
                (!measurement.specFiles ||
                    !integer(measurement.specFiles.count) ||
                    typeof measurement.specFiles.commit !== 'string' ||
                    !/^[a-f0-9]{40}$/.test(measurement.specFiles.commit) ||
                    !['run-head', 'history'].includes(measurement.specFiles.basis) ||
                    (measurement.specFiles.ref !== undefined &&
                        (typeof measurement.specFiles.ref !== 'string' || !measurement.specFiles.ref.trim())))) ||
            !outcomes.includes(measurement.cypressConclusion) ||
            !outcomes.includes(measurement.jobConclusion) ||
            ![measurement.cypressSeconds, measurement.jobSeconds].every(
                (seconds) =>
                    seconds === null || (typeof seconds === 'number' && Number.isFinite(seconds) && seconds >= 0),
            ) ||
            measurement.createdAt.slice(0, 10) < history.from ||
            measurement.createdAt.slice(0, 10) > history.to
        ) {
            fail();
        }
        const key = measurementKey(measurement);
        if (keys.has(key)) {
            fail();
        }
        keys.add(key);
    });
    return history;
}

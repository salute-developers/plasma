import { outcomes } from './constants.ts';
import type { Browser, Duration, Job, Measurement, Outcome, Run, Step, Workflow } from './types.ts';

const outcome = (value: string | null): Outcome =>
    outcomes.includes(value as Outcome) ? (value as Outcome) : 'unknown';

const elapsed = (step: Step): number | null => {
    if (!step.started_at || !step.completed_at || step.status !== 'completed' || step.conclusion === 'skipped') {
        return null;
    }
    const seconds = (Date.parse(step.completed_at) - Date.parse(step.started_at)) / 1000;
    return Number.isFinite(seconds) && seconds >= 0 ? seconds : null;
};

export const measurementKey = (measurement: Measurement) =>
    `${measurement.runId}/${measurement.packageName}/${measurement.browser}/${measurement.reactVersion || 'default'}`;

export function normalizeJob(job: Job, run: Run, workflow: Workflow): Measurement | null {
    const matrix = job.name.match(/^(.+?)\s*\(([^)]*)\)(?:\s*\/.*)?$/);
    if (!matrix || job.status !== 'completed') {
        return null;
    }
    const name = matrix[1].trim();
    const technical = name.match(/^cypress_(plasma|sdds)(?:[-_]react[-_]?(\d+)|_(webkit))?$/i);
    const descriptive = name.match(/^Cypress(?: with React (\d+)| (webkit))? for (plasma|sdds) packages$/i);
    const legacy = name.match(/^(?:cypress(?:[-_]react[-_]?(\d+))?|Cypress with React (\d+))$/i);
    if (!technical && !descriptive && !legacy) {
        return null;
    }
    const family = (technical?.[1] || descriptive?.[3] || 'plasma').toLowerCase();
    const reactVersion = technical?.[2] || descriptive?.[1] || legacy?.[1] || legacy?.[2];
    const browserFromName = technical?.[3] || descriptive?.[2];
    const parts = matrix[2]
        .split(',')
        .map((part) => part.trim().replace(/^"|"$/g, ''))
        .filter(Boolean);
    const [scope, matrixBrowser] = parts;
    const browser = (matrixBrowser || browserFromName || 'chromium').toLowerCase();
    if (!scope || !/^[a-z][a-z0-9-]*$/.test(scope) || parts.length > 2 || !['chromium', 'webkit'].includes(browser)) {
        return null;
    }
    const cypress = job.steps?.find((step) => /^Run Cypress CT\b/.test(step.name));
    const preparation = job.steps?.find((step) =>
        ['Install dependencies and prepare packages', 'Lerna bootstrap'].includes(step.name),
    );
    // Both preparation names can accompany a successful shell wrapper that actually skips testing.
    const skipped = preparation?.conclusion === 'skipped' && cypress?.conclusion === 'success';
    return {
        runId: run.id,
        runNumber: run.run_number,
        attempt: job.run_attempt || run.run_attempt,
        jobId: job.id,
        workflow,
        sourceWorkflow: run.path?.split('@')[0].split('/').pop() || workflow,
        ...(reactVersion ? { reactVersion } : {}),
        branch: run.head_branch,
        createdAt: run.created_at,
        packageName: `${family}-${scope}`,
        browser: browser as Browser,
        jobConclusion: outcome(job.conclusion),
        cypressConclusion: skipped ? 'skipped' : outcome(cypress?.conclusion || null),
        cypressSeconds: cypress && !skipped ? elapsed(cypress) : null,
        jobSeconds: elapsed(job),
    };
}

export const getOutcome = (measurement: Measurement, duration: Duration) =>
    duration === 'cypressSeconds' ? measurement.cypressConclusion : measurement.jobConclusion;

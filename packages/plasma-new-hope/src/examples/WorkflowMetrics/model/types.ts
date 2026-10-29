import type { repository, workflows } from './constants.ts';

export type Workflow = keyof typeof workflows;

export type Browser = 'chromium' | 'webkit';

export type Duration = 'cypressSeconds' | 'jobSeconds';

export type Statistic = 'p90' | 'median' | 'mean';

export type Grouping = 'day' | 'week' | 'month';

export type Outcome = 'success' | 'failure' | 'cancelled' | 'skipped' | 'timed_out' | 'unknown';

export interface SpecFiles {
    count: number;
    commit: string;
    basis: 'run-head' | 'history';
    ref?: string;
}

export interface Measurement {
    runId: number;
    runNumber: number;
    attempt: number;
    jobId: number;
    workflow: Workflow;
    branch: string;
    createdAt: string;
    packageName: string;
    browser: Browser;
    jobConclusion: Outcome;
    cypressConclusion: Outcome;
    cypressSeconds: number | null;
    jobSeconds: number | null;
    reactVersion?: string;
    sourceWorkflow?: string;
    specFiles?: SpecFiles;
}

/** In-memory collector snapshot; persisted as manifest and chunks, never as a flat JSON file. */
export interface History {
    version: 3;
    repository: typeof repository;
    updatedAt: string;
    from: string;
    to: string;
    workflow: Workflow;
    coverage: TimeRange[];
    runs: Array<{ id: number; attempt: number; createdAt: string; collectionRevision?: number; headSha?: string }>;
    warnings: string[];
    measurements: Measurement[];
    collectionRevision?: number;
}

/** Inclusive UTC intervals for which both workflow lists and all jobs have been collected. */
export interface TimeRange {
    from: string;
    to: string;
}

export interface Step {
    name: string;
    status: string;
    conclusion: string | null;
    started_at: string | null;
    completed_at: string | null;
}

export interface Job extends Step {
    id: number;
    run_attempt?: number;
    steps?: Step[];
}

export interface Run {
    id: number;
    run_number: number;
    run_attempt: number;
    head_branch: string;
    created_at: string;
    path?: string;
    head_sha?: string;
}

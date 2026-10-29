import type { Outcome, Workflow } from './types.ts';

export const repository = 'salute-developers/plasma';

export const workflows = {
    'cypress-by-cron-every-day.yml': 'Cypress · прогоны по расписанию',
    'cypress.yml': 'Cypress · pull requests',
    'cypress-release-branch.yml': 'Cypress · релизные ветки',
};

// Increment when discovery or job normalization changes so completed legacy archives can be repaired.
export const collectionRevision = 1;

export const workflowSources: Record<Workflow, string[]> = {
    'cypress-by-cron-every-day.yml': ['cypress-by-cron-every-day.yml', 'cypress-by-cron.yml'],
    'cypress.yml': ['cypress.yml'],
    'cypress-release-branch.yml': ['cypress-release-branch.yml'],
};

export const outcomes: Outcome[] = ['success', 'failure', 'cancelled', 'skipped', 'timed_out', 'unknown'];

export const archiveDirectories: Record<Workflow, string> = {
    'cypress-by-cron-every-day.yml': 'daily',
    'cypress.yml': 'pull-requests',
    'cypress-release-branch.yml': 'release',
};

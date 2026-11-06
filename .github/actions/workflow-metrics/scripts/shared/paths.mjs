import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repositoryRoot = fileURLToPath(new URL('../../../../../', import.meta.url));
export const defaultArchiveDirectory = resolve(
    repositoryRoot,
    'packages/plasma-new-hope/.storybook/public/workflow-metrics',
);

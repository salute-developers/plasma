import { parseArgs } from 'node:util';

import { countSpecFiles } from '../commands/spec-counts.mjs';
import { runCli } from '../utils/cli.mjs';

const { values } = parseArgs({
    options: {
        workflow: { type: 'string', default: 'cypress-by-cron-every-day.yml' },
        ref: { type: 'string', default: 'origin/dev' },
        'output-dir': { type: 'string' },
        'dry-run': { type: 'boolean' },
        help: { type: 'boolean' },
    },
});

await runCli(async () => {
    if (values.help) {
        console.log(
            'spec-counts.mjs [--ref=origin/dev] [--workflow=cypress-by-cron-every-day.yml] [--output-dir=/path] [--dry-run]',
        );
        console.log('Считает b2c *.component-test.ts/tsx в пакете и ядре по локальной истории git. Без GitHub API.');
        console.log(
            'Без headSha ревизия cron-прогона на dev оценивается по дате коммита и отмечается как приблизительная.',
        );
        return;
    }
    await countSpecFiles(values);
});

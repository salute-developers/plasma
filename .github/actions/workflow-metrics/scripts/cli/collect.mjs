import { parseArgs } from 'node:util';

import { collectMetrics } from '../commands/collect.mjs';
import { runCli } from '../utils/cli.mjs';
import { formatMessageDates } from '../shared/model.mjs';

const { values } = parseArgs({
    options: {
        from: { type: 'string' },
        to: { type: 'string', default: new Date().toISOString().slice(0, 10) },
        workflow: { type: 'string', default: 'all' },
        'refresh-days': { type: 'string', default: '7' },
        'max-requests': { type: 'string', default: '1000' },
        'output-dir': { type: 'string' },
        'check-auth': { type: 'boolean' },
        'require-token': { type: 'boolean' },
        help: { type: 'boolean' },
    },
});

await runCli(
    async () => {
        if (values.help) {
            console.log('collect.mjs [--from=YYYY-MM-DD] [--to=YYYY-MM-DD] [--workflow=all|cypress.yml]');
            console.log('[--refresh-days=7] [--max-requests=1000] [--output-dir=/path/to/workflow-metrics]');
            console.log('[--require-token] [--check-auth]');
            console.log(
                'По умолчанию: последние 3 года, манифесты и чанки v3 в .storybook/public/workflow-metrics/v3/.',
            );
            console.log(
                'Авторизация: GITHUB_TOKEN или GH_TOKEN. --check-auth только проверяет доступ и лимит, без изменения архивов.',
            );
            console.log(
                'Код 2: прогресс сохранён или сбор не начат из-за ограничения. Повторный запуск продолжит историю.',
            );
            return;
        }
        await collectMetrics(values);
    },
    { formatError: (error) => formatMessageDates(error.message) },
);

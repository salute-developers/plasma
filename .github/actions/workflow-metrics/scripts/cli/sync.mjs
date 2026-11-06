import { parseArgs } from 'node:util';

import { syncMetrics } from '../commands/sync.mjs';
import { runCli } from '../utils/cli.mjs';

await runCli(async () => {
    const { values } = parseArgs({
        options: {
            mode: { type: 'string' },
            'output-dir': { type: 'string' },
            'baseline-dir': { type: 'string' },
            'bootstrap-dir': { type: 'string' },
            help: { type: 'boolean' },
        },
    });
    if (values.help) {
        console.log('sync.mjs --mode=restore|publish|publish-existing --output-dir=/path --baseline-dir=/path');
        console.log('[--bootstrap-dir=/path] — по умолчанию архив v3 из репозитория. Требуется s3cmd.');
        return;
    }
    await syncMetrics(values);
});

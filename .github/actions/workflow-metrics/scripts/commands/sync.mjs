import { resolve } from 'node:path';

import { defaultArchiveDirectory } from '../shared/paths.mjs';
import { createS3Transport, publishExistingToS3, publishToS3, restoreFromS3 } from '../s3/index.mjs';

/** Own the S3 transport lifetime for restore, publication or initial upload. */
export async function syncMetrics(values) {
    let transport;
    try {
        if (
            !['restore', 'publish', 'publish-existing'].includes(values.mode) ||
            !values['output-dir'] ||
            !values['baseline-dir']
        ) {
            throw new Error('Задайте --mode=restore|publish|publish-existing, --output-dir и --baseline-dir.');
        }

        const options = {
            directory: resolve(values['output-dir']),
            baseline: resolve(values['baseline-dir']),
            bootstrap: values['bootstrap-dir'] ? resolve(values['bootstrap-dir']) : defaultArchiveDirectory,
        };

        if (new Set([options.directory, options.baseline, options.bootstrap]).size !== 3) {
            throw new Error('Каталоги архива, исходного снимка и bootstrap должны отличаться.');
        }

        transport = await createS3Transport();

        const operation = {
            restore: restoreFromS3,
            publish: publishToS3,
            'publish-existing': publishExistingToS3,
        }[values.mode];

        console.log(JSON.stringify(await operation({ ...options, transport }), null, 2));
    } finally {
        await transport?.close();
    }
}

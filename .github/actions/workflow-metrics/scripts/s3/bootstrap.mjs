// Validate and restore snapshots before any remote writes.
/* eslint-disable no-await-in-loop */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';

import { readArchive } from '../archive/read.mjs';

import { categories, manifestAt } from './manifest.mjs';
import { restoreFromS3 } from './restore.mjs';
import { publishToS3 } from './publish.mjs';

/** Seed S3 from the collected repository archive, without GitHub API or replacing a different remote snapshot. */
export async function publishExistingToS3(options) {
    const source = new Map();
    for (const [workflow, category] of categories) {
        const directory = join(options.bootstrap, 'v3', category);
        await readArchive(directory);
        source.set(category, manifestAt(await readFile(join(directory, 'manifest.json')), workflow));
    }
    await restoreFromS3(options);
    // Check every category before writing any remote objects. Existing remote data must not be rolled back.
    for (const [workflow, category] of categories) {
        const restored = manifestAt(await readFile(join(options.directory, 'v3', category, 'manifest.json')), workflow);
        if (!isDeepStrictEqual(source.get(category), restored)) {
            throw new Error(
                `В S3 уже есть другой снимок ${category}. Режим publish-existing не заменяет существующую историю; используйте collect для её продолжения.`,
            );
        }
    }
    return publishToS3(options);
}

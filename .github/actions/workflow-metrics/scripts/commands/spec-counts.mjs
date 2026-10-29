import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { parseHistory, workflows } from '../shared/model.mjs';
import { archiveDirectories } from '../shared/schema.mjs';
import { defaultArchiveDirectory, repositoryRoot } from '../shared/paths.mjs';
import { publishArchive, readArchive } from '../archive/index.mjs';
import { createSpecFileCounter, enrichSpecFiles } from '../specs/index.mjs';

/** Enrich an existing snapshot from local git and reject concurrent manifest changes. */
export async function countSpecFiles(values) {
    if (!Object.hasOwn(workflows, values.workflow)) {
        throw new Error('Неизвестный workflow.');
    }

    const cwd = repositoryRoot;

    const directory = values['output-dir'] ? resolve(values['output-dir']) : defaultArchiveDirectory;

    const path = resolve(directory, 'v3', archiveDirectories[values.workflow]);

    const manifestPath = resolve(path, 'manifest.json');

    const original = await readFile(manifestPath, 'utf8');

    const history = await readArchive(path);

    if (history.workflow !== values.workflow) {
        throw new Error('Workflow не совпадает с файлом архива.');
    }

    const next = parseHistory(await enrichSpecFiles(history, await createSpecFileCounter({ cwd, ref: values.ref })));

    const b2c = next.measurements.filter((value) => value.packageName === 'plasma-b2c');

    const known = b2c.filter((value) => value.specFiles);

    console.log(
        `b2c: ${known.length}/${b2c.length} jobs с числом spec-файлов, из них ${
            known.filter((value) => value.specFiles.basis === 'history').length
        } по приблизительной ревизии.`,
    );

    if (values['dry-run'] || JSON.stringify(next.measurements) === JSON.stringify(history.measurements)) {
        return;
    }

    if ((await readFile(manifestPath, 'utf8')) !== original) {
        throw new Error('Архив изменился во время подсчёта. Повторите после остановки сборщика.');
    }

    const changedMonths = [
        ...new Set(
            next.measurements
                .filter(
                    (row, index) =>
                        JSON.stringify(row.specFiles) !== JSON.stringify(history.measurements[index].specFiles),
                )
                .map((row) => row.createdAt.slice(0, 7)),
        ),
    ];

    await publishArchive(path, { ...next, updatedAt: new Date().toISOString() }, { changedMonths });
}

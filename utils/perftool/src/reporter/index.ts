import * as os from 'os';
import path from 'path';
import process from 'process';
import fsPromises from 'fs/promises';

import { StatsReport } from '../statistics';
import { debug, info } from '../utils/logger';
import { TestModule } from '../build/collect';
import { Config } from '../config';
import getCurrentVersion from '../utils/version';
import { id as staticTaskSubjectId } from '../stabilizers/staticTask';

export type ReportWithMeta = {
    version: string;
    jobs: number;
    retries: number;
    timestamp: number;
    duration: number;
    averageLoad: number[];
    freeMemory: number;
    staticTaskResult?: StatsReport[string];
    result: StatsReport;
};

let startTime: number;

export function measureStartingPoint() {
    startTime = performance.now();
}

export async function report(statsStream: AsyncGenerator<StatsReport, undefined>): Promise<void> {
    for await (const statsReport of statsStream) {
        info(JSON.stringify(statsReport, null, 4));
    }
}

function getSubjectIdToReadableNameMap(testModules: TestModule[]) {
    const cwd = process.cwd();
    return testModules.reduce((acc, { subjects, path: modulePath }) => {
        subjects.forEach(({ id, originalExportedName }) => {
            acc[id] = `${path.relative(cwd, path.resolve(modulePath))}#${originalExportedName}`;
        });

        return acc;
    }, {} as { [k: string]: string });
}

export async function generateReport(config: Config, data: StatsReport, testModules: TestModule[]) {
    debug('writing report');
    const subjectIdToReadableNameMap = getSubjectIdToReadableNameMap(testModules);

    const reportWithMeta: ReportWithMeta = {
        version: await getCurrentVersion(),
        jobs: config.jobs,
        retries: config.retries,
        timestamp: Date.now(),
        duration: Math.round(performance.now() - startTime),
        averageLoad: os.loadavg(),
        freeMemory: os.freemem(),
        result: Object.fromEntries(
            Object.entries(data)
                .filter(([k]) => k !== staticTaskSubjectId)
                .map(([k, v]) => [subjectIdToReadableNameMap[k], v]),
        ),
    };

    if (staticTaskSubjectId in data) {
        reportWithMeta.staticTaskResult = data[staticTaskSubjectId];
    }

    const contents = JSON.stringify(reportWithMeta, null, 2);
    const fileName = path.resolve(config.outputFilePath.replace('[time]', new Date().toISOString()));

    await fsPromises.mkdir(path.dirname(fileName), { recursive: true });
    await fsPromises.writeFile(fileName, contents, { encoding: 'utf-8' });

    info('Report is successfully written to', fileName);
}

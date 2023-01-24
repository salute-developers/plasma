import { Config } from '../config';

import { Task } from './measurement/types';
import { runTask, Subject } from './measurement/runner';
import { resolveTests } from './input';

type CreatePerfToolClientParams<T extends Task<any, any>[]> = {
    subjects: Subject[];
    tasks: T;
    config: Config;
};

// TODO debug log
export async function createPerfToolClient<T extends Task<any, any>[]>({
    subjects,
    tasks,
    config,
}: CreatePerfToolClientParams<T>) {
    const tests = await resolveTests({ tasks, subjects });
    const resultPromises = [];

    for (const { task, subject } of tests) {
        const resultPromise = runTask({ task, subject, config });

        resultPromises.push(resultPromise);
    }

    const results = await Promise.all(resultPromises);

    await window.finish(results);
}

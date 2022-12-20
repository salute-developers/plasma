import assert from 'assert';

import { Task } from './measurement/types';
import { Subject } from './measurement/runner';

type Test<T> = { subject: Subject; task: T };
type RawTest = { subjectId: string; taskId: string };

type ResolveTestsParams<T extends Task<any, any>[]> = {
    tasks: [...T];
    subjects: Subject[];
};

function getTests<T extends Task<any, any>[]>(
    rawTests: RawTest[],
    { tasks, subjects }: ResolveTestsParams<T>,
): Test<T[number]>[] {
    return rawTests.map(({ subjectId, taskId }) => {
        const subject = subjects.find(({ id }) => subjectId === id);
        const task = tasks.find(({ id }) => taskId === id);

        assert(subject && task);

        return { subject, task };
    });
}

export async function resolveTests<T extends Task<any, any>[]>(
    params: ResolveTestsParams<T>,
): Promise<Test<T[number]>[]> {
    /**
     * @see utils/window.d.ts
     */
    if (Array.isArray(window.tests)) {
        return getTests(window.tests, params);
    }

    return new Promise((resolve, reject) => {
        window.tests = {
            push: (...items: RawTest[]) => {
                try {
                    resolve(getTests(items, params));
                } catch (err) {
                    reject(err);
                }
            },
        };
    });
}

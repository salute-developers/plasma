import { Task } from '../client/measurement/types';
import { Config } from '../config';
import { TestModule } from '../build/collect';
import { debug } from '../utils/logger';

import { Test } from './executor';

export type IPlanner = {
    plan(): Generator<Test[]>;
};

function getTests<T extends Task<any, any>[]>(config: Config, tasks: T[number][], modules: TestModule[]): Test[] {
    const testGroups = tasks.map(({ id: taskId }) => {
        const suitableTestModules = modules.filter(({ path }) => {
            // TODO filter modules by task config rule (minimatch)
            config;
            taskId;
            path;
            return true;
        });

        return suitableTestModules.map((module) => module.subjects.map(({ id: subjectId }) => ({ taskId, subjectId })));
    });

    return testGroups.flat(2);
}

export default class Planner<T extends Task<any, any>[]> implements IPlanner {
    private readonly config: Config;

    private readonly tasks: T;

    private readonly testModules: TestModule[];

    constructor(config: Config, tasks: T, testModules: TestModule[]) {
        this.config = config;
        this.tasks = tasks;
        this.testModules = testModules;
    }

    *plan(): Generator<Test[]> {
        const idempotentTasks = this.tasks.filter(({ isIdempotent }) => isIdempotent);
        const nonIdempotentTasks = this.tasks.filter(({ isIdempotent }) => !isIdempotent);

        if (idempotentTasks.length) {
            debug('[planner]', 'running idempotent tasks');
            const tests = getTests(this.config, idempotentTasks, this.testModules);

            yield tests;
        }

        if (nonIdempotentTasks.length) {
            debug('[planner]', 'running non-idempotent (repetitive) tasks');
            const tests = getTests(this.config, nonIdempotentTasks, this.testModules);

            if (this.config.dryRunTimes) {
                debug('[planner]', 'dry-running', this.config.dryRunTimes, 'times');
            } else {
                debug('[planner]', 'dry-running is skipped');
            }
            for (const test of tests) {
                for (let i = 0; i < this.config.dryRunTimes; ++i) {
                    yield [{ ...test, dry: true }];
                }
            }

            debug('[planner]', 'running tests', this.config.retries, 'repetitions');
            for (const test of tests) {
                for (let i = 0; i < this.config.retries; ++i) {
                    yield [test];
                }
            }
        }
    }
}

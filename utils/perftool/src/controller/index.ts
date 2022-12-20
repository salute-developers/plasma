import { Config } from '../config';
import { Task } from '../client/measurement/types';
import { RunTaskResult } from '../client/measurement/runner';
import { TestModule } from '../build/collect';
import { info } from '../utils/logger';

import Executor from './executor';
import Planner from './planner';
import TestController from './controller';

type RunTestsParams<T extends Task<any, any>[]> = {
    config: Config;
    port: number;
    tasks: T;
    testModules: TestModule[];
};

export async function* runTests<T extends Task<any, any>[]>({
    config,
    port,
    tasks,
    testModules,
}: RunTestsParams<T>): AsyncGenerator<RunTaskResult<T[number]>[]> {
    info('Running performance tests...');

    const executor = await Executor.create<T>(config, port);
    const planner = new Planner(config, tasks, testModules);
    const controller = new TestController<T>(config, planner, executor);

    const results = controller.run();

    for await (const result of results) {
        yield result;
    }

    await executor.finalize();
}

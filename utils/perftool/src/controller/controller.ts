import assert from 'assert';

import { Config } from '../config';
import { Task } from '../client/measurement/types';
import { RunTaskResult } from '../client/measurement/runner';
import combineGenerators from '../utils/combineGenerators';
import { debug } from '../utils/logger';

import { IExecutor } from './executor';
import { IPlanner } from './planner';

export default class TestController<T extends Task<any, any>[]> {
    private readonly config: Config;

    private readonly planner: IPlanner;

    private readonly executor: IExecutor<T>;

    constructor(config: Config, planner: IPlanner, executor: IExecutor<T>) {
        this.config = config;
        this.executor = executor;
        this.planner = planner;
    }

    async *run(): AsyncGenerator<RunTaskResult<T[number]>[], undefined> {
        const { executor } = this;
        const schedule = this.planner.plan();

        const start = async function* start() {
            while (true) {
                const { done, value } = schedule.next();

                if (done) {
                    return;
                }

                assert(value);

                const result = await executor.execute(value);

                if (result instanceof Error) {
                    throw result;
                }

                if (value[0]?.type === 'dry') {
                    debug('[controller]', 'current run is dry, skipping');
                    continue;
                }

                yield result;
            }
        };

        const generators = [];

        debug('[controller]', 'starting with', this.config.jobs, 'jobs');
        for (let i = 0; i < this.config.jobs; ++i) {
            generators.push(start());
        }

        for await (const result of combineGenerators(generators)) {
            yield result;
        }

        return undefined;
    }
}

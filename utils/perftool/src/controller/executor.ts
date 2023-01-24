import puppeteer, { Browser } from 'puppeteer';
import assert from 'assert';

import { Config } from '../config';
import Deferred, { defer } from '../utils/deferred';
import { RunTaskResult } from '../client/measurement/runner';
import { Task } from '../client/measurement/types';
import { debug } from '../utils/logger';

import { createInsertionScriptContent } from './clientScript';

export type Test = { taskId: string; subjectId: string; type?: 'dry' };

export type IExecutor<T extends Task<any, any>[]> = {
    execute(tests: Test[]): Promise<RunTaskResult<T[number]>[] | Error>;
};

export default class Executor<T extends Task<any, any>[]> implements IExecutor<T> {
    private readonly config: Config;

    private readonly port: number;

    private readonly browserInstance: Browser;

    private workable = true;

    static async create<T extends Task<any, any>[]>(config: Config, port: number): Promise<Executor<T>> {
        debug('[executor]', 'launching browser...');

        const browserInstance = await puppeteer.launch({
            headless: true,
            args: ['--js-flags="--maglev=false --max_opt=0"'],
            ...config.puppeteerOptions,
        });
        debug('[executor]', 'launched browser successfully');

        return new Executor<T>(config, port, browserInstance);
    }

    private constructor(config: Config, port: number, browserInstance: Browser) {
        this.config = config;
        this.port = port;
        this.browserInstance = browserInstance;
    }

    async finalize() {
        if (!this.workable) {
            return;
        }

        debug('[executor]', 'exiting browser');

        this.workable = false;

        await this.browserInstance.close();
    }

    async execute(tests: Test[]): Promise<RunTaskResult<T[number]>[] | Error> {
        debug('[executor]', 'running tests', tests);
        assert(this.workable);

        const page = await (this.browserInstance as Browser).newPage();

        const results = new Deferred<RunTaskResult<T[number]>[]>();

        await page.goto(`http://localhost:${this.port}/`);
        await page.exposeFunction('finish', (taskResults: RunTaskResult<T[number]>[]) => {
            results.resolve(taskResults);
        });
        await page.addScriptTag({ content: createInsertionScriptContent(tests) });

        return Promise.race([
            results.promise,
            defer(this.config.runWaitTimeout).then(() => {
                return new Error(`timeout ${this.config.runWaitTimeout}ms reached waiting for run to end`);
            }),
        ]).finally(() => {
            return page.close();
        });
    }
}

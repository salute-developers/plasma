import { ComponentType } from 'react';

import { Config, getTaskConfig } from '../../config';
import BaseError from '../../utils/baseError';
import { defer } from '../../utils/deferred';

import { Task } from './types';

class TimeoutError extends BaseError {}

export type Subject = {
    id: string;
    Component: ComponentType;
};

type RunTaskParams<T extends Task<any, any>> = {
    subject: Subject;
    task: T;
    config: Config;
};

type SuccessResult<T extends Task<any, any>> = { result: PromiseFulfilledResult<ReturnType<T['run']>> };
type ErrorResult = { error: string };

export type RunTaskResult<T extends Task<any, any>> = {
    taskId: string;
    subjectId: string;
} & (SuccessResult<T> | ErrorResult);

function createContainer(): HTMLElement {
    const container = document.createElement('div');
    document.body.appendChild(container);

    return container;
}

export function runTask<T extends Task<any, any>>({
    task,
    subject,
    config: globalConfig,
}: RunTaskParams<T>): Promise<RunTaskResult<T>> {
    const meta = { taskId: task.id, subjectId: subject.id };
    const config = getTaskConfig(task, globalConfig);
    const container = createContainer();

    return Promise.race([
        task
            .run({ Subject: subject.Component, config, container })
            .then((result) => ({
                ...meta,
                result,
            }))
            .catch((error: Error) => ({
                ...meta,
                error: error.toString(),
            })),
        defer(globalConfig.taskWaitTimeout, () => ({ ...meta, error: new TimeoutError().toString() })),
    ]);
}

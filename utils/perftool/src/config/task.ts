import { Task } from '../client/measurement/types';
import nativeTasks from '../client/measurement';

import { Config } from './common';

type TaskConfig<T extends Task<any, any>> = Parameters<T['run']>[0]['config'];

export function getTaskConfig<T extends Task<any, any>>(task: T, config: Config): TaskConfig<T> {
    // TODO config deep merge
    return config.taskConfiguration[task.id] || task.defaultConfig;
}

export function getAllTasks(config: Config) {
    return [...config.tasks, ...nativeTasks].filter((task) => {
        const taskConfig = getTaskConfig(task, config);

        return taskConfig.enable === undefined ? true : taskConfig.enable;
    });
}

/* eslint-disable prettier/prettier */

import { getConfig, getAllTasks } from './config';
import { createPerfToolClient } from './client';
import { Subject } from './client/measurement/runner';

// <IMPORT_MARK>

const config = getConfig(
    // <CONFIG_ARGS_MARK>
);

const allTestSubjects: Subject[] = [
    // <TEST_SUBJECT_MARK>
];

const allTasks = getAllTasks(config);

createPerfToolClient({
    config,
    tasks: allTasks,
    subjects: allTestSubjects,
});

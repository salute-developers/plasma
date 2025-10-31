import { deepCopy } from 'src/utils';

type NestedTreePath = {
    [key: string]: {} | NestedTreePath;
};

export type TreePathState = NestedTreePath;

export type TreePathAction =
    | { type: 'reset' }
    | { type: 'toggled_level'; value: string[] }
    | { type: 'open_level'; value: string[] }
    | { type: 'close_level'; value: string[] };

// Утилита для поиска ключа в объекте по пути.
export const keyExists = (obj: NestedTreePath, path: string[]) => {
    if (typeof obj !== 'object' || obj === null || !Array.isArray(path)) {
        return false;
    }

    let current = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (current === null || typeof current !== 'object' || !(key in current)) {
            return false;
        }

        current = current[key];
    }

    return true;
};

function createObjectAtPath(obj: NestedTreePath, path: string[]) {
    if (typeof obj !== 'object' || obj === null) {
        return;
    }

    let current = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (i === path.length - 1) {
            current[key] = {};
            break;
        }

        if (current[key] === undefined || current[key] === null) {
            current[key] = {};
        }

        current = current[key];
    }

    return obj;
}

function removeObjectAtPath(obj: NestedTreePath, path: string[]) {
    if (path.length === 0) {
        return obj;
    }

    let current = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (current === null || typeof current !== 'object' || !(key in current)) {
            return obj;
        }

        if (i === path.length - 1) {
            delete current[key];
            break;
        }

        current = current[key];
    }

    return obj;
}

export function treePathReducer(state: TreePathState, action: TreePathAction): TreePathState {
    switch (action.type) {
        case 'reset': {
            return {};
        }

        case 'toggled_level': {
            const stateCopy = deepCopy(state);

            const isTargetLevelOpened = keyExists(stateCopy, action.value);

            if (isTargetLevelOpened) {
                // нужно закрыть текущий уровень
                removeObjectAtPath(stateCopy, action.value);
            } else {
                // нужно открыть требуемый уровень
                createObjectAtPath(stateCopy, action.value);
            }

            return stateCopy;
        }

        case 'open_level': {
            const stateCopy = deepCopy(state);

            createObjectAtPath(stateCopy, action.value);

            return stateCopy;
        }

        case 'close_level': {
            const stateCopy = deepCopy(state);

            removeObjectAtPath(stateCopy, action.value);

            return stateCopy;
        }

        default: {
            return state;
        }
    }
}

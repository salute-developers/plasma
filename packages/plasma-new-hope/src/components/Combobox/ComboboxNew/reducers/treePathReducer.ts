import { deepCopy } from 'src/utils';

import { ItemOption } from '../Combobox.types';

type NestedTreePath = {
    [key: string]: {} | NestedTreePath;
};

export type TreePathState = NestedTreePath;

export type TreePathAction =
    | { type: 'reset' }
    | { type: 'toggled_level'; value: string[] }
    | { type: 'expand_all'; value: ItemOption[] };

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

// Утилита, которая получается на вход список отфильтрованных элементов
// и возвращает объект путей раскрытых элементов дерева.
function generateNestedTreePathFromFilteredItems(items: ItemOption[]): TreePathState {
    const result = {};

    const buildTree = (currentItems: ItemOption[], currentLevel: TreePathState) => {
        if (!currentItems || !Array.isArray(currentItems)) return;

        for (const item of currentItems) {
            if (item?.value) {
                // Создаем новый уровень для текущего значения
                currentLevel[item?.value] = {};

                // Рекурсивно обрабатываем дочерние элементы
                if (item?.items && item?.items.length > 0) {
                    buildTree(item?.items, currentLevel[item?.value]);
                }
            }
        }
    };

    buildTree(items, result);

    return result;
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

        case 'expand_all': {
            const filteredItem = action.value;

            return generateNestedTreePathFromFilteredItems(filteredItem);
        }

        default: {
            return state;
        }
    }
}

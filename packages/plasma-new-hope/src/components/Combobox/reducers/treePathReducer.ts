import { deepCopy } from 'src/utils';

import { ItemOption } from '../Combobox.types';

type NestedTreePath = {
    [key: string]: {} | NestedTreePath;
};

export type TreePathState = NestedTreePath;

export type TreePathAction =
    | { type: 'reset' }
    | { type: 'toggled_level'; value: string[] }
    | {
          type: 'expand_by_key';
          value: {
              filteredItems: ItemOption[];
              filterCb: (item: ItemOption, textValue: string) => boolean;
              textValue: string;
          };
      }
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

/**
 * Утилита, которая получает на вход список отфильтрованных элементов и
 * callback, с помощью которого эти элементы были отфильтрованы.
 * Возвращает TreePathState, т.е. список раскрытых групп.
 * По умолчанию группа не раскрывается, если в ней не было найдено ни одного элемента.
 * Но т.к. поиск может осуществляться как по элементам, так и по группам,
 * то может возникнуть ситуация, когда будет найдена как группа с определенным названием,
 * так и элемент с таким же названием внутри нее, и в таком случае мы должны частично раскрыть группу,
 * вплоть то найденного элемента.
 * Если найдена только группа, без элементов внутри нее, то саму эту группу
 * раскрывать не нужно. Нужно раскрыть только родителя этой группы.
 */
function generateNestedTreePathFromFilteredItems(
    filteredItems: ItemOption[],
    filterCb: (item: ItemOption, value: string) => boolean,
    textValue: string,
): TreePathState {
    const result: TreePathState = {};

    function traverse(items: ItemOption[], currentPath: TreePathState): boolean {
        let hasFoundItems = false;

        for (const item of items) {
            const isFound = filterCb(item, textValue);

            if (item.items && item.items.length > 0) {
                // Обрабатываем детей
                const childPath: TreePathState = {};
                const foundInChildren = traverse(item.items, childPath);

                if (foundInChildren) {
                    // Если в детях найдены элементы - добавляем путь
                    currentPath[item.value] = childPath;
                    hasFoundItems = true;
                }

                // Если сама группа найдена, но в детях ничего нет - НЕ добавляем путь
                // Просто отмечаем что что-то найдено на этом уровне
                if (isFound && !foundInChildren) {
                    hasFoundItems = true;
                }
            } else if (isFound) {
                // Для конечного элемента не добавляем путь в currentPath,
                // но отмечаем что на этом уровне есть найденные элементы
                hasFoundItems = true;
            }
        }

        return hasFoundItems;
    }

    traverse(filteredItems, result);

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

        case 'expand_by_key': {
            const { filteredItems, filterCb, textValue } = action.value;

            return generateNestedTreePathFromFilteredItems(filteredItems, filterCb, textValue);
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

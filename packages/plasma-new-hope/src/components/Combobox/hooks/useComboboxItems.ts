import { useLayoutEffect, useMemo, useRef, useState } from 'react';

import type { ComboboxProps, ItemOptionTransformed } from '../Combobox.types';
import { filterItems } from '../utils';

import { useNavigationMaps } from './usePathMaps';

type Props = Pick<ComboboxProps, 'filter' | 'sortItems'> & {
    items: ItemOptionTransformed[];
    textValue: string;
    currentLabel: string;
    isListOpened: boolean;
};

/**
 * Сортировка через `sortItems` применяется только при открытии списка.
 * Снимок хранится в state и не обновляется при выборе, пока дропдаун открыт —
 * иначе вложенные меню «прыгают». Фильтрация по тексту работает по снимку.
 */
export const useComboboxItems = ({ items, textValue, currentLabel, filter, sortItems, isListOpened }: Props) => {
    const [openedSortBase, setOpenedSortBase] = useState<ItemOptionTransformed[] | null>(null);
    const wasOpenedRef = useRef(false);
    const sortItemsRef = useRef(sortItems);
    const itemsRef = useRef(items);
    const textValueRef = useRef(textValue);
    const currentLabelRef = useRef(currentLabel);
    const filterRef = useRef(filter);

    sortItemsRef.current = sortItems;
    itemsRef.current = items;
    textValueRef.current = textValue;
    currentLabelRef.current = currentLabel;
    filterRef.current = filter;

    useLayoutEffect(() => {
        const wasOpened = wasOpenedRef.current;

        if (isListOpened && !wasOpened) {
            const currentSortItems = sortItemsRef.current;

            if (currentSortItems) {
                const filtered = filterItems(
                    itemsRef.current,
                    textValueRef.current,
                    currentLabelRef.current,
                    filterRef.current,
                );
                setOpenedSortBase(currentSortItems(filtered, textValueRef.current));
            } else {
                setOpenedSortBase(null);
            }
        }

        if (!isListOpened && wasOpened) {
            setOpenedSortBase(null);
        }

        wasOpenedRef.current = isListOpened;
    }, [isListOpened]);

    const filteredItems = useMemo(() => {
        if (isListOpened && openedSortBase) {
            return filterItems(openedSortBase, textValue, currentLabel, filter);
        }

        return filterItems(items, textValue, currentLabel, filter);
    }, [currentLabel, filter, isListOpened, items, openedSortBase, textValue]);

    const [filteredPathMap, filteredFocusedToValueMap, filteredValueToPathMap] = useNavigationMaps(filteredItems);

    return {
        filteredItems,
        filteredMaps: {
            pathMap: filteredPathMap,
            focusedToValueMap: filteredFocusedToValueMap,
            valueToPathMap: filteredValueToPathMap,
        },
    };
};

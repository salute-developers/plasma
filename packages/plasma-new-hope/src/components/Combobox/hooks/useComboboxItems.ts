import { useMemo } from 'react';

import type { ComboboxProps, ItemOptionTransformed } from '../Combobox.types';
import { filterItems } from '../utils';

import { useNavigationMaps } from './usePathMaps';

type Props = Pick<ComboboxProps, 'filter'> & {
    items: ItemOptionTransformed[];
    textValue: string;
    currentLabel: string;
    matchSelectedLabel?: boolean;
};

export const useComboboxItems = ({ items, textValue, currentLabel, filter, matchSelectedLabel = true }: Props) => {
    const filteredItems = useMemo(() => filterItems(items, textValue, currentLabel, filter, matchSelectedLabel), [
        currentLabel,
        filter,
        items,
        matchSelectedLabel,
        textValue,
    ]);

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

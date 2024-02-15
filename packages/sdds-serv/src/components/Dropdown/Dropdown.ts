import {
    dropdownConfig,
    dropdownItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const mergedItemConfig = mergeConfig(dropdownItemConfig);

/**
 * Компонент элемента Dropdown.
 */
export const DropdownItem = component(mergedItemConfig);

/**
 * Компонент Dropdown.
 */
export const Dropdown = component(mergedConfig);

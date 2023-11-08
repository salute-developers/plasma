import {
    dropdownConfig,
    dropdownDividerConfig,
    dropdownFooterConfig,
    dropdownGroupConfig,
    dropdownHeaderConfig,
    dropdownItemConfig,
} from '../../../../components/Dropdown';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
export const Dropdown = component(mergedConfig);

const mergedDividerConfig = mergeConfig(dropdownDividerConfig);
export const DropdownDivider = component(mergedDividerConfig);

const mergedFooterConfig = mergeConfig(dropdownFooterConfig);
export const DropdownFooter = component(mergedFooterConfig);

const mergedGroupConfig = mergeConfig(dropdownGroupConfig);
export const DropdownGroup = component(mergedGroupConfig);

const mergedHeaderConfig = mergeConfig(dropdownHeaderConfig);
export const DropdownHeader = component(mergedHeaderConfig);

const mergedItemConfig = mergeConfig(dropdownItemConfig);
export const DropdownItem = component(mergedItemConfig);

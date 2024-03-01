import { dropdownConfig, dropdownItemConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Dropdown.config';
var mergedConfig = /*#__PURE__*/mergeConfig(dropdownConfig, config);
var mergedItemConfig = /*#__PURE__*/mergeConfig(dropdownItemConfig);

/**
 * Компонент элемента Dropdown.
 */
export var DropdownItem = /*#__PURE__*/component(mergedItemConfig);

/**
 * Компонент Dropdown.
 */
export var Dropdown = /*#__PURE__*/component(mergedConfig);
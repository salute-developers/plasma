import { dropdownGroupRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './ComboboxGroup.styles';

export const comboboxGroupRoot = dropdownGroupRoot;

export const comboboxGroupConfig = {
    name: 'ComboboxGroup',
    tag: 'div',
    layout: comboboxGroupRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};

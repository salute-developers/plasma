import { dropdownItemRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './ComboboxItem.styles';

export const comboboxItemRoot = dropdownItemRoot;

export const comboboxItemConfig = {
    name: 'ComboboxItem',
    tag: 'div',
    layout: comboboxItemRoot,
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

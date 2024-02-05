import { dropdownDividerRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './ComboboxDivider.styles';

export const comboboxDividerRoot = dropdownDividerRoot;

export const comboboxDividerConfig = {
    name: 'ComboboxDivider',
    tag: 'div',
    layout: comboboxDividerRoot,
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

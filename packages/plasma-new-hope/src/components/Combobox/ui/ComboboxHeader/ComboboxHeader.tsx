import { dropdownHeaderRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './ComboboxHeader.styles';

export const comboboxHeaderRoot = dropdownHeaderRoot;

export const comboboxHeaderConfig = {
    name: 'ComboboxHeader',
    tag: 'div',
    layout: comboboxHeaderRoot,
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

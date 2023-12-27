import { dropdownItemRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './SelectItem.styles';

export const selectItemRoot = dropdownItemRoot;

export const selectItemConfig = {
    name: 'SelectItem',
    tag: 'div',
    layout: selectItemRoot,
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

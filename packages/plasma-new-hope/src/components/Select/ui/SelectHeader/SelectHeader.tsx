import { dropdownHeaderRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './SelectHeader.styles';

export const selectHeaderRoot = dropdownHeaderRoot;

export const selectHeaderConfig = {
    name: 'SelectHeader',
    tag: 'div',
    layout: selectHeaderRoot,
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

import { dropdownGroupRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './SelectGroup.styles';

export const selectGroupRoot = dropdownGroupRoot;

export const selectGroupConfig = {
    name: 'SelectGroup',
    tag: 'div',
    layout: selectGroupRoot,
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

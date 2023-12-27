import { dropdownDividerRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './SelectDivider.styles';

export const selectDividerRoot = dropdownDividerRoot;

export const selectDividerConfig = {
    name: 'SelectDivider',
    tag: 'div',
    layout: selectDividerRoot,
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

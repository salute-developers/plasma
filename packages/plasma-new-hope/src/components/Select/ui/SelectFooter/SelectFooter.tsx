import { dropdownFooterRoot } from '../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './SelectFooter.styles';

export const selectFooterRoot = dropdownFooterRoot;

export const selectFooterConfig = {
    name: 'SelectFooter',
    tag: 'div',
    layout: selectFooterRoot,
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

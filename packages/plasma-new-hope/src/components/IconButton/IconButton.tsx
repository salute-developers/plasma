import { buttonRoot } from '../Button';
import { base as viewCSS } from '../Button/variations/_view/base';
import { base as sizeCSS } from '../Button/variations/_size/base';
import { base as disabledCSS } from '../Button/variations/_disabled/base';
import { base as focusedCSS } from '../Button/variations/_focused/base';
import { base as blurredCSS } from '../Button/variations/_blurred/base';
import { base as stretchingCSS } from '../Button/variations/_stretching/base';

import { base } from './IconButton.styles';

export const iconButtonRoot = buttonRoot;

export const iconButtonConfig = {
    name: 'IconButton',
    tag: 'button',
    layout: iconButtonRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        focused: {
            css: focusedCSS,
        },
        blurred: {
            css: blurredCSS,
        },
        stretching: {
            css: stretchingCSS,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
        stretching: 'fixed',
    },
};

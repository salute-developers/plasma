import { horizontalTabItemRoot } from '../../horizontal/HorizontalTabItem/HorizontalTabItem';
import { base as sizeCSS } from '../../horizontal/HorizontalTabItem/variations/_size/base';
import { base } from '../../horizontal/HorizontalTabItem/HorizontalTabItem.styles';
import { base as viewCSS } from '../../horizontal/HorizontalTabItem/variations/_view/base';
import { base as disabledCSS } from '../../horizontal/HorizontalTabItem/variations/_disabled/base';

export const headerTabItemRoot = horizontalTabItemRoot;

export const headerTabItemConfig = {
    name: 'HeaderTabItem',
    tag: 'button',
    layout: headerTabItemRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'divider',
        size: 'h5',
    },
};

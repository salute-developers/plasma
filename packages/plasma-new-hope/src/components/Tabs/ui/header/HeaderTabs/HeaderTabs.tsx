import { horizontalTabsRoot } from '../../horizontal/HorizontalTabs/HorizontalTabs';
import { base as sizeCSS } from '../../horizontal/HorizontalTabs/variations/_size/base';
import { base } from '../../horizontal/HorizontalTabs/HorizontalTabs.styles';
import { base as viewCSS } from '../../horizontal/HorizontalTabs/variations/_view/base';
import { base as disabledCSS } from '../../horizontal/HorizontalTabs/variations/_disabled/base';

export const headerTabsRoot = horizontalTabsRoot;

export const headerTabsConfig = {
    name: 'HeaderTabs',
    tag: 'div',
    layout: horizontalTabsRoot,
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

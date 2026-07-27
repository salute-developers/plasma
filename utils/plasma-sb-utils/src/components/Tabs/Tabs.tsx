import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createHeaderStory } from './stories';
import { headerClips, splitSizes } from './fixtures';

type CreateTabsStoriesProps = {
    component: any;
    tabItemComponent: any;
    iconTabItemComponent?: any;
    dropdownComponent: any;
    counterComponent?: any;
    componentConfig: { horizontal: any; vertical: any };
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getTabsStories = (config: CreateTabsStoriesProps) => {
    const {
        component,
        tabItemComponent,
        iconTabItemComponent,
        dropdownComponent,
        counterComponent,
        componentConfig,
        ...rest
    } = config;

    const meta = createMeta({ component, componentConfig, ...rest });

    const DefaultStoryComponent = createDefaultStory({
        Tabs: component,
        TabItem: tabItemComponent,
        IconTabItem: iconTabItemComponent,
        Dropdown: dropdownComponent,
        CounterComponent: counterComponent,
    });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const { headerSizes } = splitSizes(getConfigVariations(componentConfig.horizontal).sizes);

    if (headerSizes.length === 0) {
        return { meta, Default };
    }

    const HeaderStoryComponent = createHeaderStory({ Tabs: component, TabItem: tabItemComponent });

    const HeaderTabs = {
        args: {
            size: headerSizes.includes('h5') ? 'h5' : headerSizes[0],
            disabled: false,
            hasAction: false,
            helperText: '',
            itemQuantity: 4,
            width: '12rem',
            maxItemWidth: '',
        },
        argTypes: {
            clip: {
                options: headerClips,
                control: { type: 'select' },
            },
            width: {
                control: { type: 'text' },
                if: { arg: 'clip', eq: 'scroll' },
            },
            stretch: {
                table: { disable: true },
            },
            contentLeft: {
                table: { disable: true },
            },
            contentRight: {
                table: { disable: true },
            },
            hasDivider: {
                table: { disable: true },
            },
            size: {
                options: headerSizes,
                control: { type: 'select' },
            },
        },
        render: (args: any) => <HeaderStoryComponent {...args} />,
    };

    return { meta, Default, HeaderTabs };
};

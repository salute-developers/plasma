import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { tabsConfig } from '../../../../components/Tabs';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig, WithTheme } from '../../../_helpers';

import { config } from './Tabs.config';
import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

export default {
    title: 'sds_engineer/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(tabsConfig, config)),
    },
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (props) => {
    const { itemsNumber, label, disabled, stretch } = props;
    const items = Array(itemsNumber).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs stretch={stretch} disabled={disabled}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    active={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? i : -1}
                    disabled={disabled}
                >
                    {label}
                </TabItem>
            ))}
        </Tabs>
    );
};

Default.args = {
    itemsNumber: 4,
    disabled: false,
    stretch: false,
    label: 'Label',
};

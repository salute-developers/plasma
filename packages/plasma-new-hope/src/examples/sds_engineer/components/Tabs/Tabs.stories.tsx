import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { tabsConfig } from '../../../../components/Tabs';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig, WithTheme } from '../../../_helpers';

import { config } from './Tabs.config';
import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const meta: Meta<typeof Tabs> = {
    title: 'sds_engineer/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(tabsConfig, config)),
    },
};

export default meta;

const StoryDefault = (props: ComponentProps<typeof Tabs>) => {
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

export const Default: StoryObj<ComponentProps<typeof Tabs>> = {
    args: {
        itemsNumber: 4,
        disabled: false,
        stretch: false,
        label: 'Label',
    },
    render: (args) => <StoryDefault {...args} />,
};

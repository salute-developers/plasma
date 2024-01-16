import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { tabsConfig } from '../../../../components/Tabs';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig, WithTheme } from '../../../_helpers';
import { IconMic } from '../../../../components/_Icon';

import { config } from './Tabs.config';
import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const tabItemViews = ['clear', 'default', 'divider', 'secondary'];

type CustomStoryTabsProps = {
    tabItemView: string;
    itemsNumber?: number;
    showDivider: boolean;
    label?: string;
    showLeftContent: boolean;
    showRightContent: boolean;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;

const meta: Meta<StoryTabsProps> = {
    title: 'plasma_b2c/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(tabsConfig, config)),
        tabItemView: {
            options: tabItemViews,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryTabsProps) => {
    const {
        itemsNumber,
        label,
        showDivider,
        view,
        disabled,
        stretch,
        pilled,
        tabItemView,
        filledBackground,
        size,
        showLeftContent,
        showRightContent,
    } = props;
    const items = Array(itemsNumber).fill(0);
    const secondItems = Array(10).fill(0);
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);

    return (
        <>
            <h3>Tabs with auto width</h3>
            <Tabs
                view={view}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                showDivider={showDivider}
                filledBackground={filledBackground}
                size={size}
            >
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        active={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        leftContent={showLeftContent && <IconMic size="xs" color="inherit" />}
                        rightContent={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>

            <h3>Tabs with fixed width</h3>
            <Tabs
                view={view}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                showDivider={showDivider}
                filledBackground={filledBackground}
                size={size}
                style={{ width: '28.5rem' }}
            >
                {secondItems.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        active={i === secondIndex}
                        onClick={() => !disabled && setSecondIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        leftContent={showLeftContent && <IconMic size="xs" color="inherit" />}
                        rightContent={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>
        </>
    );
};

export const Default: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        itemsNumber: 4,
        tabItemView: 'clear',
        disabled: false,
        stretch: false,
        pilled: false,
        filledBackground: false,
        view: 'clear',
        label: 'Label',
        showDivider: false,
        showLeftContent: false,
        showRightContent: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

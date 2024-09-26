import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconMic } from '../../../../components/_Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { Counter } from '../Counter/Counter';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const clips = ['none', 'scroll', 'showAll'];
const sizes = ['xs', 's', 'm', 'l'] as const;
const headerSizes = ['h5', 'h4', 'h3', 'h2', 'h1'] as const;

type Size = typeof sizes[number];
type HeaderSize = typeof headerSizes[number];

type CustomStoryTabsProps = {
    itemQuantity: number;
    hasDivider: boolean;
    contentLeft: string;
    contentRight: string;
    stretch: boolean;
    helperText: string;
};

const contentLeftOptions = ['none', 'icon'];
const contentRightOptions = ['none', 'counter', 'icon'];

const getContentLeft = (contentLeftOption: string, size: Size) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    return contentLeftOption === 'icon' ? <IconMic size={iconSize} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string, size: Size) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    const counterSize = size === 'xs' ? 'xxs' : 'xs';

    switch (contentRightOption) {
        case 'icon':
            return <IconMic size={iconSize} color="inherit" />;
        case 'counter':
            return <Counter size={counterSize} count={1} view="positive" />;
        default:
            return undefined;
    }
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;

const meta: Meta<StoryTabsProps> = {
    title: 'plasma_b2c/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...disableProps([
            'orientation',
            'tabItemContentLeft',
            'pilled',
            'animated',
            'view',
            'as',
            'forwardedAs',
            'outsideScroll',
            'index',
        ]),
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
            if: { arg: 'helperText', eq: '' },
        },
    },
};

export default meta;

const StoryHorizontalDefault = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        stretch,
        helperText,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs view={hasDivider ? 'divider' : 'clear'} stretch={stretch} disabled={disabled} size={size}>
            {items.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryHorizontalScroll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        helperText,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs
            clip={clip}
            view={hasDivider ? 'divider' : 'clear'}
            disabled={disabled}
            size={size}
            style={{ width: '15rem' }}
        >
            {items.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryHorizontalShowAll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        helperText,
    } = props;
    const maxItemQuantity = 3;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    const visibleItems = items.slice(0, maxItemQuantity);
    const otherItems = items.slice(maxItemQuantity);

    const dropdownItems = otherItems.map((_, i) => {
        const itemIndex = maxItemQuantity + i;

        return {
            label: `Label${itemIndex + 1}`,
            value: itemIndex,
        };
    });

    return (
        <Tabs clip={clip} view={hasDivider ? 'divider' : 'clear'} disabled={disabled} size={size}>
            {visibleItems.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
            {dropdownItems.length > 0 && (
                <div style={{ marginLeft: '1.75rem' }}>
                    <Dropdown
                        size={size as Size}
                        items={dropdownItems}
                        onItemSelect={(item) => setIndex(item.value as number)}
                    >
                        <TabItem
                            key="item:ShowAll"
                            view="divider"
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            size={size as Size}
                        >
                            ShowAll
                        </TabItem>
                    </Dropdown>
                </div>
            )}
        </Tabs>
    );
};

export const HorizontalTabs: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        disabled: false,
        hasDivider: true,
        helperText: '',
        itemQuantity: 8,
    },
    argTypes: {
        contentLeft: {
            options: contentLeftOptions,
            control: {
                type: 'select',
            },
        },
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
        },
        clip: {
            options: clips,
            control: {
                type: 'select',
            },
            if: { arg: 'stretch', truthy: false },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => {
        switch (args.clip) {
            case 'scroll':
                return <StoryHorizontalScroll {...args} />;
            case 'showAll':
                return <StoryHorizontalShowAll {...args} />;
            default:
                return <StoryHorizontalDefault {...args} />;
        }
    },
};

const StoryVerticalDefault = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        helperText,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs orientation="vertical" hasDivider={hasDivider} size={size as Size} disabled={disabled}>
            {items.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            orientation="vertical"
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        orientation="vertical"
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryVerticalScroll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        helperText,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs
            orientation="vertical"
            size={size as Size}
            disabled={disabled}
            clip={clip}
            style={{ height: '10rem' }}
            hasDivider={hasDivider}
        >
            {items.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            orientation="vertical"
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        orientation="vertical"
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryVerticalShowAll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        helperText,
    } = props;
    const maxItemQuantity = 3;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    const visibleItems = items.slice(0, maxItemQuantity);
    const otherItems = items.slice(maxItemQuantity);

    const dropdownItems = otherItems.map((_, i) => {
        const itemIndex = maxItemQuantity + i;

        return {
            label: `Label${itemIndex + 1}`,
            value: itemIndex,
        };
    });

    return (
        <Tabs clip={clip} orientation="vertical" size={size as Size} disabled={disabled} hasDivider={hasDivider}>
            {visibleItems.map((_, i) => {
                if (helperText !== '') {
                    return (
                        <TabItem
                            orientation="vertical"
                            key={`item:${i}`}
                            view="divider"
                            selected={i === index}
                            onClick={() => !disabled && setIndex(i)}
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                        >
                            {`Label${i + 1}`}
                        </TabItem>
                    );
                }

                return (
                    <TabItem
                        orientation="vertical"
                        key={`item:${i}`}
                        view="divider"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                    >
                        {`Label${i + 1}`}
                    </TabItem>
                );
            })}
            {dropdownItems.length > 0 && (
                <Dropdown
                    size={size as Size}
                    items={dropdownItems}
                    onItemSelect={(item) => setIndex(item.value as number)}
                    placement="right"
                >
                    <TabItem
                        orientation="vertical"
                        key="item:ShowAll"
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        size={size as Size}
                    >
                        ShowAll
                    </TabItem>
                </Dropdown>
            )}
        </Tabs>
    );
};

export const VerticalTabs: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        disabled: false,
        hasDivider: true,
        itemQuantity: 8,
        orientation: 'vertical',
        helperText: '',
    },
    argTypes: {
        contentLeft: {
            options: contentLeftOptions,
            control: {
                type: 'select',
            },
        },
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        clip: {
            options: clips,
            control: {
                type: 'select',
            },
            if: { arg: 'stretch', truthy: false },
        },
        stretch: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => {
        switch (args.clip) {
            case 'scroll':
                return <StoryVerticalScroll {...args} />;
            case 'showAll':
                return <StoryVerticalShowAll {...args} />;
            default:
                return <StoryVerticalDefault {...args} />;
        }
    },
};

const StoryHeaderTabs = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
        stretch,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs view={hasDivider ? 'divider' : 'clear'} disabled={disabled} size={size} stretch={stretch}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="divider"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    contentLeft={getContentLeft(contentLeftOption, size as Size)}
                    contentRight={getContentRight(contentRightOption, size as Size)}
                    size={size as HeaderSize}
                >
                    {`Label${i + 1}`}
                </TabItem>
            ))}
        </Tabs>
    );
};

export const HeaderTabs: StoryObj<StoryTabsProps> = {
    args: {
        size: 'h5',
        disabled: false,
        hasDivider: true,
        itemQuantity: 4,
    },
    argTypes: {
        size: {
            options: headerSizes,
            control: {
                type: 'select',
            },
        },
        contentLeft: {
            options: contentLeftOptions,
            control: {
                type: 'select',
            },
        },
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
        },
        clip: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => <StoryHeaderTabs {...args} />,
};

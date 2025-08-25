import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconClose, IconMic } from '../../../components/_Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { Counter } from '../Counter/Counter';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const clips = ['none', 'scroll', 'showAll'];
const headerClips = ['none', 'scroll'];
const sizes = ['xs', 's', 'm', 'l'] as const;
const headerSizes = ['h5', 'h4', 'h3', 'h2', 'h1'] as const;

type Size = typeof sizes[number];
type HeaderSize = typeof headerSizes[number];

type CustomStoryTabsProps = {
    itemQuantity: number;
    contentLeft: string;
    contentRight: string;
    hasAction: boolean;
    stretch: boolean;
    helperText: string;
    maxItemWidth: string;
};

const contentLeftOptions = ['none', 'icon'];
const contentRightOptions = ['none', 'counter', 'icon'];
const labels = ['Label', 'Middle label', 'Very long label'];

const getContentLeft = (contentLeftOption: string, size: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    return contentLeftOption === 'icon' ? <IconMic size={iconSize} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string, size: string) => {
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

const getAction = (hasAction: boolean, size: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    const sizeCustomValue = () => {
        switch (size) {
            case 'h1':
                return '3.5rem';
            case 'h2':
                return '2.25rem';
            case 'h3':
                return '1.875rem';
            case 'h4':
                return '1.625rem';
            default:
                undefined;
        }
    };

    return hasAction ? <IconClose size={iconSize} sizeCustomValue={sizeCustomValue()} color="inherit" /> : undefined;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;
type HorizontalStoryTabsProps = StoryTabsProps & { width: string };
type VerticalStoryTabsProps = StoryTabsProps & { height: string };

const meta: Meta<StoryTabsProps> = {
    title: 'Navigation/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        contentRight: {
            options: contentRightOptions,
            control: {
                type: 'select',
            },
            if: { arg: 'helperText', eq: '' },
        },
        maxItemWidth: {
            control: {
                type: 'text',
            },
            if: { arg: 'stretch', truthy: false },
        },
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
    },
};

export default meta;

const StoryHorizontalDefault = (props: HorizontalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        stretch,
        maxItemWidth,
        helperText,
        clip,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs clip={clip} view="divider" hasDivider={hasDivider} stretch={stretch} disabled={disabled} size={size}>
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryHorizontalScroll = (props: HorizontalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        helperText,
        width,
        maxItemWidth,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(5);

    return (
        <Tabs clip={clip} view="divider" hasDivider={hasDivider} disabled={disabled} size={size} style={{ width }}>
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {/* {`${labels[i % labels.length]} ${i + 1}`} */}
                        {`Label ${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryHorizontalShowAll = (props: HorizontalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        helperText,
        maxItemWidth,
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
        <Tabs clip={clip} view="divider" hasDivider={hasDivider} disabled={disabled} size={size}>
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
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
                            maxItemWidth="auto"
                        >
                            ShowAll
                        </TabItem>
                    </Dropdown>
                </div>
            )}
        </Tabs>
    );
};

export const HorizontalTabs: StoryObj<HorizontalStoryTabsProps> = {
    args: {
        size: 'xs',
        disabled: false,
        hasDivider: true,
        hasAction: false,
        helperText: '',
        itemQuantity: 6,
        stretch: false,
        width: '15rem',
        maxItemWidth: '',
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
        width: {
            control: {
                type: 'text',
            },
            if: { arg: 'clip', eq: 'scroll' },
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

const StoryVerticalDefault = (props: VerticalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        helperText,
        maxItemWidth,
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryVerticalScroll = (props: VerticalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        helperText,
        height,
        maxItemWidth,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs
            orientation="vertical"
            size={size as Size}
            disabled={disabled}
            clip={clip}
            hasDivider={hasDivider}
            style={{ height }}
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
                    </TabItem>
                );
            })}
        </Tabs>
    );
};

const StoryVerticalShowAll = (props: VerticalStoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasAction,
        hasDivider,
        helperText,
        maxItemWidth,
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
                            actionContent={getAction(hasAction, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                        >
                            {`${labels[i % labels.length]} ${i + 1}`}
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
                        actionContent={getAction(hasAction, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
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
                        maxItemWidth="auto"
                    >
                        ShowAll
                    </TabItem>
                </Dropdown>
            )}
        </Tabs>
    );
};

export const VerticalTabs: StoryObj<VerticalStoryTabsProps> = {
    args: {
        size: 'xs',
        disabled: false,
        hasDivider: true,
        hasAction: false,
        itemQuantity: 6,
        orientation: 'vertical',
        helperText: '',
        height: '10rem',
        maxItemWidth: '',
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
        height: {
            control: {
                type: 'text',
            },
            if: { arg: 'clip', eq: 'scroll' },
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

const StoryHeaderDefault = (props: HorizontalStoryTabsProps) => {
    const { disabled, itemQuantity, size, helperText, maxItemWidth, hasAction } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs view="clear" disabled={disabled} size={size as HeaderSize}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="clear"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    value={helperText}
                    size={size as HeaderSize}
                    maxItemWidth={maxItemWidth}
                    actionContent={getAction(hasAction, size as Size)}
                >
                    {`${labels[i % labels.length]} ${i + 1}`}
                </TabItem>
            ))}
        </Tabs>
    );
};

const StoryHeaderScroll = (props: HorizontalStoryTabsProps) => {
    const { disabled, itemQuantity, size, helperText, width, maxItemWidth, hasAction } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs view="clear" disabled={disabled} size={size as HeaderSize} style={{ width }}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="clear"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    value={helperText}
                    size={size as HeaderSize}
                    maxItemWidth={maxItemWidth}
                    actionContent={getAction(hasAction, size as Size)}
                >
                    {`${labels[i % labels.length]} ${i + 1}`}
                </TabItem>
            ))}
        </Tabs>
    );
};

export const HeaderTabs: StoryObj<HorizontalStoryTabsProps> = {
    args: {
        size: 'h5',
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
            control: {
                type: 'select',
            },
        },
        width: {
            control: {
                type: 'text',
            },
            if: { arg: 'clip', eq: 'scroll' },
        },
        stretch: {
            table: {
                disable: true,
            },
        },
        contentLeft: {
            table: {
                disable: true,
            },
        },
        contentRight: {
            table: {
                disable: true,
            },
        },
        hasDivider: {
            table: {
                disable: true,
            },
        },
        size: {
            options: headerSizes,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => {
        switch (args.clip) {
            case 'scroll':
                return <StoryHeaderScroll {...args} />;
            default:
                return <StoryHeaderDefault {...args} />;
        }
    },
};

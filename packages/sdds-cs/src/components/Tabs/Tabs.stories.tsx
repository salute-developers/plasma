import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconPlasma } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown';
import { Counter } from '../Counter';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const clips = ['none', 'scroll', 'showAll'];
const sizes = ['s'] as const;

type Size = typeof sizes[number];

type CustomStoryTabsProps = {
    itemQuantity: number;
    hasDivider: boolean;
    contentLeft: string;
    contentRight: string;
    stretch: boolean;
    helperText: string;
    maxItemWidth: string;
};

const contentLeftOptions = ['none', 'icon'];
const contentRightOptions = ['none', 'counter', 'icon'];
const labels = ['Label', 'Middle label', 'Disabled', 'Very long label'];

const getContentLeft = (contentLeftOption: string, size: Size) => {
    const iconSize = 's';
    return contentLeftOption === 'icon' ? <IconPlasma size={iconSize} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string, size: Size, disabled?: boolean) => {
    const iconSize = 's';
    const counterSize = 's';

    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size={iconSize} color="inherit" />;
        case 'counter':
            return <Counter size={counterSize} count={1} view={disabled ? 'default' : 'positive'} />;
        default:
            return undefined;
    }
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;
type HorizontalStoryTabsProps = StoryTabsProps & { width: string };
type VerticalStoryTabsProps = StoryTabsProps & { height: string };

const meta: Meta<StoryTabsProps> = {
    title: 'Navigation/Tabs',
    component: Tabs,
    decorators: [InSpacingDecorator],
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
            'size',
            'actionContent',
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
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                            {...(i === 2 ? { disabled: true } : { disabled })}
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
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size, disabled)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                        {...(i === 2 ? { disabled: true } : { disabled })}
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
        hasDivider,
        helperText,
        width,
        maxItemWidth,
    } = props;
    const items = Array(itemQuantity).fill(0);
    const [index, setIndex] = useState(0);

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
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
                            size={size as Size}
                            maxItemWidth={maxItemWidth}
                            {...(i === 2 ? { disabled: true } : { disabled })}
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
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
                        size={size as Size}
                        maxItemWidth={maxItemWidth}
                        {...(i === 2 ? { disabled: true } : { disabled })}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
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
                            {...(i === 2 ? { disabled: true } : { disabled })}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
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
                        {...(i === 2 ? { disabled: true } : { disabled })}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
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
        size: 's',
        disabled: false,
        hasDivider: true,
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
                            {...(i === 2 ? { disabled: true } : { disabled })}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
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
                        {...(i === 2 ? { disabled: true } : { disabled })}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
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
                            {...(i === 2 ? { disabled: true } : { disabled })}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
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
                        {...(i === 2 ? { disabled: true } : { disabled })}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
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
                            {...(i === 2 ? { disabled: true } : { disabled })}
                            value={helperText}
                            contentLeft={getContentLeft(contentLeftOption, size as Size)}
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
                        {...(i === 2 ? { disabled: true } : { disabled })}
                        contentLeft={getContentLeft(contentLeftOption, size as Size)}
                        contentRight={getContentRight(contentRightOption, size as Size)}
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
        size: 's',
        disabled: false,
        hasDivider: true,
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

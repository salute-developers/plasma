import React, { useState } from 'react';
import type { ComponentProps, ComponentType } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconClose, IconDotsHorizontalOutline, IconMic } from '../../../components/_Icon';
import { Dropdown } from '../Dropdown/Dropdown';
import { Counter } from '../Counter/Counter';
import type { IconProps } from '../../../components/_Icon/IconRoot';

import { Tabs } from './Tabs';
import { TabItem, IconTabItem } from './TabItem';

const orientations = ['vertical', 'horizontal'];
const clips = ['none', 'scroll', 'showAll'];
const headerClips = ['none', 'scroll'];
const sizes = ['xs', 's', 'm', 'l'] as const;
const headerSizes = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const;

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

const getIconSizes = (size: string) => {
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

    return { iconSize, sizeCustomValue };
};

const getAction = (hasAction: boolean, size: string) => {
    const { iconSize, sizeCustomValue } = getIconSizes(size);

    return hasAction ? (
        <IconClose size={iconSize as Size} sizeCustomValue={sizeCustomValue()} color="inherit" />
    ) : undefined;
};

const getIconContent = (size: string, CustomIcon?: ComponentType<IconProps>) => {
    const { iconSize, sizeCustomValue } = getIconSizes(size);

    if (CustomIcon) {
        return <CustomIcon size={iconSize as Size} sizeCustomValue={sizeCustomValue()} color="inherit" />;
    }

    return <IconMic size={iconSize as Size} sizeCustomValue={sizeCustomValue()} color="inherit" />;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;
type HorizontalStoryTabsProps = StoryTabsProps & { width: string; height: string };
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
        orientation: {
            options: orientations,
            control: {
                type: 'select',
            },
        },
        stretch: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        maxItemWidth: {
            control: {
                type: 'text',
            },
            if: { arg: 'stretch', truthy: false },
        },
        ...disableProps([
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

const StoryDefault = (props: HorizontalStoryTabsProps) => {
    const {
        orientation,
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
        width,
        height,
        clip,
    } = props;
    const [index, setIndex] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);

    const items = Array(itemQuantity).fill(0);
    const maxShowAllItemQuantity = 3;
    const visibleCount = clip === 'showAll' ? maxShowAllItemQuantity : items.length;
    const visibleItems = items.slice(0, visibleCount);
    const otherItems = items.slice(visibleItems.length);

    const dropdownItems = otherItems.map((_, i) => {
        const itemIndex = maxShowAllItemQuantity + i;

        return {
            label: `Label${itemIndex + 1}`,
            value: itemIndex,
        };
    });

    const commonTabsProps = {
        clip,
        hasDivider,
        disabled,
        size,
        view: 'divider',
        ...(orientation === 'horizontal' ? { orientation: 'horizontal', stretch } : { orientation: 'vertical' }),
        ...(clip === 'scroll' && { style: orientation === 'horizontal' ? { width } : { height } }),
    } as HorizontalStoryTabsProps;

    const commonTabsItemProps = {
        orientation,
        disabled,
        view: 'divider',
        tabIndex: !disabled ? 0 : -1,
        actionContent: getAction(hasAction, size as Size),
        size: size as Size,
    };

    return (
        <div style={{ display: 'flex', gap: '3rem', flexDirection: orientation === 'vertical' ? 'row' : 'column' }}>
            <div>
                <h3>Стандартные табы</h3>
                <Tabs {...commonTabsProps}>
                    {visibleItems.map((_, i) => {
                        return (
                            <TabItem
                                key={`item:${i}`}
                                selected={i === index}
                                onClick={() => !disabled && setIndex(i)}
                                maxItemWidth={maxItemWidth}
                                contentLeft={getContentLeft(contentLeftOption, size as Size)}
                                {...commonTabsItemProps}
                                {...(helperText !== ''
                                    ? { value: helperText }
                                    : { contentRight: getContentRight(contentRightOption, size as Size) })}
                            >
                                {`${labels[i % labels.length]} ${i + 1}`}
                            </TabItem>
                        );
                    })}
                    {dropdownItems.length > 0 && (
                        <div style={{ marginLeft: orientation === 'horizontal' ? '1.75rem' : '0' }}>
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
                                    orientation={orientation}
                                >
                                    ShowAll
                                </TabItem>
                            </Dropdown>
                        </div>
                    )}
                </Tabs>
            </div>

            <div>
                <h3>Табы с иконками</h3>
                <Tabs {...commonTabsProps}>
                    {visibleItems.map((_, i) => {
                        return (
                            <IconTabItem
                                key={`item:${i}`}
                                selected={i === iconIndex}
                                onClick={() => !disabled && setIconIndex(i)}
                                {...commonTabsItemProps}
                            >
                                {getIconContent(size as Size)}
                            </IconTabItem>
                        );
                    })}
                    {dropdownItems.length > 0 && (
                        <Dropdown
                            size={size as Size}
                            items={dropdownItems}
                            onItemSelect={(item) => setIndex(item.value as number)}
                        >
                            <IconTabItem
                                key="item:ShowAll"
                                view="divider"
                                tabIndex={!disabled ? 0 : -1}
                                disabled={disabled}
                                size={size as Size}
                            >
                                {getIconContent(size as Size, IconDotsHorizontalOutline)}
                            </IconTabItem>
                        </Dropdown>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export const Default: StoryObj<HorizontalStoryTabsProps> = {
    args: {
        size: 'xs',
        orientation: 'horizontal',
        disabled: false,
        hasDivider: true,
        hasAction: false,
        helperText: '',
        itemQuantity: 6,
        stretch: false,
        width: '15rem',
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
        height: {
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
    render: StoryDefault,
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

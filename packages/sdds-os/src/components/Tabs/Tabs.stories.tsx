import React, { useState } from 'react';
import styled from 'styled-components';
import type { ComponentProps, ComponentType, CSSProperties } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconPlasma, IconClose, IconProps, IconDotsHorizontalOutline } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown/Dropdown';
import { Counter } from '../Counter/Counter';

import { Tabs } from './Tabs';
import { HorizontalTabItemProps, IconTabItem, IconTabItemProps, TabItem, VerticalTabItemProps } from './TabItem';

const orientations = ['vertical', 'horizontal'];
const clips = ['none', 'scroll', 'showAll'];
const sizes = ['s', 'm'] as const;

type Size = typeof sizes[number];

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
const labels = ['Label', 'Middle label', 'Disabled', 'Very long label'];

const getContentLeft = (contentLeftOption: string) => {
    const iconSize = 's';
    return contentLeftOption === 'icon' ? <IconPlasma size={iconSize} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string) => {
    const iconSize = 's';
    const counterSize = 'xs';

    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size={iconSize} color="inherit" />;
        case 'counter':
            return <Counter size={counterSize} count={1} view="positive" />;
        default:
            return undefined;
    }
};

const getIconSizes = (size: string) => {
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
            case 'xs':
                return '1rem';
            default:
                return '1.5rem';
        }
    };

    const sizeProp = {
        '--icon-size': sizeCustomValue(),
    } as CSSProperties;

    return sizeProp;
};

const StyledIconClose = styled(IconClose)<{ disabled?: boolean }>`
    color: var(--text-secondary);

    &:hover {
        color: ${({ disabled }) => (disabled ? 'var(--text-secondary)' : 'var(--text-primary)')};
    }
`;
const getAction = (hasAction: boolean, size: string, disabled?: boolean) => {
    const sizeProp = getIconSizes(size);

    return hasAction ? <StyledIconClose style={sizeProp} disabled={disabled} color="inherit" /> : undefined;
};

const getIconContent = (size: string, CustomIcon?: ComponentType<IconProps>) => {
    const sizeProp = getIconSizes(size);

    if (CustomIcon) {
        return <CustomIcon style={sizeProp} color="inherit" />;
    }

    return <IconPlasma style={sizeProp} color="inherit" />;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;
type HorizontalStoryTabsProps = StoryTabsProps & { width: string; height: string };

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
                                contentLeft={getContentLeft(contentLeftOption)}
                                {...(commonTabsItemProps as typeof orientation extends 'horizontal'
                                    ? Omit<HorizontalTabItemProps, 'value' | 'contentRight'>
                                    : Omit<VerticalTabItemProps, 'value' | 'contentRight'>)}
                                {...(helperText !== ''
                                    ? { value: helperText }
                                    : { contentRight: getContentRight(contentRightOption) })}
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
                                {...(commonTabsItemProps as IconTabItemProps)}
                                {...(i === 2 ? { disabled: true } : { disabled })}
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

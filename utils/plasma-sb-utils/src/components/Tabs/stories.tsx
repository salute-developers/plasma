import React, { useState } from 'react';
import type { ComponentType } from 'react';
import styled from 'styled-components';
import { IconPlasma, IconClose, IconDotsHorizontalOutline } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

import { labels, getIconSizeStyle } from './fixtures';

const getContentSize = (size: string) => (size === 'xs' ? 'xs' : 's');

const getContentLeft = (contentLeftOption: string, size: string) => {
    return contentLeftOption === 'icon' ? <IconPlasma size={getContentSize(size)} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string, size: string, CounterComponent?: any) => {
    const iconSize = getContentSize(size);
    const counterSize = size === 'xs' ? 'xxs' : 'xs';

    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size={iconSize} color="inherit" />;
        case 'counter':
            return CounterComponent ? <CounterComponent size={counterSize} count={1} view="positive" /> : undefined;
        default:
            return undefined;
    }
};

const StyledIconClose = styled(IconClose)<{ disabled?: boolean }>`
    color: var(--text-secondary);

    &:hover {
        color: ${({ disabled }) => (disabled ? 'var(--text-secondary)' : 'var(--text-primary)')};
    }
`;

const getAction = (hasAction: boolean, size: string, disabled?: boolean) => {
    return hasAction ? (
        <StyledIconClose style={getIconSizeStyle(size)} disabled={disabled} color="inherit" />
    ) : undefined;
};

const getIconContent = (size: string, CustomIcon?: ComponentType<IconProps>) => {
    const style = getIconSizeStyle(size);

    if (CustomIcon) {
        return <CustomIcon style={style} color="inherit" />;
    }

    return <IconPlasma style={style} color="inherit" />;
};

type CreateDefaultStoryProps = {
    Tabs: any;
    TabItem: any;
    IconTabItem?: any;
    Dropdown: any;
    CounterComponent?: any;
};

export const createDefaultStory = ({
    Tabs,
    TabItem,
    IconTabItem,
    Dropdown,
    CounterComponent,
}: CreateDefaultStoryProps) => {
    return (props: any) => {
        const {
            orientation,
            disabled,
            disableScroll,
            itemQuantity,
            dividerAlign,
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

        const dropdownItems = otherItems.map((_: unknown, i: number) => {
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
            ...(orientation === 'vertical' && { dividerAlign }),
            ...(orientation === 'horizontal' ? { orientation: 'horizontal', stretch } : { orientation: 'vertical' }),
            ...(clip === 'scroll' && { style: orientation === 'horizontal' ? { width } : { height } }),
        };

        const commonTabsItemProps = {
            orientation,
            disabled,
            disableScroll,
            view: 'divider',
            tabIndex: !disabled ? 0 : -1,
            size,
        };

        const showStandardTabs = dividerAlign !== 'right';

        return (
            <div style={{ display: 'flex', gap: '3rem', flexDirection: orientation === 'vertical' ? 'row' : 'column' }}>
                {showStandardTabs && (
                    <div>
                        <h3>Стандартные табы</h3>
                        <Tabs {...commonTabsProps}>
                            {visibleItems.map((_: unknown, i: number) => (
                                <TabItem
                                    key={`item:${i}`}
                                    selected={i === index}
                                    onClick={() => !disabled && setIndex(i)}
                                    maxItemWidth={maxItemWidth}
                                    contentLeft={getContentLeft(contentLeftOption, size)}
                                    {...commonTabsItemProps}
                                    {...(i === 2 ? { disabled: true } : { disabled })}
                                    actionContent={getAction(hasAction, size, i === 2 || disabled)}
                                    {...(helperText !== ''
                                        ? { value: helperText }
                                        : {
                                              contentRight: getContentRight(contentRightOption, size, CounterComponent),
                                          })}
                                >
                                    {`${labels[i % labels.length]} ${i + 1}`}
                                </TabItem>
                            ))}
                            {dropdownItems.length > 0 && (
                                <div style={{ marginLeft: orientation === 'horizontal' ? '1.75rem' : '0' }}>
                                    <Dropdown
                                        size={size}
                                        items={dropdownItems}
                                        onItemSelect={(item: { value: number }) => setIndex(item.value)}
                                    >
                                        <TabItem
                                            key="item:ShowAll"
                                            view="divider"
                                            tabIndex={!disabled ? 0 : -1}
                                            disabled={disabled}
                                            size={size}
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
                )}

                {IconTabItem && (
                    <div>
                        <h3>Табы с иконками</h3>
                        <Tabs {...commonTabsProps}>
                            {visibleItems.map((_: unknown, i: number) => (
                                <IconTabItem
                                    key={`item:${i}`}
                                    selected={i === iconIndex}
                                    onClick={() => !disabled && setIconIndex(i)}
                                    {...commonTabsItemProps}
                                    {...(i === 2 ? { disabled: true } : { disabled })}
                                    actionContent={getAction(hasAction, size, i === 2 || disabled)}
                                >
                                    {getIconContent(size)}
                                </IconTabItem>
                            ))}
                            {dropdownItems.length > 0 && (
                                <Dropdown
                                    size={size}
                                    items={dropdownItems}
                                    onItemSelect={(item: { value: number }) => setIndex(item.value)}
                                >
                                    <IconTabItem
                                        key="item:ShowAll"
                                        view="divider"
                                        tabIndex={!disabled ? 0 : -1}
                                        disabled={disabled}
                                        size={size}
                                    >
                                        {getIconContent(size, IconDotsHorizontalOutline)}
                                    </IconTabItem>
                                </Dropdown>
                            )}
                        </Tabs>
                    </div>
                )}
            </div>
        );
    };
};

type CreateHeaderStoryProps = {
    Tabs: any;
    TabItem: any;
};

export const createHeaderStory = ({ Tabs, TabItem }: CreateHeaderStoryProps) => {
    return (props: any) => {
        const { disabled, itemQuantity, size, helperText, maxItemWidth, hasAction, clip, width } = props;
        const items = Array(itemQuantity).fill(0);
        const [index, setIndex] = useState(0);

        return (
            <Tabs view="clear" disabled={disabled} size={size} {...(clip === 'scroll' && { style: { width } })}>
                {items.map((_: unknown, i: number) => (
                    <TabItem
                        key={`item:${i}`}
                        view="clear"
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        {...(i === 2 ? { disabled: true } : { disabled })}
                        value={helperText}
                        size={size}
                        maxItemWidth={maxItemWidth}
                        actionContent={getAction(hasAction, size, i === 2 || disabled)}
                    >
                        {`${labels[i % labels.length]} ${i + 1}`}
                    </TabItem>
                ))}
            </Tabs>
        );
    };
};

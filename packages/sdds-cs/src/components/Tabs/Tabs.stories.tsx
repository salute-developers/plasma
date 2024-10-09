import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma } from '@salutejs/plasma-icons';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Dropdown } from '../Dropdown';
import { Counter } from '../Counter';

import { Tabs } from './Tabs';
import { TabItem } from './TabItem';

const clips = ['none', 'scroll', 'showAll'];
const sizes = ['s'] as const;
const headerSizes = ['h5', 'h4', 'h3', 'h2', 'h1'] as const;

type Size = typeof sizes[number];

type CustomStoryTabsProps = {
    hasDivider: boolean;
    itemQuantity: number;
    contentLeft: string;
    contentRight: string;
};

const contentLeftOptions = ['none', 'icon'];
const contentRightOptions = ['none', 'text', 'counter', 'icon'];

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
        case 'text':
            return <div>Text</div>;
        default:
            return undefined;
    }
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;

const meta: Meta<StoryTabsProps> = {
    title: 'Controls/Tabs',
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

const StoryDefault = (props: StoryTabsProps) => {
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
        <Tabs view={hasDivider ? 'divider' : 'clear'} stretch={stretch} disabled={disabled} size={size}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="divider"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    contentLeft={getContentLeft(contentLeftOption)}
                    contentRight={getContentRight(contentRightOption)}
                    size={size}
                >
                    {`Label${i + 1}`}
                </TabItem>
            ))}
        </Tabs>
    );
};

const StoryScroll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
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
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="divider"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    contentLeft={getContentLeft(contentLeftOption)}
                    contentRight={getContentRight(contentRightOption)}
                    size={size}
                >
                    {`Label${i + 1}`}
                </TabItem>
            ))}
        </Tabs>
    );
};

const StoryShowAll = (props: StoryTabsProps) => {
    const {
        disabled,
        itemQuantity,
        clip,
        size,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        hasDivider,
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
            {visibleItems.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    view="divider"
                    selected={i === index}
                    onClick={() => !disabled && setIndex(i)}
                    tabIndex={!disabled ? 0 : -1}
                    disabled={disabled}
                    contentLeft={getContentLeft(contentLeftOption)}
                    contentRight={getContentRight(contentRightOption)}
                    size={size}
                >
                    {`Label${i + 1}`}
                </TabItem>
            ))}
            {dropdownItems.length > 0 && (
                <div style={{ marginLeft: '1.75rem' }}>
                    <Dropdown
                        size={size as typeof sizes[number]}
                        items={dropdownItems}
                        onItemSelect={(item) => setIndex(item.value as number)}
                    >
                        <TabItem
                            key="item:ShowAll"
                            view="divider"
                            tabIndex={!disabled ? 0 : -1}
                            disabled={disabled}
                            size={size}
                        >
                            ShowAll
                        </TabItem>
                    </Dropdown>
                </div>
            )}
        </Tabs>
    );
};

export const Default: StoryObj<StoryTabsProps> = {
    args: {
        size: 's',
        disabled: false,
        hasDivider: true,
        itemQuantity: 8,
    },
    argTypes: {
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
                return <StoryScroll {...args} />;
            case 'showAll':
                return <StoryShowAll {...args} />;
            default:
                return <StoryDefault {...args} />;
        }
    },
};

import React, { useMemo, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon, IconClock } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { InContainerDecorator, disableProps } from '../../helpers';

import { Tabs, TabItem, TabsController } from '.';
import type { TabsProps, TabsControllerProps } from '.';

const icons = ['clock', 'settings', 'house', 'trash'];

const meta: Meta<TabsProps> = {
    title: 'Controls/Tabs',
    component: Tabs,
    decorators: [InContainerDecorator],
    argTypes: {
        animated: {
            control: {
                type: 'boolean',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: ['secondary', 'black', 'clear'],
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['index', 'focused', 'shiftLeft', 'shiftRight', 'scaleOnPress', 'as', 'forwardedAs']),
    },
};

export default meta;

type StoryTabsProps = {
    itemsNumber: number;
    scaleOnInteraction: boolean;
    enableContentLeft: boolean;
    text: string;
};

const Icons = [
    <Icon icon={icons[0] as 'clock'} size="s" />,
    <Icon icon={icons[1] as 'clock'} size="s" />,
    <Icon icon={icons[2] as 'clock'} size="s" />,
    <Icon icon={icons[3] as 'clock'} size="s" />,
];

const StorybookTabsWrapper = styled.div`
    margin-top: 0.5rem;
`;

const StoryDefault = ({
    itemsNumber,
    size,
    view,
    stretch,
    pilled,
    scaleOnInteraction,
    enableContentLeft,
    text,
    disabled,
    outlined,
    animated,
}: StoryTabsProps & TabsProps) => {
    const id = 'tabs-example';
    const [index, setIndex] = useState(0);

    const items = useMemo(() => {
        type elem = {
            label: string;
            onClick: () => void;
            onFocus: () => void;
            onBlur: () => void;
        };

        const res: Array<elem> = [];
        for (let i = 0; i < itemsNumber; i++) {
            res.push({
                label: `${text} ${i} `,
                onFocus: action(`onFocus item #${i}`),
                onBlur: action(`onBlur item #${i}`),
                onClick: () => {
                    !disabled && setIndex(i);
                },
            });
        }
        return res;
    }, [itemsNumber, text]);

    const tabIndex = disabled ? -1 : 0;

    return (
        <StorybookTabsWrapper>
            <Tabs
                id={id}
                size={size}
                view={view}
                stretch={stretch}
                pilled={pilled}
                scaleOnPress={scaleOnInteraction}
                outlined={!disabled && outlined}
                disabled={disabled}
                index={index}
                animated={animated}
                forwardedAs="ul"
            >
                {items.map((elem, i) => (
                    <TabItem
                        key={`item:${i}`}
                        forwardedAs="li"
                        isActive={i === index}
                        aria-controls={id}
                        tabIndex={tabIndex}
                        contentLeft={enableContentLeft && Icons[i % icons.length]}
                        onClick={elem.onClick}
                        onFocus={elem.onFocus}
                        onBlur={elem.onBlur}
                    >
                        {elem.label}
                    </TabItem>
                ))}
            </Tabs>
        </StorybookTabsWrapper>
    );
};

export const Default: StoryObj<StoryTabsProps & TabsProps> = {
    args: {
        itemsNumber: 4,
        size: 'l',
        view: 'secondary',
        stretch: true,
        pilled: false,
        scaleOnInteraction: true,
        outlined: false,
        disabled: false,
        animated: true,
        enableContentLeft: true,
        text: 'Label',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryArrows = ({
    itemsNumber,
    disabled,
    stretch,
    text,
    enableContentLeft,
}: StoryTabsProps & TabsControllerProps) => {
    const items = Array(itemsNumber).fill({
        label: text,
        contentLeft: enableContentLeft && <IconClock color="inherit" />,
    });
    const [index, setIndex] = useState(0);

    return (
        <StorybookTabsWrapper>
            <TabsController
                items={items}
                index={index}
                onIndexChange={(i) => setIndex(i)}
                stretch={stretch}
                disabled={disabled}
            />
        </StorybookTabsWrapper>
    );
};

export const Arrows: StoryObj<StoryTabsProps & TabsControllerProps> = {
    args: {
        itemsNumber: 4,
        disabled: false,
        stretch: true,
        text: 'Label',
    },
    render: (args) => <StoryArrows {...args} />,
};

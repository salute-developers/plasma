import React, { useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon, IconClock } from '@salutejs/plasma-icons';
import { InteractionTaskArgs, PublicInteractionTask, withPerformance } from 'storybook-addon-performance';
import { fireEvent, waitFor } from '@testing-library/dom';
import styled from 'styled-components';

import { InContainerDecorator, disableProps } from '../../helpers';

import { Tabs, TabItem, TabsProps, TabsController, TabsControllerProps } from '.';

const sizeKeys = ['l', 'm', 's'];
const viewKeys = ['secondary', 'black', 'clear'];
const icons = ['clock', 'settings', 'house', 'trash'];

const propsToDisable = ['index', 'focused', 'shiftLeft', 'shiftRight', 'scaleOnPress', 'as', 'forwardedAs'];

export default {
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
            control: {
                type: 'inline-radio',
                options: sizeKeys,
            },
        },
        view: {
            control: {
                type: 'inline-radio',
                options: viewKeys,
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

interface StoryProps {
    itemsNumber: number;
    scaleOnInteraction: boolean;
    enableContentLeft: boolean;
    text: string;
}

const Icons = [
    <Icon icon={icons[0] as 'clock'} size="s" />,
    <Icon icon={icons[1] as 'clock'} size="s" />,
    <Icon icon={icons[2] as 'clock'} size="s" />,
    <Icon icon={icons[3] as 'clock'} size="s" />,
];

const StorybookTabsWrapper = styled.div`
    margin-top: 0.5rem;
`;

export const Default: Story<StoryProps & TabsProps> = ({
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
}) => {
    const id = 'tabs-example';
    const [index, setIndex] = React.useState(0);

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

Default.args = {
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
};

const interactionTasks: PublicInteractionTask[] = [
    {
        name: 'Display Tabs',
        description: 'Select second tab',
        run: async ({ container, controls }: InteractionTaskArgs): Promise<void> => {
            const [firstTab, secondTab] = Array.from(container.querySelectorAll('[role="tab"]'));

            if (firstTab === null || secondTab === null) {
                throw new Error('');
            }

            const isSelected = (tab: typeof secondTab) => () => {
                const ariaSelected = tab.getAttribute('aria-selected');
                if (ariaSelected === 'true') {
                    return Promise.resolve();
                }
                return Promise.reject();
            };

            fireEvent.click(firstTab);
            await waitFor(isSelected(firstTab));

            await controls.time(async () => {
                fireEvent.click(secondTab);
                await waitFor(isSelected(secondTab));
            });
        },
    },
];

Default.parameters = {
    performance: {
        interactions: interactionTasks,
        allowedGroups: ['client'],
        disable: false,
    },
};

Default.decorators = [withPerformance];

export const Arrows: Story<StoryProps & TabsControllerProps> = ({
    itemsNumber,
    disabled,
    stretch,
    text,
    enableContentLeft,
}) => {
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

Arrows.args = {
    itemsNumber: 4,
    disabled: false,
    stretch: true,
    text: 'Label',
};

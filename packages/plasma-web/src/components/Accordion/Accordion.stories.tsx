import React, { useState, ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlus } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton/IconButton';

import { Accordion, AccordionItem } from '.';

const sizes = ['l', 'm', 's', 'xs', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
const stretching = ['filled', 'fixed'] as const;
const types = ['arrow', 'sign', 'clear'] as const;

const meta: Meta<typeof Accordion> = {
    title: 'Data Display/Accordion',
    component: Accordion,
    args: {
        singleActive: false,
        view: 'default',
        size: 'm',
        stretching: 'filled',
        type: 'arrow',
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
        ...disableProps(['text']),
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretching,
            control: {
                type: 'select',
            },
        },
        type: {
            options: types,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Accordion>> = {
    render: (props: ComponentProps<typeof Accordion>) => {
        const args = { ...props, text: undefined };

        return (
            <Accordion {...args}>
                <AccordionItem type={args.type} pin={args.pin} title={args.title}>
                    {args.body}
                </AccordionItem>
                <AccordionItem type={args.type} pin={args.pin} title={args.title}>
                    {args.body}
                </AccordionItem>
                <AccordionItem type={args.type} pin={args.pin} title={args.title}>
                    {args.body}
                </AccordionItem>
            </Accordion>
        );
    },
};

const getSizeForIcon = (size) => (size === 'xs' ? 'xs' : 's');
const getSizeForIconButton = (size) => {
    switch (size) {
        case 'l':
        case 'h2':
        case 'h3':
            return 'l';
        case 'm':
            return 'm';
        case 's':
        case 'h4':
            return 's';
        case 'xs':
        case 'h5':
        case 'h6':
            return 'xs';
        default:
            return 'm';
    }
};

const ControlledAccordion = (props: ComponentProps<typeof Accordion>) => {
    const args = { ...props, text: undefined };
    const [activeFirst, setActiveFirst] = useState(false);
    const [activeSecond, setActiveSecond] = useState(false);
    const [activeThree, setActiveThree] = useState(false);

    return (
        <Accordion {...args}>
            <AccordionItem
                contentRight={
                    <IconButton
                        view="secondary"
                        size={getSizeForIconButton(args.size)}
                        onClick={() => setActiveFirst(!activeFirst)}
                    >
                        <IconPlus size={getSizeForIcon(args.size)} />
                    </IconButton>
                }
                alignWithTitle={args.alignWithTitle}
                type={args.type}
                pin={args.pin}
                title={args.title}
                opened={activeFirst}
            >
                {args.body}
            </AccordionItem>
            <AccordionItem
                contentRight={
                    <IconButton
                        view="secondary"
                        size={getSizeForIconButton(args.size)}
                        onClick={() => setActiveSecond(!activeSecond)}
                    >
                        <IconPlus size={getSizeForIcon(args.size)} />
                    </IconButton>
                }
                alignWithTitle={args.alignWithTitle}
                type={args.type}
                pin={args.pin}
                title={args.title}
                opened={activeSecond}
            >
                {args.body}
            </AccordionItem>
            <AccordionItem
                contentRight={
                    <IconButton
                        view="secondary"
                        size={getSizeForIconButton(args.size)}
                        onClick={() => setActiveThree(!activeThree)}
                    >
                        <IconPlus size={getSizeForIcon(args.size)} />
                    </IconButton>
                }
                alignWithTitle={args.alignWithTitle}
                type={args.type}
                pin={args.pin}
                title={args.title}
                opened={activeThree}
            >
                {args.body}
            </AccordionItem>
        </Accordion>
    );
};

export const Controlled: StoryObj<ComponentProps<typeof Accordion>> = {
    render: (props: ComponentProps<typeof Accordion>) => ControlledAccordion(props),
};

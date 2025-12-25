import React, { useState } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { mergeConfig } from '../../../engines';
import { WithTheme, argTypesFromConfig } from '../../_helpers';
import { accordionConfig } from '../../../components/Accordion';
import { Pin } from '../../../utils/roundness';
import { IconButton } from '../IconButton/IconButton';
import { IconPlus } from '../../../components/_Icon';

import { config } from './Accordion.config';
import { Accordion, AccordionItem } from './Accordion';

type AccordionItemCustomProps = {
    type: 'arrow' | 'sign' | 'clear';
    title: string;
    body: ReactNode;
    pin?: Pin;
    alignWithTitle?: boolean;
};

type AccordionProps = ComponentProps<typeof Accordion> & AccordionItemCustomProps;

const meta: Meta<AccordionProps> = {
    title: 'Data Display/Accordion',
    decorators: [WithTheme],
    component: Accordion,
    args: {
        singleActive: false,
        view: 'default',
        size: 'm',
        stretching: 'filled',
        disabled: false,
        type: 'arrow',
        pin: undefined,
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        alignWithTitle: true,
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
        ...argTypesFromConfig(mergeConfig(accordionConfig, config)),
        ...disableProps(['text']),
        stretching: {
            options: ['filled', 'fixed'],
            control: {
                type: 'select',
            },
        },
        type: {
            options: ['arrow', 'sign', 'clear'],
            control: {
                type: 'select',
            },
        },
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: StoryObj<AccordionProps> = {
    render: (props: AccordionProps) => {
        const args = { ...props, text: undefined };

        return (
            <Accordion {...args}>
                <AccordionItem alignWithTitle={args.alignWithTitle} type={args.type} pin={args.pin} title={args.title}>
                    {args.body}
                </AccordionItem>
                <AccordionItem alignWithTitle={args.alignWithTitle} type={args.type} pin={args.pin} title={args.title}>
                    {args.body}
                </AccordionItem>
                <AccordionItem alignWithTitle={args.alignWithTitle} type={args.type} pin={args.pin} title={args.title}>
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

const ControlledAccordion = (props: AccordionProps) => {
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

export const Controlled: StoryObj<AccordionProps> = {
    render: (props: AccordionProps) => ControlledAccordion(props),
};

import React, { useState, ComponentProps, ReactNode } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlus } from '@salutejs/plasma-icons';
import { accordionConfig } from '@salutejs/plasma-new-hope/styled-components';

import { IconButton } from '../IconButton/IconButton';
import { hasComponentDraftConfig } from '../../helpers/hasComponentDraftConfig';
import { createComponentByConfig } from '../../helpers/createComponentByConfig';

import { AccordionItem } from './Accordion';
import { config as defaultConfig } from './Accordion.config';
import { config as draftConfig } from './Accordion.config.draft';

const config = hasComponentDraftConfig() ? draftConfig : defaultConfig;

const Accordion = createComponentByConfig(accordionConfig, config);

type AccordionItemCustomProps = {
    type: 'arrow' | 'sign' | 'clear';
    title: string;
    body: ReactNode;
    pin?:
        | 'square-square'
        | 'square-clear'
        | 'clear-square'
        | 'clear-clear'
        | 'clear-circle'
        | 'circle-clear'
        | 'circle-circle';
};

type AccordionProps = ComponentProps<typeof Accordion> & AccordionItemCustomProps;

const views = ['default', 'clear'] as const;
const sizes = ['l', 'm', 's', 'xs', 'h2', 'h3', 'h4', 'h5'] as const;
const stretching = ['filled', 'fixed'] as const;
const types = ['arrow', 'sign', 'clear'] as const;
const pins = [
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
] as const;

const meta: Meta<AccordionProps> = {
    title: 'Data Display/Accordion',
    decorators: [InSpacingDecorator],
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
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
        ...disableProps(['text']),
        view: {
            options: views,
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
        pin: {
            options: pins,
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

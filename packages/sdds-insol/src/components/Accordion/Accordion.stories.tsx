import React, { useState, ComponentProps, ReactNode } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlus, IconChevronDown } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { IconButton } from '../IconButton/IconButton';

import { Accordion, AccordionItem } from './Accordion';

type AccordionItemCustomProps = {
    type: 'arrow' | 'clear';
    enableRightArrow: boolean;
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
const types = ['arrow', 'clear'] as const;
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
        enableRightArrow: false,
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
            if: { arg: 'enableRightArrow', truthy: false },
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

const getSizeForArrow = (size) => {
    switch (size) {
        case 'h2':
        case 'h3':
            return 's';
        case 'l':
        case 'm':
        case 's':
        case 'xs':
        case 'h5':
        case 'h4':
            return 'xs';
        default:
            return 'xs';
    }
};

const StyledArrow = styled(IconChevronDown)`
    transition: transform 0.2s;
`;

const Wrapper = styled.div`
    .accordion-item-opened ${StyledArrow} {
        transform: rotate(180deg);
        color: var(--text-accent);
    }
`;

export const Default: StoryObj<AccordionProps> = {
    render: ({ enableRightArrow, ...props }: AccordionProps) => {
        const args = { ...props, text: undefined };

        return (
            <Wrapper>
                <Accordion {...args}>
                    <AccordionItem
                        type={args.type}
                        pin={args.pin}
                        title={args.title}
                        contentRight={enableRightArrow ? <StyledArrow size={getSizeForArrow(args.size)} /> : undefined}
                    >
                        {args.body}
                    </AccordionItem>
                    <AccordionItem
                        type={args.type}
                        pin={args.pin}
                        title={args.title}
                        contentRight={enableRightArrow ? <StyledArrow size={getSizeForArrow(args.size)} /> : undefined}
                    >
                        {args.body}
                    </AccordionItem>
                    <AccordionItem
                        type={args.type}
                        pin={args.pin}
                        title={args.title}
                        contentRight={enableRightArrow ? <StyledArrow size={getSizeForArrow(args.size)} /> : undefined}
                    >
                        {args.body}
                    </AccordionItem>
                </Accordion>
            </Wrapper>
        );
    },
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

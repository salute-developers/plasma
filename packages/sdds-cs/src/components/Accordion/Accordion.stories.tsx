import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Accordion, AccordionItem } from './Accordion';

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

const meta: Meta<AccordionProps> = {
    title: 'Content/Accordion',
    decorators: [InSpacingDecorator],
    component: Accordion,
    args: {
        singleActive: false,
        view: 'default',
        size: 's',
        stretching: 'filled',
        disabled: false,
        type: 'arrow',
        pin: undefined,
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
        ...disableProps(['text', 'size']),
        view: {
            options: ['default', 'clear'],
            control: {
                type: 'select',
            },
        },
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

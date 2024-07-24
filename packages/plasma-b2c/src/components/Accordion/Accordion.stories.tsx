import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { Accordion, AccordionItem } from '.';

const meta: Meta<typeof Accordion> = {
    title: 'Content/Accordion',
    component: Accordion,
    args: {
        singleActive: false,
        view: 'default',
        size: 'm',
        stretching: 'filled',
        type: 'arrow',
        alignWithTitle: false,
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
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
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Accordion>> = {
    render: (props: ComponentProps<typeof Accordion>) => {
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

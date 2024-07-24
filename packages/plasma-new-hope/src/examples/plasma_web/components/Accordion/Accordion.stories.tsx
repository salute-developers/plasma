import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { accordionConfig } from '../../../../components/Accordion';
import { Pin } from '../../../../utils/roundness';

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
    title: 'plasma_web/Accordion',
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

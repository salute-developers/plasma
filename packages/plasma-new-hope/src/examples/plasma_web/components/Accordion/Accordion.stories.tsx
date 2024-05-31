import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { accordionConfig } from '../../../../components/Accordion';

import { config } from './Accordion.config';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'plasma_web/Accordion',
    decorators: [WithTheme],
    component: Accordion,
    args: {
        once: true,
        view: 'default',
        size: 'm',
        stretching: 'filled',
        pin: 'square-square',
        type: 'arrow',
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
    },
    argTypes: {
        ...argTypesFromConfig(mergeConfig(accordionConfig, config)),
        ...disableProps(['text']),
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
                '',
            ],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
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
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Accordion>> = {
    render: (props: ComponentProps<typeof Accordion>) => {
        const args = { ...props, text: undefined };

        return (
            <Accordion {...args}>
                <AccordionItem type={args.type} pin={args.pin} title={args.title} body={args.body} />
                <AccordionItem type={args.type} pin={args.pin} title={args.title} body={args.body} />
                <AccordionItem type={args.type} pin={args.pin} title={args.title} body={args.body} />
            </Accordion>
        );
    },
};

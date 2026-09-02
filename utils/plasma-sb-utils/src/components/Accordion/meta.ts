import { disableProps, InSpacingDecorator } from '../../index';

import {
    accordionDefaultIconContents,
    accordionDefaultIconPlacements,
    accordionPins,
    accordionStretchings,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: {
        views: string[];
        sizes: string[];
    };
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['children', 'defaultActiveEventKey', 'onChange', 'text', 'type'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Accordion',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        singleActive: false,
        view: 'default',
        size: 'm',
        stretching: 'filled',
        disabled: false,
        defaultIconContent: 'arrow',
        defaultIconPlacement: 'left',
        pin: undefined,
        title: 'Как оплатить заправку бонусами СберСпасибо?',
        alignWithTitle: true,
        body:
            'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
        ...defaultArgs,
    },
    argTypes: {
        view: {
            options: componentConfig.views,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        size: {
            options: componentConfig.sizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        disabled: {
            control: { type: 'boolean' },
            table: { category: 'variation' },
        },
        singleActive: {
            control: { type: 'boolean' },
            table: { category: 'behavior' },
        },
        stretching: {
            options: accordionStretchings,
            control: { type: 'select' },
            table: { category: 'layout' },
        },
        defaultIconContent: {
            options: accordionDefaultIconContents,
            control: { type: 'select' },
            table: { category: 'icon' },
        },
        defaultIconPlacement: {
            options: accordionDefaultIconPlacements,
            control: { type: 'select' },
            table: { category: 'icon' },
        },
        pin: {
            options: accordionPins,
            control: { type: 'select' },
            table: { category: 'layout' },
        },
        alignWithTitle: {
            control: { type: 'boolean' },
            table: { category: 'layout' },
        },
        title: {
            control: { type: 'text' },
            table: { category: 'content' },
        },
        body: {
            control: { type: 'text' },
            table: { category: 'content' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});

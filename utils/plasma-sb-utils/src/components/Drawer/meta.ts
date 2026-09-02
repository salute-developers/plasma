import { disableProps, InSpacingDecorator } from '../../index';

import { borderRadiuses, closePlacements, placements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'children',
    'frame',
    'isOpen',
    'offset',
    'onClose',
    'onEscKeyDown',
    'onOverlayClick',
    'opened',
    'overlay',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Overlay/Drawer',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        view: 'default',
        size: 'm',
        placement: 'right',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
        showHeader: true,
        showFooter: true,
        showActions: true,
        hasClose: true,
        asModal: true,
        overlayProps: {
            background: '',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
        },
        closePlacement: 'right',
        width: '50vw',
        height: '100dvh',
        borderRadius: 'none',
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
        borderRadius: {
            options: borderRadiuses,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        customBackgroundColor: {
            control: { type: 'color' },
            table: { category: 'variation' },
        },
        customContentBackgroundColor: {
            control: { type: 'color' },
            table: { category: 'variation' },
        },
        placement: {
            options: placements,
            control: { type: 'select' },
            table: { category: 'layout', defaultValue: { summary: 'right' } },
        },
        width: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        height: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        offsetX: {
            control: { type: 'number' },
            table: { category: 'layout', defaultValue: { summary: 0 } },
        },
        offsetY: {
            control: { type: 'number' },
            table: { category: 'layout', defaultValue: { summary: 0 } },
        },
        closeOnEsc: {
            control: { type: 'boolean' },
            table: { category: 'overlay', defaultValue: { summary: true } },
        },
        closeOnOverlayClick: {
            control: { type: 'boolean' },
            table: { category: 'overlay', defaultValue: { summary: true } },
        },
        withBlur: {
            control: { type: 'boolean' },
            table: { category: 'overlay', defaultValue: { summary: false } },
        },
        asModal: {
            control: { type: 'boolean' },
            table: { category: 'overlay' },
        },
        overlayProps: {
            control: { type: 'object' },
            table: { category: 'overlay' },
        },
        showHeader: {
            control: { type: 'boolean' },
            table: { category: 'story' },
        },
        showFooter: {
            control: { type: 'boolean' },
            table: { category: 'story' },
        },
        showActions: {
            control: { type: 'boolean' },
            table: { category: 'story' },
        },
        hasClose: {
            control: { type: 'boolean' },
            table: { category: 'story' },
        },
        closePlacement: {
            options: closePlacements,
            control: { type: 'select' },
            table: { category: 'story', defaultValue: { summary: 'right' } },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});

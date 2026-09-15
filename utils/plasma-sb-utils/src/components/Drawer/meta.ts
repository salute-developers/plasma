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
        },
        size: {
            options: componentConfig.sizes,
            control: { type: 'select' },
        },
        borderRadius: {
            options: borderRadiuses,
            control: { type: 'select' },
        },
        customBackgroundColor: {
            control: { type: 'color' },
        },
        customContentBackgroundColor: {
            control: { type: 'color' },
        },
        placement: {
            options: placements,
            control: { type: 'select' },
            table: { defaultValue: { summary: 'right' } },
        },
        width: {
            control: { type: 'text' },
        },
        height: {
            control: { type: 'text' },
        },
        offsetX: {
            control: { type: 'number' },
            table: { defaultValue: { summary: 0 } },
        },
        offsetY: {
            control: { type: 'number' },
            table: { defaultValue: { summary: 0 } },
        },
        closeOnEsc: {
            control: { type: 'boolean' },
            table: { defaultValue: { summary: true } },
        },
        closeOnOverlayClick: {
            control: { type: 'boolean' },
            table: { defaultValue: { summary: true } },
        },
        withBlur: {
            control: { type: 'boolean' },
            table: { defaultValue: { summary: false } },
        },
        asModal: {
            control: { type: 'boolean' },
        },
        overlayProps: {
            control: { type: 'object' },
        },
        showHeader: {
            control: { type: 'boolean' },
        },
        showFooter: {
            control: { type: 'boolean' },
        },
        showActions: {
            control: { type: 'boolean' },
        },
        hasClose: {
            control: { type: 'boolean' },
        },
        closePlacement: {
            options: closePlacements,
            control: { type: 'select' },
            table: { defaultValue: { summary: 'right' } },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});

import { disableProps, InSpacingDecorator } from '../../index';

import { placements, triggers } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'opened',
    'onToggle',
    'target',
    'children',
    'frame',
    'usePortal',
    'offset',
    'resizable',
    'onResizeStart',
    'onResizeEnd',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Overlay/Popover',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            placement: 'bottom' as const,
            trigger: 'click' as const,
            closeOnOverlayClick: true,
            closeOnEsc: true,
            isFocusTrapped: true,
            skidding: 0,
            distance: 6,
            hasArrow: true,
            animated: true,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            placement: {
                options: placements,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            trigger: {
                options: triggers,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            hasArrow: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            animated: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            closeOnOverlayClick: {
                control: { type: 'boolean' },
                table: { category: 'behaviour' },
            },
            closeOnEsc: {
                control: { type: 'boolean' },
                table: { category: 'behaviour' },
            },
            isFocusTrapped: {
                control: { type: 'boolean' },
                table: { category: 'behaviour' },
            },
            skidding: {
                control: { type: 'number' },
                table: { category: 'offset' },
            },
            distance: {
                control: { type: 'number' },
                table: { category: 'offset' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

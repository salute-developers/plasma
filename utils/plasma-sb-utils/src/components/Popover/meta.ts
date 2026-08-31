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
            },
            placement: {
                options: placements,
                control: { type: 'select' },
            },
            trigger: {
                options: triggers,
                control: { type: 'select' },
            },
            hasArrow: {
                control: { type: 'boolean' },
            },
            animated: {
                control: { type: 'boolean' },
            },
            closeOnOverlayClick: {
                control: { type: 'boolean' },
            },
            closeOnEsc: {
                control: { type: 'boolean' },
            },
            isFocusTrapped: {
                control: { type: 'boolean' },
            },
            skidding: {
                control: { type: 'number' },
            },
            distance: {
                control: { type: 'number' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

import { disableProps, InSpacingDecorator } from '../../index';

import { variant, placements, triggers } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Dropdown',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            size: 'm',
            variant: 'normal',
            placement: 'bottom',
            trigger: 'click',
            openByRightClick: false,
            offset: [0, 8],
            listWidth: '300px',
            alwaysOpened: false,
            closeOnOverlayClick: true,
            closeOnSelect: true,
            ...defaultArgs,
        },
        argTypes: {
            placement: {
                options: placements,
                control: {
                    type: 'select',
                },
            },
            trigger: {
                options: triggers,
                control: {
                    type: 'select',
                },
            },
            openByRightClick: {
                control: {
                    type: 'boolean',
                },
            },
            size: {
                options: componentConfig.sizes,
                control: {
                    type: 'select',
                },
            },
            variant: {
                options: variant,
                control: {
                    type: 'select',
                },
            },
            closeOnOverlayClick: {
                control: { type: 'boolean' },
            },
            closeOnSelect: {
                control: { type: 'boolean' },
            },
            listWidth: {
                control: { type: 'text' },
            },

            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};

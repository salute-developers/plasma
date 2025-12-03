import { disableProps, InSpacingDecorator } from '../../index';

import { actionPlacements, loaderTypes, thumbVariants } from './fixtures';

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
    title = 'Data Entry/File',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            view: 'default',
            size: 'm',
            filename: 'Document.pdf',
            description: '12.55MB',
            contentType: 'icon',
            actionPlacement: 'right',
            isLoading: false,
            loaderType: 'circular',
            loaderValue: 0,
            fileContainerWidth: '15rem',
            disabled: false,
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
            filename: {
                control: { type: 'text' },
            },
            description: {
                control: { type: 'text' },
            },
            contentType: {
                control: { type: 'select' },
                options: thumbVariants,
            },
            actionPlacement: {
                options: actionPlacements,
                control: { type: 'select' },
            },
            loaderType: {
                options: loaderTypes,
                control: { type: 'select' },
            },
            isLoading: {
                control: { type: 'boolean' },
            },
            loaderValue: {
                control: {
                    type: 'range',
                    min: 0,
                    max: 100,
                    step: 1,
                },
                if: {
                    arg: 'isLoading',
                    eq: true,
                },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps(['theme', 'as', 'forwardedAs', ...disablePropsList]),
        },
    };
};

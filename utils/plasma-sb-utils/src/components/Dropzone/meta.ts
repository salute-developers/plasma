import { disableProps, InSpacingDecorator } from '../../index';

import { iconPlacements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'icon',
    'files',
    'onDragEnter',
    'onDragLeave',
    'onDragOver',
    'onDrop',
    'onChange',
    'onClick',
    'onChoseFiles',
    'validator',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Dropzone',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            iconPlacement: 'top',
            width: 400,
            height: 280,
            disabled: false,
            stretch: false,
            multiple: false,
            title: 'Click to upload',
            description: 'or drag and drop files here',
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
            disabled: {
                control: { type: 'boolean' },
            },
            iconPlacement: {
                options: iconPlacements,
                control: { type: 'inline-radio' },
            },
            stretch: {
                control: { type: 'boolean' },
            },
            width: {
                control: { type: 'number' },
            },
            height: {
                control: { type: 'number' },
            },
            title: {
                control: { type: 'text' },
            },
            description: {
                control: { type: 'text' },
            },
            multiple: {
                control: { type: 'boolean' },
            },
            accept: {
                control: { type: 'text' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

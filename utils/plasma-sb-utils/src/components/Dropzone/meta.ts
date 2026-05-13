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
            iconPlacement: {
                options: iconPlacements,
                control: { type: 'inline-radio' },
                table: { category: 'layout' },
            },
            stretch: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            height: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            title: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            description: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            multiple: {
                control: { type: 'boolean' },
                table: { category: 'file-related' },
            },
            accept: {
                control: { type: 'text' },
                table: { category: 'file-related' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

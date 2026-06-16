import { disableProps, InSpacingDecorator } from '../../index';

import { flowOptions, fileFormatOptions, placements, triggers, buttonTypeVariants, helperTextViews } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'contentLeft',
    'contentRight',
    'onClear',
    'acceptedFileFormats',
    'text',
    'value',
    'dropdownOptions',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Attach',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        args: {
            controlled: false,

            size: 'm',
            view: 'accent',
            width: '400px',

            fileFormat: 'all',
            multiple: false,
            flow: 'horizontal',
            hasAttachment: true,
            hideButtonOnAttach: false,

            buttonType: 'button',
            buttonText: 'Загрузить файл',
            buttonValue: '',
            enableContentLeft: false,
            enableContentRight: false,

            helperTextView: 'default',
            helperText: 'Подсказка',

            placement: 'bottom-start',
            trigger: 'click',
            listWidth: '300px',
            closeOnOverlayClick: true,

            ...defaultArgs,
        },
        argTypes: {
            controlled: {
                control: { type: 'boolean' },
                table: { category: 'controlled variant' },
            },
            view: {
                options: componentConfig.views,
                control: {
                    type: 'select',
                },
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                control: {
                    type: 'select',
                },
                table: { category: 'variation' },
            },
            helperTextView: {
                options: helperTextViews,
                control: {
                    type: 'select',
                },
                table: { category: 'variation' },
            },
            buttonType: {
                options: buttonTypeVariants,
                control: {
                    type: 'select',
                },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            buttonText: {
                control: {
                    type: 'text',
                },
                if: { arg: 'buttonType', eq: 'button' },
                table: { category: 'layout' },
            },
            buttonValue: {
                control: {
                    type: 'text',
                },
                if: { arg: 'buttonType', eq: 'button' },
                table: { category: 'layout' },
            },
            enableContentLeft: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'buttonType', eq: 'button' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'buttonType', eq: 'button' },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            helperText: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            fileFormat: {
                options: fileFormatOptions,
                control: {
                    type: 'select',
                },
                table: { category: 'file' },
            },
            multiple: {
                control: { type: 'boolean' },
                table: { category: 'file' },
            },
            flow: {
                options: flowOptions,
                control: {
                    type: 'select',
                },
                table: { category: 'layout' },
            },
            hasAttachment: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'hideButtonOnAttach', truthy: false },
                table: { category: 'layout' },
            },
            hideButtonOnAttach: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            placement: {
                options: placements,
                control: {
                    type: 'select',
                },
                table: { category: 'dropdown' },
            },
            trigger: {
                options: triggers,
                control: {
                    type: 'select',
                },
                table: { category: 'dropdown' },
            },
            closeOnOverlayClick: {
                control: { type: 'boolean' },
                if: { arg: 'alwaysOpened', truthy: false },
                table: { category: 'dropdown' },
            },
            listWidth: {
                control: { type: 'text' },
                table: { category: 'dropdown' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

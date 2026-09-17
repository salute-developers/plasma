import { disableProps, InSpacingDecorator, exampleOnly } from '../../index';

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
            view: {
                options: componentConfig.views,
                control: {
                    type: 'select',
                },
            },
            size: {
                options: componentConfig.sizes,
                control: {
                    type: 'select',
                },
            },
            helperTextView: {
                options: helperTextViews,
                control: {
                    type: 'select',
                },
            },
            buttonType: {
                options: buttonTypeVariants,
                control: {
                    type: 'select',
                },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            helperText: {
                control: { type: 'text' },
            },
            multiple: {
                control: { type: 'boolean' },
            },
            flow: {
                options: flowOptions,
                control: {
                    type: 'select',
                },
            },
            hasAttachment: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'hideButtonOnAttach', truthy: false },
            },
            hideButtonOnAttach: {
                control: { type: 'boolean' },
            },
            ...exampleOnly({
                controlled: {
                    control: { type: 'boolean' },
                },
                buttonText: {
                    control: {
                        type: 'text',
                    },
                    if: { arg: 'buttonType', eq: 'button' },
                },
                buttonValue: {
                    control: {
                        type: 'text',
                    },
                    if: { arg: 'buttonType', eq: 'button' },
                },
                enableContentLeft: {
                    control: {
                        type: 'boolean',
                    },
                    if: { arg: 'buttonType', eq: 'button' },
                },
                enableContentRight: {
                    control: {
                        type: 'boolean',
                    },
                    if: { arg: 'buttonType', eq: 'button' },
                },
                fileFormat: {
                    options: fileFormatOptions,
                    control: {
                        type: 'select',
                    },
                },
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
                closeOnOverlayClick: {
                    control: { type: 'boolean' },
                    if: { arg: 'alwaysOpened', truthy: false },
                },
                listWidth: {
                    control: { type: 'text' },
                },
                width: {
                    control: { type: 'text' },
                },
            }),
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

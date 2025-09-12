import { InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const view = ['default', 'accent', 'secondary', 'clear', 'positive', 'warning', 'negative', 'dark', 'black', 'white'];
const size = ['xs', 's', 'm', 'l'];
const labelPlacement = ['inner', 'outer'];
const chip = ['default', 'secondary', 'accent'];
const variant = ['normal', 'tight'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const hintTargetPlacements = ['outer', 'inner'];
const placements: Array<string> = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];

export const createMeta = ({
    component,
    // componentConfig,
    title = 'DIMA',
}: // defaultArgs = {},
// additionalArgTypes = {},
// disablePropsList = [],
CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            target: 'textfield-like',
            label: 'Label',
            labelPlacement: 'outer',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            size: 'm',
            view: 'default',
            chipView: 'secondary',
            enableContentLeft: false,
            isTargetAmount: false,
            variant: 'normal',
            disabled: false,
            readOnly: false,
            optional: false,
            required: false,
            requiredPlacement: 'right',
            hasRequiredIndicator: true,
            chipType: 'default',
            hasHint: false,
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 'm',
            hintTargetPlacement: 'outer',
            hintPlacement: 'auto',
            hintWidth: '10rem',
            hintHasArrow: true,
        },
        argTypes: {
            target: {
                control: 'select',
                options: ['button-like', 'textfield-like'],
            },
            size: {
                control: 'select',
                options: size,
            },
            view: {
                control: 'select',
                options: view,
            },
            labelPlacement: {
                control: 'select',
                options: labelPlacement,
                if: {
                    arg: 'target',
                    eq: 'textfield-like',
                },
            },
            placeholder: {
                if: {
                    arg: 'target',
                    eq: 'textfield-like',
                },
            },
            chipView: {
                control: 'select',
                options: chip,
                if: {
                    arg: 'target',
                    eq: 'textfield-like',
                },
            },
            variant: {
                control: 'select',
                options: variant,
            },
            listWidth: {
                control: 'text',
            },
            listOverflow: {
                control: 'text',
            },
            listMaxHeight: {
                control: 'text',
            },
            helperText: {
                control: 'text',
                if: {
                    arg: 'target',
                    eq: 'textfield-like',
                },
            },
            enableContentLeft: {
                control: 'boolean',
                if: {
                    arg: 'target',
                    eq: 'textfield-like',
                },
            },
            readOnly: {
                control: {
                    type: 'boolean',
                },
            },
            requiredPlacement: {
                options: ['left', 'right'],
                control: {
                    type: 'select',
                },
                if: { arg: 'required', truthy: true },
            },
            required: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'optional', truthy: false },
            },
            hasRequiredIndicator: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'required',
                    truthy: true,
                },
            },
            optional: {
                control: {
                    type: 'boolean',
                },
                if: { arg: 'required', truthy: false },
            },
            hintText: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintView: {
                options: hintViews,
                control: {
                    type: 'select',
                },
                if: { arg: 'hasHint', truthy: true },
            },
            hintSize: {
                options: hintSizes,
                control: {
                    type: 'select',
                },
                if: { arg: 'hasHint', truthy: true },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: {
                    type: 'inline-radio',
                },
                if: { arg: 'hasHint', truthy: true },
            },
            hintTrigger: {
                options: hintTriggers,
                control: {
                    type: 'inline-radio',
                },
                if: { arg: 'hasHint', truthy: true },
            },
            hintPlacement: {
                options: placements,
                control: {
                    type: 'select',
                },
                if: { arg: 'hasHint', truthy: true },
                mappers: placements,
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintWidth: {
                control: { type: 'text' },
                if: { arg: 'hasHint', truthy: true },
            },
            chipType: {
                control: 'select',
                options: ['default', 'text'],
                if: { arg: 'target', eq: 'textfield-like' },
            },
        },
        parameters: {
            controls: {
                include: [
                    'target',
                    'size',
                    'view',
                    'chipView',
                    'enableContentLeft',
                    'label',
                    'labelPlacement',
                    'placeholder',
                    'helperText',
                    'isTargetAmount',
                    'closeAfterSelect',
                    'variant',
                    'disabled',
                    'readOnly',
                    'listWidth',
                    'listOverflow',
                    'listMaxHeight',
                    'optional',
                    'required',
                    'requiredPlacement',
                    'hasRequiredIndicator',
                    'chipType',
                    'hasHint',
                    'hintText',
                    'hintTrigger',
                    'hintView',
                    'hintSize',
                    'hintTargetPlacement',
                    'hintPlacement',
                    'hintWidth',
                    'hintHasArrow',
                ],
            },
        },
    };
};

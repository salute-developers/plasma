import { disableProps, InSpacingDecorator } from '../../index';

import {
    variant,
    hintTargetPlacements,
    hintTriggers,
    placements,
    mode,
    arrowPlacement,
    hintSizes,
    hintViews,
    labelPlacement,
    chipView,
    chipClickArea,
} from './fixtures';

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
    title = 'Data Entry/Select',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
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
            hasRequiredIndicator: false,
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
            mode: 'default',
            treeView: false,
            arrowPlacement: 'left',
            singleLine: true,
            closeAfterSelect: false,
            chipClickArea: 'close-icon',
            ...defaultArgs,
        },
        argTypes: {
            target: {
                control: 'select',
                options: ['button-like', 'textfield-like'],
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            labelPlacement: {
                options: labelPlacement,
                control: { type: 'select' },
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
                options: chipView,
                control: { type: 'select' },
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
                control: { type: 'select' },
                if: { arg: 'hasHint', truthy: true },
            },
            hintSize: {
                options: hintSizes,
                control: { type: 'select' },
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
            mode: {
                options: mode,
                control: {
                    type: 'select',
                },
            },
            treeView: {
                control: {
                    type: 'boolean',
                },
            },
            arrowPlacement: {
                options: arrowPlacement,
                control: {
                    type: 'select',
                },
                if: { arg: 'treeView', truthy: true },
            },
            singleLine: {
                control: {
                    type: 'boolean',
                },
            },
            closeAfterSelect: {
                control: {
                    type: 'boolean',
                },
            },
            chipClickArea: {
                options: chipClickArea,
                control: {
                    type: 'select',
                },
            },
            emptyStateDescription: {
                control: 'text',
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};

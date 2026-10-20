import { disableProps, exampleOnly, InSpacingDecorator } from '../../index';

import { iconSizes, limitLabelsPlacements, valueAlignments, valuePlacements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'renderValue',
    'getLabelText',
    'renderFractionIcon',
    'iconSlot',
    'iconSlotOutline',
    'controlled',
    'onChange',
    'onHoverChange',
    'defaultValue',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/RatingInput',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    component,
    decorators: [InSpacingDecorator],
    parameters: {
        controls: {
            disableSaveFromUI: true,
        },
    },
    args: {
        defaultValue: 3,
        value: 3,
        name: 'rating',
        iconSize: 'm',
        size: 'l',
        view: 'default',
        hasValue: true,
        hasLimitLabels: false,
        allowClear: false,
        fractions: 1,
        iconQuantity: 5,
        minLabel: 'плохо',
        maxLabel: 'отлично',
        limitLabelsPlacement: 'side',
        valuePlacement: 'bottom',
        valueAlign: 'center',
        'aria-label': 'Ваша оценка',
        controlled: false,
        customIcons: false,
        customFractionIcons: false,
        hoverFeedback: false,
        ...defaultArgs,
    },
    argTypes: {
        name: { control: { type: 'text' } },
        iconSize: { control: { type: 'select' }, options: iconSizes },
        size: { control: { type: 'select' }, options: componentConfig.sizes },
        view: { control: { type: 'select' }, options: componentConfig.views },
        valuePlacement: { control: { type: 'select' }, options: valuePlacements },
        valueAlign: { control: { type: 'select' }, options: valueAlignments },
        limitLabelsPlacement: { control: { type: 'select' }, options: limitLabelsPlacements },
        fractions: { control: { type: 'number', min: 1, step: 1 } },
        iconQuantity: { control: { type: 'number', min: 1, step: 1 } },
        hasValue: { control: { type: 'boolean' } },
        hasLimitLabels: { control: { type: 'boolean' } },
        allowClear: { control: { type: 'boolean' } },
        minLabel: { control: { type: 'text' } },
        maxLabel: { control: { type: 'text' } },
        onChange: { action: 'onChange' },
        onHoverChange: { action: 'onHoverChange' },
        ...exampleOnly({
            customIcons: { control: { type: 'boolean' } },
            customFractionIcons: { control: { type: 'boolean' }, if: { arg: 'fractions', neq: 1 } },
            hoverFeedback: { control: { type: 'boolean' } },
        }),
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});

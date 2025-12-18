import { disableProps, InSpacingDecorator } from '../../index';

import {
    appearances,
    dividers,
    hintSizes,
    hintTargetPlacements,
    hintTriggers,
    hintViews,
    inputViews,
    placements,
    requiredPlacements,
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
    title = 'Data Entry/Range',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            appearance: 'default',
            hasClearDivider: false,
            size: 'm',
            view: 'default',
            firstInputView: 'default',
            secondInputView: 'default',
            label: 'Лейбл',
            leftHelper: 'Подсказка к полю',
            titleCaption: 'Подпись к полю',
            firstPlaceholder: 'Заполните поле 1',
            secondPlaceholder: 'Заполните поле 2',
            disabled: false,
            readOnly: false,
            firstTextfieldTextBefore: 'С',
            secondTextfieldTextBefore: 'ПО',
            enableContentLeft: true,
            enableContentRight: true,
            dividerVariant: 'dash',
            enableFirstTextfieldContentLeft: false,
            enableFirstTextfieldContentRight: false,
            enableSecondTextfieldContentLeft: false,
            enableSecondTextfieldContentRight: false,
            required: false,
            hasRequiredIndicator: false,
            requiredIndicatorPlacement: 'right',
            hasHint: true,
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 'm',
            hintTargetPlacement: 'outer',
            hintPlacement: 'auto',
            hintWidth: '10rem',
            hintHasArrow: true,
            ...defaultArgs,
        },
        argTypes: {
            appearance: {
                options: appearances,
                control: {
                    type: 'select',
                },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            dividerVariant: {
                options: dividers,
                control: {
                    type: 'select',
                },
            },
            hasClearDivider: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'appearance',
                    eq: 'clear',
                },
            },
            requiredIndicatorPlacement: {
                options: requiredPlacements,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
            },
            required: {
                control: {
                    type: 'boolean',
                },
                if: {
                    arg: 'optional',
                    truthy: false,
                },
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
            titleCaption: {
                control: { type: 'text' },
            },
            leftHelper: {
                control: { type: 'text' },
            },
            hintText: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintView: {
                options: hintViews,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintSize: {
                options: hintSizes,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTargetPlacement: {
                options: hintTargetPlacements,
                control: {
                    type: 'inline-radio',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintTrigger: {
                options: hintTriggers,
                control: {
                    type: 'inline-radio',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintPlacement: {
                options: placements,
                control: {
                    type: 'select',
                },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
                mappers: placements,
            },
            hintHasArrow: {
                control: { type: 'boolean' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            hintWidth: {
                control: { type: 'text' },
                if: {
                    arg: 'hasHint',
                    truthy: true,
                },
            },
            firstInputView: {
                options: inputViews,
                control: { type: 'select' },
            },
            secondInputView: {
                options: inputViews,
                control: { type: 'select' },
            },
            ...additionalArgTypes,
            ...disableProps(['view', ...disablePropsList]),
        },
    };
};

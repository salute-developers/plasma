import { disableProps, InSpacingDecorator } from '../../index';

import {
    labelPlacements,
    requiredPlacements,
    formats,
    eventTooltipSizes,
    dividers,
    appearances,
    inputViews,
    placements,
    hintTriggers,
    hintTargetPlacements,
    hintSizes,
    hintViews,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonArgs = {
    appearance: 'default',
    hasClearDivider: false,
    size: 'l',
    view: 'default',
    label: 'Лейбл',
    leftHelper: 'Подсказка к полю',
    preserveInvalidOnBlur: false,
    format: 'DD.MM.YYYY',
    min: new Date(2024, 1, 1),
    max: new Date(2024, 12, 29),
    closeAfterDateSelect: true,
    includeEdgeDates: true,
    renderFromDate: new Date(2024, 4, 14),
    required: false,
    requiredPlacement: 'right',
    hasRequiredIndicator: false,
    disabled: false,
    readOnly: false,
    lang: 'ru',
    calendarContainerWidth: 0,
    calendarContainerHeight: 0,
    stretched: false,
    enableContentLeft: true,
    enableContentRight: true,
    enableEventTooltip: false,
    eventTooltipSize: 'm',
    hasHint: false,
    hintText: 'Текст подсказки',
    hintTrigger: 'hover',
    hintView: 'default',
    hintSize: 'm',
    hintTargetPlacement: 'outer',
    hintPlacement: 'auto',
    hintWidth: '10rem',
    hintHasArrow: true,
};

const getCommonArgTypes = (componentConfig: any, additionalArgTypes: any = {}) => ({
    appearance: {
        options: appearances,
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
    view: {
        options: componentConfig.views,
        control: { type: 'select' },
    },
    size: {
        options: componentConfig.sizes,
        control: { type: 'select' },
    },
    min: {
        control: {
            type: 'date',
        },
    },
    max: {
        control: {
            type: 'date',
        },
    },
    includeEdgeDates: {
        control: {
            type: 'boolean',
        },
    },
    renderFromDate: {
        control: {
            type: 'date',
        },
    },
    lang: {
        options: ['ru', 'en'],
        control: {
            type: 'select',
        },
    },
    requiredPlacement: {
        options: requiredPlacements,
        control: {
            type: 'select',
        },
        if: { arg: 'required', truthy: true },
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
    format: {
        options: formats,
        control: {
            type: 'select',
        },
    },
    eventTooltipSize: {
        options: eventTooltipSizes,
        control: {
            type: 'select',
        },
        if: {
            arg: 'enableEventTooltip',
            truthy: true,
        },
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
    ...additionalArgTypes,
});

const commonDisabledArgs = [
    'firstValueSuccess',
    'secondValueSuccess',
    'firstValueError',
    'secondValueError',
    'contentLeft',
    'contentRight',
    'onToggle',
    'onChangeValue',
    'onCommitDate',
    'onBlur',
    'onFocus',
    'eventTooltipOptions',
    'eventList',
    'eventMonthList',
    'eventQuarterList',
    'eventYearList',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/DatePicker',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            ...commonArgs,
            inputView: 'default',
            placeholder: '30.05.2024',
            labelPlacement: 'outer',
            defaultDate: new Date(2024, 5, 14),
            maskWithFormat: true,
            textBefore: '',
            ...defaultArgs,
        },
        argTypes: {
            ...getCommonArgTypes(componentConfig, additionalArgTypes),
            defaultDate: {
                control: {
                    type: 'date',
                },
            },
            labelPlacement: {
                options: labelPlacements,
                control: {
                    type: 'select',
                },
            },
            inputView: {
                options: inputViews,
                control: { type: 'select' },
            },
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

export const createRangeMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/DatePicker',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            ...commonArgs,
            firstInputView: 'default',
            secondInputView: 'default',
            firstPlaceholder: '30.05.2024',
            secondPlaceholder: '04.06.2024',
            firstTextfieldTextBefore: '',
            secondTextfieldTextBefore: '',
            firstTextfieldTextAfter: '',
            secondTextfieldTextAfter: '',
            isDoubleCalendar: false,
            dividerVariant: 'dash',
            maskWithFormat: false,
            enableFirstTextfieldContentLeft: false,
            enableFirstTextfieldContentRight: false,
            enableSecondTextfieldContentLeft: false,
            enableSecondTextfieldContentRight: false,
            ...defaultArgs,
        },
        argTypes: {
            ...getCommonArgTypes(componentConfig, additionalArgTypes),
            dividerVariant: {
                options: dividers,
                control: {
                    type: 'select',
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
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

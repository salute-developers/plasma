import { disableProps, InSpacingDecorator } from '../../index';

import { labelPlacements, requiredPlacements, formats, eventTooltipSizes, dividers } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonArgs = {
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
};

const getCommonArgTypes = (componentConfig: any, additionalArgTypes: any = {}) => ({
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
            type: 'inline-radio',
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
    ...additionalArgTypes,
});

const commonDisabledArgs = [
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
            placeholder: '30.05.2024',
            labelPlacement: 'outer',
            defaultDate: new Date(2024, 5, 14),
            maskWithFormat: true,
            textBefore: '',
            enableContentLeft: true,
            enableContentRight: true,
            valueError: false,
            valueSuccess: false,
            enableEventTooltip: true,
            eventTooltipSize: 'm',
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
                    type: 'inline-radio',
                },
            },
            eventTooltipSize: {
                options: eventTooltipSizes,
                control: {
                    type: 'select',
                },
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
            firstPlaceholder: '30.05.2024',
            secondPlaceholder: '04.06.2024',
            firstTextfieldTextBefore: '',
            secondTextfieldTextBefore: '',
            firstTextfieldTextAfter: '',
            secondTextfieldTextAfter: '',
            isDoubleCalendar: false,
            dividerVariant: 'dash',
            maskWithFormat: false,
            enableContentLeft: true,
            enableContentRight: true,
            enableFirstTextfieldContentLeft: false,
            enableFirstTextfieldContentRight: false,
            enableSecondTextfieldContentLeft: false,
            enableSecondTextfieldContentRight: false,
            firstValueError: false,
            firstValueSuccess: false,
            secondValueError: false,
            secondValueSuccess: false,
            ...defaultArgs,
        },
        argTypes: {
            ...getCommonArgTypes(componentConfig, additionalArgTypes),
            dividerVariant: {
                options: dividers,
                control: {
                    type: 'inline-radio',
                },
            },
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

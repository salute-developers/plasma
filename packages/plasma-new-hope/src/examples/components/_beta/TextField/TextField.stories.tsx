import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { action } from 'storybook/actions';
import { disableProps, exampleOnly } from '@salutejs/plasma-sb-utils';
import { PlasmaOutline as PlasmaOutline16 } from '@salutejs/sdds-icons/16/PlasmaOutline';
import { PlasmaOutline as PlasmaOutline24 } from '@salutejs/sdds-icons/24/PlasmaOutline';
import { DisclosureDownOutline as DisclosureDownOutline16 } from '@salutejs/sdds-icons/16/DisclosureDownOutline';
import { DisclosureDownOutline as DisclosureDownOutline24 } from '@salutejs/sdds-icons/24/DisclosureDownOutline';
import { CloseOutline as CloseOutline16 } from '@salutejs/sdds-icons/16/CloseOutline';
import { CloseOutline as CloseOutline24 } from '@salutejs/sdds-icons/24/CloseOutline';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField';

type StoryProps = Omit<
    TextFieldProps,
    'requiredIndicator' | 'optionalText' | 'hint' | 'contentBefore' | 'contentAfter'
> & {
    labelIndicator?: 'none' | 'required' | 'optional';
    fieldIndicator?: 'none' | 'required';
    optionalIndicatorText?: string;
    outerHintVariant?: 'None' | 'Outer';
    innerHintVariant?: 'None' | 'Outer' | 'Inner';
    fieldHintVariant?: 'None' | 'Inner';
    hintText?: string;
    hintSize?: 'auto' | 's' | 'm';
    innerSize?: Exclude<TextFieldProps['size'], 'xs'>;
    hasContentBefore?: boolean;
    hasContentAfter?: boolean;
    hasCaption?: boolean;
    hasCounter?: boolean;
    hasTitleCaption?: boolean;
    hasTextBefore?: boolean;
    hasTextAfter?: boolean;
    hasHint?: boolean;
    hasRequiredIndicator?: boolean;
    hasOptionalIndicator?: boolean;
    fieldWidth?: number;
};

const getIndicatorProps = (indicator: StoryProps['labelIndicator'], optionalText: string): TextFieldProps => {
    if (indicator === 'required') {
        return { requiredIndicator: true };
    }
    if (indicator === 'optional') {
        return { optionalText };
    }
    return {};
};

const meta: Meta<StoryProps> = {
    title: '_Beta/Data Entry/TextField',
    component: TextField,
    args: {
        appearance: 'default',
        view: 'default',
        size: 'm',
        innerSize: 'm',
        label: 'Название поля',
        labelPlacement: 'outer',
        placeholder: 'Введите значение',
        value: '',
        caption: 'Вспомогательный текст',
        titleCaption: 'Подпись к полю',
        counter: '0 / 100',
        textBefore: 'До',
        textAfter: 'После',
        disabled: false,
        readOnly: false,
        keepPlaceholder: false,
        requiredPlacement: 'right',
        labelIndicator: 'none',
        fieldIndicator: 'none',
        optionalIndicatorText: 'Необязательно',
        outerHintVariant: 'None',
        innerHintVariant: 'None',
        fieldHintVariant: 'None',
        hintText: 'Подсказка для поля',
        hintSize: 'auto',
        hasContentBefore: false,
        hasContentAfter: false,
        hasCaption: true,
        hasCounter: false,
        hasTitleCaption: false,
        hasTextBefore: false,
        hasTextAfter: false,
        hasHint: false,
        hasRequiredIndicator: false,
        hasOptionalIndicator: false,
        fieldWidth: 320,
        onChange: action('onChange'),
    },
    argTypes: {
        appearance: { options: ['default', 'clear'], control: 'select' },
        view: { options: ['default', 'positive', 'warning', 'negative'], control: 'select' },
        size: {
            options: ['xl', 'l', 'm', 's', 'xs'],
            control: 'select',
            if: { arg: 'labelPlacement', neq: 'inner' },
        },
        labelPlacement: { options: ['outer', 'inner', 'none'], control: 'select' },
        requiredPlacement: {
            options: ['left', 'right'],
            control: 'select',
            if: { arg: 'hasRequiredIndicator' },
        },
        value: { control: 'text' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        caption: { control: 'text', if: { arg: 'hasCaption' } },
        titleCaption: { control: 'text', if: { arg: 'hasTitleCaption' } },
        counter: { control: 'text', if: { arg: 'hasCounter' } },
        textBefore: { control: 'text', if: { arg: 'hasTextBefore' } },
        textAfter: { control: 'text', if: { arg: 'hasTextAfter' } },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        keepPlaceholder: { control: 'boolean', if: { arg: 'labelPlacement', eq: 'inner' } },
        ...exampleOnly({
            innerSize: {
                name: 'size',
                options: ['xl', 'l', 'm', 's'],
                control: 'select',
                if: { arg: 'labelPlacement', eq: 'inner' },
            },
            labelIndicator: {
                name: 'indicator',
                options: ['none', 'required', 'optional'],
                control: 'select',
                if: { arg: 'labelPlacement', neq: 'none' },
            },
            fieldIndicator: {
                name: 'indicator',
                options: ['none', 'required'],
                control: 'select',
                if: { arg: 'labelPlacement', eq: 'none' },
            },
            optionalIndicatorText: { control: 'text', if: { arg: 'hasOptionalIndicator' } },
            outerHintVariant: {
                name: 'Hint',
                options: ['None', 'Outer'],
                control: 'select',
                if: { arg: 'labelPlacement', eq: 'outer' },
            },
            innerHintVariant: {
                name: 'Hint',
                options: ['None', 'Inner', 'Outer'],
                control: 'select',
                if: { arg: 'labelPlacement', eq: 'inner' },
            },
            fieldHintVariant: {
                name: 'Hint',
                options: ['None', 'Inner'],
                control: 'select',
                if: { arg: 'labelPlacement', eq: 'none' },
            },
            hintText: { control: 'text', if: { arg: 'hasHint' } },
            hintSize: { options: ['auto', 's', 'm'], control: 'select', if: { arg: 'hasHint' } },
            hasContentBefore: { control: 'boolean' },
            hasContentAfter: { control: 'boolean' },
            hasCaption: { control: 'boolean' },
            hasCounter: { control: 'boolean' },
            hasTitleCaption: { control: 'boolean' },
            hasTextBefore: { control: 'boolean' },
            hasTextAfter: { control: 'boolean' },
            fieldWidth: { control: { type: 'range', min: 160, max: 640, step: 8 } },
        } as const),
        ...disableProps([
            'requiredIndicator',
            'optionalText',
            'hint',
            'contentBefore',
            'contentAfter',
            'rootProps',
            'defaultValue',
            'hasHint',
            'hasRequiredIndicator',
            'hasOptionalIndicator',
        ]),
    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    render: function DefaultStory({
        labelPlacement = 'outer',
        size = 'm',
        innerSize = 'm',
        keepPlaceholder,
        labelIndicator = 'none',
        fieldIndicator = 'none',
        optionalIndicatorText = 'Необязательно',
        outerHintVariant = 'None',
        innerHintVariant = 'None',
        fieldHintVariant = 'None',
        hintText,
        hintSize = 'auto',
        hasContentBefore,
        hasContentAfter,
        hasCaption,
        hasCounter,
        hasTitleCaption,
        hasTextBefore,
        hasTextAfter,
        hasHint: currentHasHint,
        hasRequiredIndicator: currentHasRequiredIndicator,
        hasOptionalIndicator: currentHasOptionalIndicator,
        fieldWidth = 320,
        onChange,
        ...args
    }) {
        const [, updateArgs] = useArgs<StoryProps>();
        const resolvedSize = labelPlacement === 'inner' ? innerSize : size;
        const indicator = labelPlacement === 'none' ? fieldIndicator : labelIndicator;
        const hintVariant = { outer: outerHintVariant, inner: innerHintVariant, none: fieldHintVariant }[
            labelPlacement
        ];
        const hasHint = hintVariant !== 'None';
        const hasRequiredIndicator = indicator === 'required';
        const hasOptionalIndicator = indicator === 'optional';
        const BeforeIcon = resolvedSize === 'xs' ? PlasmaOutline16 : PlasmaOutline24;
        const DownIcon = resolvedSize === 'xs' ? DisclosureDownOutline16 : DisclosureDownOutline24;
        const CloseIcon = resolvedSize === 'xs' ? CloseOutline16 : CloseOutline24;
        const AfterIcon = args.appearance === 'clear' ? CloseIcon : DownIcon;

        // Условия Storybook читают args: синхронизируем видимость настроек с активными селекторами.
        useEffect(() => {
            if (
                currentHasHint === hasHint &&
                currentHasRequiredIndicator === hasRequiredIndicator &&
                currentHasOptionalIndicator === hasOptionalIndicator
            ) {
                return;
            }
            updateArgs({ hasHint, hasRequiredIndicator, hasOptionalIndicator });
        }, [
            currentHasHint,
            currentHasRequiredIndicator,
            currentHasOptionalIndicator,
            hasHint,
            hasRequiredIndicator,
            hasOptionalIndicator,
            updateArgs,
        ]);

        return (
            <div style={{ width: fieldWidth, maxWidth: '100%', paddingRight: '3rem' }}>
                <TextField
                    {...args}
                    labelPlacement={labelPlacement}
                    size={resolvedSize}
                    keepPlaceholder={labelPlacement === 'inner' && keepPlaceholder}
                    {...getIndicatorProps(indicator, optionalIndicatorText)}
                    hint={
                        hasHint
                            ? {
                                  value: hintText,
                                  size: hintSize === 'auto' ? undefined : hintSize,
                                  targetPlacement: hintVariant === 'Outer' ? 'outer' : 'inner',
                              }
                            : undefined
                    }
                    caption={hasCaption ? args.caption : undefined}
                    counter={hasCounter ? args.counter : undefined}
                    titleCaption={hasTitleCaption ? args.titleCaption : undefined}
                    textBefore={hasTextBefore ? args.textBefore : undefined}
                    textAfter={hasTextAfter ? args.textAfter : undefined}
                    contentBefore={hasContentBefore ? <BeforeIcon aria-hidden="true" /> : undefined}
                    contentAfter={hasContentAfter ? <AfterIcon aria-hidden="true" /> : undefined}
                    onChange={(event) => {
                        updateArgs({ value: event.currentTarget.value });
                        onChange?.(event);
                    }}
                />
            </div>
        );
    },
};

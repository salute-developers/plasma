import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { disableProps, exampleOnly } from '@salutejs/plasma-sb-utils';
import {
    IconPlasma as IconPlasma24,
    IconDisclosureDownOutline as IconDisclosureDown24,
} from '@salutejs/plasma-icons/24';
import {
    IconPlasma as IconPlasma16,
    IconDisclosureDownOutline as IconDisclosureDown16,
} from '@salutejs/plasma-icons/16';

import { Input } from './Input';
import type { InputProps, InputSize, InputView } from './Input';

type StoryProps = Omit<
    InputProps,
    'label' | 'indicator' | 'hint' | 'chips' | 'contentLeft' | 'contentRight' | 'defaultValue' | 'onChange'
> & {
    labelText: string;
    labelPlacement: 'none' | 'outer' | 'inner';
    keepPlaceholder: boolean;
    indicatorType: 'none' | 'required' | 'optional';
    indicatorPlacement: 'left' | 'right';
    optionalText: string;
    hasContentBefore: boolean;
    hasContentAfter: boolean;
    hasHint: boolean;
    hintText: string;
    hintTrigger: 'hover' | 'click';
    hintTargetPlacement: 'inner' | 'outer';
    hintPlacement: 'top' | 'right' | 'bottom' | 'left';
    hintHasArrow: boolean;
    hintOffset: [number, number];
    hasChips: boolean;
    chipValues: string[];
    chipClickArea: NonNullable<NonNullable<InputProps['chips']>['clickArea']>;
};

const sizes: InputSize[] = ['xl', 'l', 'm', 's', 'xs'];
const views: InputView[] = ['default', 'positive', 'warning', 'negative'];

const meta: Meta<StoryProps> = {
    title: '_Beta/Data Entry/Input',
    component: Input,
    args: {
        placeholder: 'Введите значение',
        hidePlaceholderOnChips: false,
        value: '',
        labelText: 'Название поля',
        labelPlacement: 'outer',
        keepPlaceholder: false,
        caption: 'Вспомогательный текст',
        counter: '',
        titleCaption: '',
        textBefore: '',
        textAfter: '',
        size: 'm',
        view: 'default',
        appearance: 'default',
        disabled: false,
        readOnly: false,
        required: false,
        indicatorType: 'none',
        indicatorPlacement: 'right',
        optionalText: 'Необязательно',
        hasContentBefore: false,
        hasContentAfter: false,
        hasHint: false,
        hintText: 'Дополнительная информация о поле',
        hintTrigger: 'hover',
        hintTargetPlacement: 'outer',
        hintPlacement: 'top',
        hintHasArrow: true,
        hintOffset: [0, 8],
        hasChips: false,
        chipValues: ['Первый', 'Второй'],
        chipClickArea: 'close-icon',
    },
    argTypes: {
        size: { options: sizes, control: 'select' },
        view: { options: views, control: 'select' },
        appearance: { options: ['default', 'clear'], control: 'select' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
        hidePlaceholderOnChips: { control: 'boolean', if: { arg: 'hasChips' } },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        required: { control: 'boolean' },
        titleCaption: { control: 'text' },
        caption: { control: 'text' },
        counter: { control: 'text' },
        textBefore: { control: 'text' },
        textAfter: { control: 'text' },
        ...exampleOnly({
            labelText: { control: 'text', if: { arg: 'labelPlacement', neq: 'none' } },
            labelPlacement: { options: ['none', 'outer', 'inner'], control: 'select' },
            keepPlaceholder: { control: 'boolean', if: { arg: 'labelPlacement', eq: 'inner' } },
            indicatorType: { options: ['none', 'required', 'optional'], control: 'select' },
            indicatorPlacement: {
                options: ['left', 'right'],
                control: 'inline-radio',
                if: { arg: 'indicatorType', neq: 'none' },
            },
            optionalText: { control: 'text', if: { arg: 'indicatorType', eq: 'optional' } },
            hasContentBefore: { control: 'boolean' },
            hasContentAfter: { control: 'boolean' },
            hasHint: { control: 'boolean' },
            hintText: { control: 'text', if: { arg: 'hasHint' } },
            hintTrigger: { options: ['hover', 'click'], control: 'inline-radio', if: { arg: 'hasHint' } },
            hintTargetPlacement: { options: ['inner', 'outer'], control: 'inline-radio', if: { arg: 'hasHint' } },
            hintPlacement: { options: ['top', 'right', 'bottom', 'left'], control: 'select', if: { arg: 'hasHint' } },
            hintHasArrow: { control: 'boolean', if: { arg: 'hasHint' } },
            hintOffset: { control: 'object', if: { arg: 'hasHint' } },
            hasChips: { control: 'boolean' },
            chipValues: { control: 'object', if: { arg: 'hasChips' } },
            chipClickArea: { options: ['full', 'close-icon'], control: 'inline-radio', if: { arg: 'hasChips' } },
        } as const),
        ...disableProps([
            'label',
            'indicator',
            'hint',
            'chips',
            'contentLeft',
            'contentRight',
            'defaultValue',
            'onChange',
            'rootProps',
        ]),
    },
    parameters: {
        controls: {
            disableSaveFromUI: true,
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '24rem', maxWidth: '100%' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    render: function DefaultStory({
        value,
        labelText,
        labelPlacement,
        keepPlaceholder,
        indicatorType,
        indicatorPlacement,
        optionalText,
        hasContentBefore,
        hasContentAfter,
        hasHint,
        hintText,
        hintTrigger,
        hintTargetPlacement,
        hintPlacement,
        hintHasArrow,
        hintOffset,
        hasChips,
        chipValues,
        chipClickArea,
        size,
        titleCaption,
        caption,
        counter,
        textBefore,
        textAfter,
        ...rest
    }) {
        const [, updateArgs] = useArgs<StoryProps>();
        const IconBefore = size === 'xs' ? IconPlasma16 : IconPlasma24;
        const IconAfter = size === 'xs' ? IconDisclosureDown16 : IconDisclosureDown24;

        return (
            <Input
                {...rest}
                size={size}
                value={value}
                onChange={(event) => updateArgs({ value: event.target.value })}
                label={
                    labelPlacement === 'none'
                        ? undefined
                        : { value: labelText, placement: labelPlacement, keepPlaceholder }
                }
                indicator={
                    indicatorType === 'none'
                        ? undefined
                        : { value: indicatorType, placement: indicatorPlacement, optionalText }
                }
                contentBefore={hasContentBefore ? <IconBefore color="inherit" /> : undefined}
                contentAfter={hasContentAfter ? <IconAfter color="inherit" /> : undefined}
                titleCaption={titleCaption === '' ? undefined : titleCaption}
                caption={caption === '' ? undefined : caption}
                counter={counter === '' ? undefined : counter}
                textBefore={textBefore || undefined}
                textAfter={textAfter || undefined}
                hint={
                    hasHint
                        ? {
                              value: hintText,
                              trigger: hintTrigger,
                              targetPlacement: hintTargetPlacement,
                              placement: hintPlacement,
                              hasArrow: hintHasArrow,
                              offset: hintOffset,
                          }
                        : undefined
                }
                chips={
                    hasChips
                        ? {
                              value: chipValues,
                              clickArea: chipClickArea,
                              onRemove: (chip) =>
                                  updateArgs({ chipValues: chipValues.filter((item) => item !== chip) }),
                          }
                        : undefined
                }
            />
        );
    },
};

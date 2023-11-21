import React, { useState, useCallback } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconMinus, IconPlus, IconClose } from '@salutejs/plasma-icons';

import { actionWithPersistedEvent, InSpacingDecorator, ShowcaseComponentRow } from '../../helpers';

import { Pin } from './StepperButton';

import { Stepper, StepperRoot, StepperButton, StepperValue, StepperProps } from '.';

const onChangeAction = action('onChange');
const onRemoveAction = actionWithPersistedEvent('onRemove');
const onFocusAction = actionWithPersistedEvent('onFocus');
const onBlurAction = actionWithPersistedEvent('onBlur');

const meta: Meta<StepperProps> = {
    title: 'Controls/Stepper',
    component: Stepper,
    decorators: [InSpacingDecorator],
};

export default meta;

type CustomAssemblyProps = {
    step: number;
    min: number;
    max: number;
    disabled: boolean;
    showWarning: boolean;
    showFormat: boolean;
};

const items = [
    { min: 0, max: 5, remover: true, pin: 'circle-circle' },
    { min: 0, max: 5, remover: true, pin: 'square-square' },
    { min: 0, max: 5, remover: true, pin: 'circle-circle' },
    { min: 0, max: 5, remover: true, pin: 'square-square' },
    { min: 0, max: 3, remover: true, pin: 'circle-circle' },
    { min: 0, max: 3, remover: true, pin: 'square-square' },
];

const StoryDefault = () => {
    const [values, setValues] = useState<Record<number, number>>({
        0: 2,
        1: 2,
        2: 0,
        3: 0,
        4: 3,
        5: 3,
    });

    return (
        <>
            {items.map((item, i) => (
                <ShowcaseComponentRow key={`item:${i}`}>
                    <Stepper
                        aria-label={`Счётчик ${i + 1}`}
                        step={1}
                        value={values[i]}
                        min={item.min}
                        max={item.max}
                        showRemove={item.remover}
                        pin={item.pin as Pin}
                        onChange={(value) => {
                            setValues({ ...values, [i]: value });
                            onChangeAction(value);
                        }}
                        onRemove={onRemoveAction}
                        onFocus={onFocusAction}
                        onBlur={onBlurAction}
                        ariaLabelRemove="Удалить"
                        ariaLabelDecrement="Уменьшить значение"
                        ariaLabelIncrement="Увеличить значение"
                    />
                </ShowcaseComponentRow>
            ))}
        </>
    );
};

export const Default: StoryObj = {
    render: () => <StoryDefault />,
};

const icoMinus = <IconMinus color="inherit" size="xs" />;
const icoPlus = <IconPlus color="inherit" size="xs" />;
const icoClose = <IconClose color="inherit" size="xs" />;

export const StoryCustomAssembly = ({ step, min, max, disabled, showWarning, showFormat }: CustomAssemblyProps) => {
    const [value, setValue] = useState(5);
    const formatter = (val: number) => `${val}$`;

    const onMinClick = useCallback(() => setValue((value) => Math.max(value - step, min)), [min, step]);
    const onPlusClick = useCallback(() => setValue((value) => Math.min(value + step, max)), [max, step]);

    return (
        <StepperRoot aria-label="Счётчик">
            <StepperButton
                aria-label="Уменьшить значение"
                view={value > min ? 'secondary' : 'critical'}
                icon={value > min ? icoMinus : icoClose}
                onClick={onMinClick}
            />
            <StepperValue
                value={value}
                disabled={disabled}
                showWarning={showWarning}
                formatter={showFormat ? formatter : undefined}
            />
            <StepperButton
                aria-label="Увеличить значение"
                view="secondary"
                icon={icoPlus}
                disabled={value >= max}
                onClick={onPlusClick}
            />
        </StepperRoot>
    );
};

export const CustomAssembly: StoryObj<CustomAssemblyProps> = {
    args: {
        step: 1,
        min: 1,
        max: 10,
        disabled: false,
        showWarning: false,
        showFormat: false,
    },
    render: (args) => <StoryCustomAssembly {...args} />,
};

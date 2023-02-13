import React, { useState, useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconMinus, IconPlus, IconClose } from '@salutejs/plasma-icons';
import { InteractionTaskArgs, PublicInteractionTask, withPerformance } from 'storybook-addon-performance';
import { fireEvent, findByText } from '@testing-library/dom';

import { actionWithPersistedEvent, InSpacingDecorator, ShowcaseComponentRow } from '../../helpers';

import { Pin } from './StepperButton';

import { Stepper, StepperRoot, StepperButton, StepperValue } from '.';

const onChangeAction = action('onChange');
const onRemoveAction = actionWithPersistedEvent('onRemove');
const onFocusAction = actionWithPersistedEvent('onFocus');
const onBlurAction = actionWithPersistedEvent('onBlur');

const items = [
    { min: 0, max: 5, remover: true, pin: 'circle-circle' },
    { min: 0, max: 5, remover: true, pin: 'square-square' },
    { min: 0, max: 5, remover: true, pin: 'circle-circle' },
    { min: 0, max: 5, remover: true, pin: 'square-square' },
    { min: 0, max: 3, remover: true, pin: 'circle-circle' },
    { min: 0, max: 3, remover: true, pin: 'square-square' },
];

export default {
    title: 'Controls/Stepper',
    decorators: [InSpacingDecorator],
} as Meta;

export const Default = () => {
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

interface CustomAssemblyProps {
    step: number;
    min: number;
    max: number;
    disabled: boolean;
    showWarning: boolean;
    showFormat: boolean;
}

const icoMinus = <IconMinus color="inherit" size="xs" />;
const icoPlus = <IconPlus color="inherit" size="xs" />;
const icoClose = <IconClose color="inherit" size="xs" />;

export const CustomAssembly: Story<CustomAssemblyProps> = ({ step, min, max, disabled, showWarning, showFormat }) => {
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

const interactionTasks: PublicInteractionTask[] = [
    {
        name: 'Stepper switching',
        description: 'Click on stepper to change current number',
        run: async ({ container }: InteractionTaskArgs): Promise<void> => {
            const [decreaseButton, increaseButton] = container.querySelectorAll('button');
            fireEvent.click(increaseButton);
            await findByText(container, '6', undefined, { timeout: 20000 });
            fireEvent.click(decreaseButton);
            await findByText(container, '5', undefined, { timeout: 20000 });
        },
    },
];

CustomAssembly.args = {
    step: 1,
    min: 1,
    max: 10,
    disabled: false,
    showWarning: false,
    showFormat: false,
};

CustomAssembly.parameters = {
    chromatic: {
        disable: true,
    },
    performance: {
        interactions: interactionTasks,
        disable: false,
    },
};

CustomAssembly.decorators = [withPerformance];

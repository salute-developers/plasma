import React, { useState, useCallback } from 'react';

import { StepperRoot, StepperButton, StepperValue } from '.';

const customAssemblyProps = {
    step: 1,
    min: 1,
    max: 10,
    disabled: false,
    showWarning: false,
    showFormat: false,
};

const icon = <div style={{ width: 10, height: 10 }} />;

export const Default = () => {
    const { step, min, max, disabled, showWarning, showFormat } = customAssemblyProps;
    const [value, setValue] = useState(5);
    const formatter = (val: number) => `${val}$`;

    const onMinClick = useCallback(() => setValue((value) => Math.max(value - step, min)), [min, step]);
    const onPlusClick = useCallback(() => setValue((value) => Math.min(value + step, max)), [max, step]);

    return (
        <StepperRoot aria-label="Счётчик">
            <StepperButton
                aria-label="Уменьшить значение"
                view={value > min ? 'secondary' : 'critical'}
                icon={icon}
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
                icon={icon}
                disabled={value >= max}
                onClick={onPlusClick}
            />
        </StepperRoot>
    );
};

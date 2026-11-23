import { component, mergeConfig, numberInputConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useEffect, useState } from 'react';

const NumberInput = component(mergeConfig(numberInputConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const NumberInputDefault = {
    name: 'Default',
    args: [
        {
            name: 'value',
            value: 5,
        },
        {
            name: 'min',
            value: 0,
        },
        {
            name: 'max',
            value: 9,
        },
        {
            name: 'step',
            value: 1,
        },
        {
            name: 'precision',
            value: 2,
        },
        {
            name: 'width',
            value: 288,
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '',
        },
        {
            name: 'isManualInput',
            value: false,
        },
        {
            name: 'isLoading',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'limitBehavior',
            value: 'disabled',
            items: toItems(['disabled', 'loop']),
        },
    ],
    render: function Story(args: any) {
        const { value, min, max, step, precision, width, ...rest } = args;
        const [current, setCurrent] = useState<number | string | undefined>(undefined);

        // INFO: На первом рендере args ещё пустые — дефолты стори приезжают следующим эффектом.
        // Без синхронизации состояние навсегда осталось бы NaN, и поле выглядело бы пустым.
        useEffect(() => {
            setCurrent(value === undefined || value === '' ? undefined : Number(value));
        }, [value]);

        return (
            <NumberInput
                {...rest}
                value={current}
                min={Number(min)}
                max={Number(max)}
                step={Number(step) || 1}
                precision={Number(precision) || 0}
                width={Number(width) || undefined}
                onChange={(_: any, next: number | string | undefined) => setCurrent(next)}
            />
        );
    },
};

// Поле без начального значения: показывает placeholder и считает от min.
const NumberInputDisplayWithoutValue = {
    name: 'DisplayWithoutValue',
    args: NumberInputDefault.args.filter((arg) => arg.name !== 'value'),
    render: function Story(args: any) {
        const { min, max, step, precision, width, ...rest } = args;
        const [current, setCurrent] = useState<number | string | undefined>(undefined);

        return (
            <NumberInput
                {...rest}
                value={current}
                min={Number(min)}
                max={Number(max)}
                step={Number(step) || 1}
                precision={Number(precision) || 0}
                width={Number(width) || undefined}
                onChange={(_: any, next: number | string | undefined) => setCurrent(next)}
            />
        );
    },
};

export const NumberInputStories = [NumberInputDefault, NumberInputDisplayWithoutValue];

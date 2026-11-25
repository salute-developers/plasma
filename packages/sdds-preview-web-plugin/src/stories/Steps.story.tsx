import { IconMic } from '@salutejs/plasma-icons';
import { useEffect, useState } from 'react';
import { component, mergeConfig, stepItemConfig, stepsConfig } from '@salutejs/plasma-new-hope/styled-components';

const buildSteps = (stepsThemeConfig: unknown, stepItemThemeConfig: unknown) => {
    const StepItem = component(mergeConfig(stepItemConfig as any, (stepItemThemeConfig ?? {}) as any));

    return component(mergeConfig(stepsConfig(StepItem as any) as any, (stepsThemeConfig ?? {}) as any));
};

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const stepsArgs = [
    {
        name: 'quantity',
        value: 6,
    },
    {
        name: 'title',
        value: 'Title',
    },
    {
        name: 'content',
        value: 'Content',
    },
    {
        name: 'orientation',
        value: 'horizontal',
        items: toItems(['horizontal', 'vertical']),
    },
    {
        name: 'contentAlign',
        value: 'left',
        items: toItems(['left', 'center', 'right']),
    },
    {
        name: 'indicatorType',
        value: 'numbered',
        items: toItems(['numbered', 'bullet', 'icon']),
    },
    {
        name: 'hasLine',
        value: true,
    },
    {
        name: 'simple',
        value: false,
    },
    {
        name: 'disabled',
        value: false,
    },
    {
        name: 'loading',
        value: false,
    },
];

const buildItems = ({ quantity, title, content, indicatorType, simple, size }: any) =>
    Array.from({ length: Math.max(1, Number(quantity) || 1) }, (_, index) => {
        const status = index === 0 ? 'active' : 'inactive';
        const indicator =
            // eslint-disable-next-line no-nested-ternary
            indicatorType === 'bullet' ? undefined : indicatorType === 'icon' ? (
                <IconMic color="inherit" size={size === 'xs' || size === 's' ? 'xs' : 's'} />
            ) : (
                index + 1
            );

        return simple ? { indicator, status } : { title, content, indicator, status };
    });

const useSteps = (args: any) => {
    const { quantity, title, content, indicatorType, simple, size, disabled } = args;
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        setItems(buildItems({ quantity, title, content, indicatorType, simple, size }));
    }, [quantity, title, content, indicatorType, simple, size]);

    useEffect(() => {
        setItems((current) => current.map((item) => ({ ...item, disabled })));
    }, [disabled]);

    const onChange = (_item: any, index: number, prevIndex?: number) => {
        setItems((current) =>
            current.map((item, i) => {
                if (i === index) {
                    return { ...item, status: 'active' };
                }
                if (i === prevIndex) {
                    return { ...item, status: 'completed' };
                }

                return item;
            }),
        );
    };

    return { items, onChange };
};

const StepsDefault = {
    name: 'Default',
    args: stepsArgs,
    render: function Story({ relatedComponents, ...args }: any) {
        const { quantity, title, content, indicatorType, simple, ...rest } = args;
        const Steps = buildSteps(relatedComponents.StepsConfig, relatedComponents.StepItemConfig);
        const { items, onChange } = useSteps({
            quantity,
            title,
            content,
            indicatorType,
            simple,
            size: rest.size,
            disabled: rest.disabled,
        });

        return (
            <div style={{ width: '100%', minWidth: 0, overflowX: 'auto' }}>
                <Steps {...rest} items={items} onChange={onChange} />
            </div>
        );
    },
};

export const StepsStories = [StepsDefault];

const StepItemDefault = {
    name: 'Default',
    args: stepsArgs.filter((arg) => !['quantity', 'orientation', 'contentAlign'].includes(arg.name)),
    render: function Story({ relatedComponents, ...args }: any) {
        const { title, content, indicatorType, simple, ...rest } = args;
        const Steps = buildSteps(relatedComponents.StepsConfig, relatedComponents.StepItemConfig);
        const items = buildItems({ quantity: 1, title, content, indicatorType, simple, size: rest.size });

        return <Steps {...rest} items={items} />;
    },
};

export const StepItemStories = [StepItemDefault];

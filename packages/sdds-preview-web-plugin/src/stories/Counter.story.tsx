import { component, counterConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Counter = component(mergeConfig(counterConfig as any, {}));

const CounterDefault = {
    name: 'Default',
    args: [
        {
            name: 'count',
            value: 123,
        },
        {
            name: 'maxCount',
            value: 200,
        },
    ],
    render: function Story(args: any) {
        return <Counter {...args} />;
    },
};

export const CounterStories = [CounterDefault];

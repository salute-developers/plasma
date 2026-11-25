import { component, indicatorConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Indicator = component(mergeConfig(indicatorConfig as any, {}));

const IndicatorDefault = {
    name: 'Default',
    args: [],
    render: function Story(args: any) {
        return <Indicator {...args} />;
    },
};

export const IndicatorStories = [IndicatorDefault];

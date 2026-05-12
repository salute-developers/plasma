import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateProgressStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getProgressStories = (config: CreateProgressStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const progressConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: progressConfig,
        defaultArgs: componentConfig.defaults,
        ...rest,
    });

    const Default = {
        render: createDefaultStory(component),
    };

    return {
        meta,
        Default,
    };
};

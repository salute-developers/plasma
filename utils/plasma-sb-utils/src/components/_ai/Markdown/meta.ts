import { disableProps, exampleOnly } from '../../../index';

import { markdownTemplate } from './stories';

export const createMeta = ({ component, componentConfig, decorators = [] }: any) => {
    const { views, sizes } = componentConfig;

    return {
        title: 'AI Kit/Markdown',
        component,
        decorators,
        argTypes: {
            view: {
                options: views,
                control: { type: 'select' },
            },
            size: {
                options: sizes,
                control: { type: 'select' },
            },
            shouldParseIncompleteMarkdown: {
                control: { type: 'boolean' },
            },
            ...exampleOnly({
                storyWidth: {
                    control: { type: 'number' },
                },
            }),
            ...disableProps(['tokenRenderer', 'markedOptions']),
        },
        args: {
            view: 'default',
            size: 'm',
            content: markdownTemplate,
            storyWidth: 1000,
            shouldParseIncompleteMarkdown: true,
        },
    };
};

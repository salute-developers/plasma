import {
    bodyConfig,
    component,
    dsplConfig,
    headingConfig,
    mergeConfig,
    textConfig,
} from '@salutejs/plasma-new-hope/styled-components';

const typographyArgs = [
    {
        name: 'noWrap',
        value: false,
    },
    {
        name: 'breakWord',
        value: true,
    },
];

const createStory = (name: string, config: any) => {
    const Component = component(mergeConfig(config as any, {}));

    return [
        {
            name: 'Default',
            args: typographyArgs,
            render: function Story(args: any) {
                const { ...rest } = args;

                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '40rem' }}>
                        <Component {...rest} bold={false}>
                            {name} Normal
                        </Component>
                        <Component {...rest} bold>
                            {name} Bold
                        </Component>
                        <Component {...rest} medium>
                            {name} Medium
                        </Component>
                    </div>
                );
            },
        },
    ];
};

export const BodyStories = createStory('Body', bodyConfig);
export const DsplStories = createStory('Dspl', dsplConfig);
export const HeadingStories = createStory('Heading', headingConfig);
export const TextStories = createStory('Text', textConfig);

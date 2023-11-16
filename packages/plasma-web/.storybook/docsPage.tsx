import { ArgsTable, Description, Primary, PRIMARY_STORY, Subtitle, Title } from '@storybook/addon-docs';

export const docsPage = () => (
    <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
    </>
);

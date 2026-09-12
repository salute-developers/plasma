import { InSpacing as InSpacingDecorator } from '../StoryDecorators';

type CreateMetaProps = {
    title?: string;
};

export const createMeta = ({ title = 'Tokens/Usage' }: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
});

import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRatingInputStories } from '@salutejs/plasma-sb-utils';

import { RatingInput } from './RatingInput';
import { config } from './RatingInput.config';

type RatingInputProps = ComponentProps<typeof RatingInput>;

const { meta: META, Default } = getRatingInputStories({
    component: RatingInput,
    componentConfig: config,
});

const meta: Meta<RatingInputProps> = {
    ...META,
    title: 'Data Entry/RatingInput',
};

export default meta;

export { Default };

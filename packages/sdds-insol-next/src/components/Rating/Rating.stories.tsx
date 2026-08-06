import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRatingStories } from '@salutejs/plasma-sb-utils';

import { Rating } from './Rating';
import { config } from './Rating.config';

type RatingProps = ComponentProps<typeof Rating>;

const { meta: META, Default, CustomIcons } = getRatingStories({
    component: Rating,
    componentConfig: config,
});

const meta: Meta<RatingProps> = {
    ...META,
    title: 'Data Display/Rating',
};

export default meta;

export { Default, CustomIcons };

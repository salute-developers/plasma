import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getRatingStories } from '@salutejs/plasma-sb-utils';

import { IconBlankPdfOutline, IconCross, IconDone } from '../../../components/_Icon';
import { ratingClasses } from '../../../components/Rating';

import { Rating } from './Rating';
import { config } from './Rating.config';

type RatingProps = ComponentProps<typeof Rating>;

const { meta: META, Default, CustomIcons } = getRatingStories({
    component: Rating,
    componentConfig: config,
    customIcons: {
        iconSlot: <IconDone size="s" className={ratingClasses.customIconSizing} />,
        iconSlotOutline: <IconCross size="s" className={ratingClasses.customIconSizing} />,
        iconSlotHalf: <IconBlankPdfOutline size="s" className={ratingClasses.customIconSizing} />,
    },
});

const meta: Meta<RatingProps> = {
    ...META,
    title: 'Data Display/Rating',
};

export default meta;

export { Default, CustomIcons };

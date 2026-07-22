import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getAnswerStories } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { Flow } from '../../Flow/Flow';
import { Button } from '../../Button/Button';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';

import { Answer } from './Answer';
import { config } from './Answer.config';

type AnswerProps = ComponentProps<typeof Answer>;
const { meta: META, Default } = getAnswerStories({
    component: Answer,
    componentConfig: config,
    components: { Flow, Button, Chip, ChipGroup, EmbedIconButton },
    decorators: [WithTheme],
});
const meta: Meta<AnswerProps> = {
    ...META,
    title: 'AI Kit/Answer',
};
export default meta;
export { Default };

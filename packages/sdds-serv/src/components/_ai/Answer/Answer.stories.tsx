import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getAnswerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../../Button/Button';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';
import { Flow } from '../../Flow/Flow';

import { Answer, answerMergedConfig } from './Answer';

type AnswerProps = ComponentProps<typeof Answer>;

const { meta: META, Default } = getAnswerStories({
    component: Answer,
    componentConfig: answerMergedConfig,
    components: { Flow, Button, Chip, ChipGroup, EmbedIconButton },
});

const meta: Meta<AnswerProps> = {
    ...META,
    title: 'AI Kit/Answer',
};

export default meta;
export { Default };

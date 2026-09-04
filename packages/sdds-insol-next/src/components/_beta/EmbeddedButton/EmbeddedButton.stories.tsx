import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getEmbeddedButtonStories } from '@salutejs/plasma-sb-utils';

import { EmbeddedButton } from './EmbeddedButton';
import { config } from './EmbeddedButton.config';

type EmbeddedButtonProps = ComponentProps<typeof EmbeddedButton>;

const { meta: META, Default } = getEmbeddedButtonStories({
    component: EmbeddedButton,
    componentConfig: config,
});

const meta: Meta<EmbeddedButtonProps> = {
    ...META,
    title: '_Beta/Data Entry/EmbeddedButton',
};

export default meta;

export { Default };

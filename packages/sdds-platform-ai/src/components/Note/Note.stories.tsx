import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { getNoteStories } from '@salutejs/plasma-sb-utils';

import { LinkButton } from '../LinkButton/LinkButton';

import { Note } from './Note';
import { config } from './Note.config';

type NoteProps = ComponentProps<typeof Note>;

const { meta: META, Default } = getNoteStories({
    component: Note,
    componentConfig: config,
    additionalComponents: {
        LinkButton,
    },
    defaultArgs: {
        size: 'm',
    },
    disablePropsList: ['size'],
});

const meta: Meta<NoteProps> = {
    ...(META as any),
    title: 'Data Display/Note',
};

export default meta;

export { Default };

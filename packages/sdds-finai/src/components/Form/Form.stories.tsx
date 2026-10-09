import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getFormStories } from '@salutejs/plasma-sb-utils';

import { Select } from '../Select/Select';
import { TextField } from '../TextField/TextField';

import { Form } from './Form';
import { config } from './Form.config';

type FormProps = ComponentProps<typeof Form>;

const { meta: META, Default } = getFormStories({
    component: Form,
    componentConfig: config,
    additionalComponents: {
        TextField,
        Select,
    },
});

const meta: Meta<FormProps> = {
    ...(META as any),
    title: 'Data Entry/Form',
};

export default meta;

export { Default };

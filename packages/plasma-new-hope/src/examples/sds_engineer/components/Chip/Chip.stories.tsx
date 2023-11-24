import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { chipConfig } from '../../../../components/Chip';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Chip.config';
import { Chip } from './Chip';

const onClear = action('onClear');

const meta: Meta<typeof Chip> = {
    title: 'sds_engineer/Chip',
    component: Chip,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(chipConfig, config)),
        ...disableProps(['onClear', 'disabled', 'contentLeft']),
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        text: 'Hello',
        view: 'primary',
        size: 'm',
        readOnly: false,
        onClear,
    },
};

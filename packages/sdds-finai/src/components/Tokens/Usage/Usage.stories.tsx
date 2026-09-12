import type { Meta } from '@storybook/react-vite';
import { sdds_finai__light } from '@salutejs/sdds-themes/es/themes';
import { createToastNotify, getTokenUsageStories } from '@salutejs/plasma-sb-utils';

import { Accordion, AccordionItem } from '../../Accordion';
import { TextField } from '../../TextField/TextField';
import { ToastProvider, useToast } from '../../Toast/Toast';

const { meta: META, Default } = getTokenUsageStories({
    configModules: import.meta.glob('../../**/*.config.{ts,tsx}', { eager: true }),
    theme: sdds_finai__light[0],
    accordion: Accordion,
    accordionItem: AccordionItem,
    textField: TextField,
    provider: ToastProvider,
    useNotify: createToastNotify(useToast),
});

const meta: Meta = {
    ...META,
    title: 'Tokens/Usage',
};

export default meta;

export { Default };

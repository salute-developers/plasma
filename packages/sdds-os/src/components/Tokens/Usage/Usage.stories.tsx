import type { Meta } from '@storybook/react-vite';
import { sdds_os__light } from '@salutejs-ds/sdds_os';
import { addNotification } from '@salutejs/plasma-new-hope/styled-components';
import { createNotificationNotify, getTokenUsageStories } from '@salutejs/plasma-sb-utils';

import { Accordion, AccordionItem } from '../../Accordion';
import { TextField } from '../../TextField/TextField';
import { NotificationsProvider } from '../../Notification/Notification';

const { meta: META, Default } = getTokenUsageStories({
    configModules: import.meta.glob('../../**/*.config.{ts,tsx}', { eager: true }),
    theme: sdds_os__light[0],
    accordion: Accordion,
    accordionItem: AccordionItem,
    textField: TextField,
    provider: NotificationsProvider,
    providerProps: { placement: 'bottom' },
    useNotify: createNotificationNotify(addNotification),
});

const meta: Meta = {
    ...META,
    title: 'Tokens/Usage',
};

export default meta;

export { Default };

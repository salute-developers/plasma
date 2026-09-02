import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getAccordionStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../IconButton/IconButton';

import { Accordion, AccordionItem } from './Accordion';
import { config } from './Accordion.config';

type AccordionProps = ComponentProps<typeof Accordion>;

const { meta: META, Default, Controlled } = getAccordionStories({
    component: Accordion,
    accordionItem: AccordionItem,
    iconButton: IconButton,
    componentConfig: config,
});

const meta: Meta<AccordionProps> = {
    ...META,
    title: 'Data Display/Accordion',
};

export default meta;

export { Default, Controlled };

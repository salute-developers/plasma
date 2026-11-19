import type { Meta } from '@storybook/react-vite';
import { getWheelStories } from '@salutejs/plasma-sb-utils';

import { Wheel } from './Wheel';
import { config } from './Wheel.config';

const { meta: META, Default, CustomItems, CustomSeparator, DependentColumns } = getWheelStories({
    component: Wheel,
    componentConfig: config,
});

const meta: Meta<typeof Wheel> = { ...META, title: 'Data Entry/Wheel' };

export default meta;
export { Default, CustomItems, CustomSeparator, DependentColumns };

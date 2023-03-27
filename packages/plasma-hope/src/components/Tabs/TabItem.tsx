import { TabItem as TabItemB2C } from './views/b2c/TabItem';
import { TabItem as TabItemWeb } from './views/web/TabItem';
import type { Design } from './types';

const componentMap = {
    b2c: TabItemB2C,
    web: TabItemWeb,
};

export const TabItem = ({ design }: Design) => componentMap[design];

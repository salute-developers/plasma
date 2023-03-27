import { Design } from './types';
import { Tabs as TabsB2C } from './views/b2c/Tabs';
import { Tabs as TabsWeb } from './views/web/Tabs';

const componentMap = {
    b2c: TabsB2C,
    web: TabsWeb,
};

export const Tabs = ({ design }: Design) => componentMap[design];

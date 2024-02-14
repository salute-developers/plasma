import { panelContentConfig, panelContentRoot } from '../../../Panel';

export const drawerContentRoot = panelContentRoot;

export const drawerContentConfig = {
    ...panelContentConfig,
    name: 'DrawerContent',
    layout: drawerContentRoot,
};

import { panelHeaderConfig, panelHeaderRoot } from '../../../Panel';

export const drawerHeaderRoot = panelHeaderRoot;

export const drawerHeaderConfig = {
    ...panelHeaderConfig,
    name: 'DrawerHeader',
    layout: drawerHeaderRoot,
};

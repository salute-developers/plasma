import { PopupInfo } from '../Popup/Popup.types';

export interface DrawerInfo extends PopupInfo {
    id: string;
    info?: {
        isDrawer?: true;
    };
}

/**
 * Взаимодействие с Drawer оконами.
 */
const getDrawers = (items: DrawerInfo[]): DrawerInfo[] => {
    return items.filter((item: DrawerInfo) => item?.info?.isDrawer);
};

export const hasDrawers = (items: DrawerInfo[]): boolean => {
    return getDrawers(items).length > 0;
};

export const getIdLastDrawer = (items: DrawerInfo[]): string | undefined => {
    const drawers = getDrawers(items);
    if (!drawers.length) {
        return;
    }
    return drawers[drawers.length - 1].id;
};

export const getIdFirstDrawer = (items: DrawerInfo[]): string | undefined => {
    const drawers = getDrawers(items);
    if (!drawers.length) {
        return;
    }
    return drawers[0].id;
};

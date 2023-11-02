import { PopupInfo } from '../Popup/Popup.types';

export interface ModalInfo extends PopupInfo {
    id: string;
    info?: {
        isModal?: true;
    };
}

/**
 * Взаимодействие с модальными оконами.
 */
const getModals = (items: ModalInfo[]) => {
    return items.filter((item: ModalInfo) => item?.info?.isModal);
};

export const getIdLastModal = (items: ModalInfo[]) => {
    const modals = getModals(items);
    if (!modals.length) {
        return;
    }
    return modals[modals.length - 1].id;
};

export const getIdFirstModal = (items: ModalInfo[]) => {
    const modals = getModals(items);
    if (!modals.length) {
        return;
    }
    return modals[0].id;
};

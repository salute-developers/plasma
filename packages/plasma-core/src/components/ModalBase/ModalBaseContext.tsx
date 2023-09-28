import { PopupInfo } from '../PopupBase/PopupBaseContext';

export interface ModalInfo extends PopupInfo {
    id: string;
    info?: {
        isModal?: true;
    };
}

/**
 * Взаимодействие с модальными оконами.
 */
const getLastModal = (items: ModalInfo[]) => {
    const modals = items.filter((item: ModalInfo) => item?.info?.isModal);
    const lastModal = modals && (modals[modals.length - 1] as ModalInfo);
    return lastModal;
};

export const getIdLastModal = (items: ModalInfo[]) => {
    return getLastModal(items)?.id;
};

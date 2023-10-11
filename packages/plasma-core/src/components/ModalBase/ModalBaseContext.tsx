import { PopupInfo } from '../PopupBase';

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

const getFirstModal = (items: ModalInfo[]) => {
    const modals = items.filter((item: ModalInfo) => item?.info?.isModal);
    const firstModal = modals && (modals[0] as ModalInfo);
    return firstModal;
};

export const getIdLastModal = (items: ModalInfo[]) => {
    return getLastModal(items)?.id;
};

export const getIdFirstModal = (items: ModalInfo[]) => {
    return getFirstModal(items)?.id;
};

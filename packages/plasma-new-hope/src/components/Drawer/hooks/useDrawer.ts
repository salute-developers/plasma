import type { DrawerHookArgs } from '../Drawer.types';
import type { OverlayLayerConfig } from '../../OverlayProvider/OverlayProvider.types';
import { useModal } from '../../Modal/hooks/useModal';

/**
 * Подключает Drawer к общему стеку слоёв.
 * Модальный вариант блокирует фон и прокрутку; немодальный оставляет фон доступным.
 */
export const useDrawer = ({ asModal = true, popupInfo, ...rest }: DrawerHookArgs) => {
    const { layerOptions: modalLayerOptions, ...handlers } = useModal({ popupInfo, ...rest });

    const layerOptions: OverlayLayerConfig = {
        ...modalLayerOptions,
        kind: 'drawer',
        modal: asModal,
        scrollLock: asModal,
        info: { ...popupInfo?.info, isDrawer: true },
    };

    return { layerOptions, ...handlers };
};

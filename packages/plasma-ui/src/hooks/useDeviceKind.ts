import { DeviceKindList } from '../utils';

import { useThemeContext } from './useThemeContext';

type DeviceKind = Record<'isSberBox' | 'isSberPortal' | 'isMobile', boolean>;

/**
 * Возвращает тип устройства, в булевом выражение, на котором было запущено приложение.
 * @return {DeviceKind}
 */
export const useDeviceKind = (): DeviceKind => {
    const { deviceKind } = useThemeContext();

    return {
        isSberBox: deviceKind === DeviceKindList.sberBox,
        isSberPortal: deviceKind === DeviceKindList.sberPortal,
        isMobile: deviceKind === DeviceKindList.mobile,
    };
};

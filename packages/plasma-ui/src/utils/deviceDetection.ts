export const deviceScales = {
    sberPortal: 2,
    sberBox: 2,
    mobile: 1,
};

export type DeviceKind = keyof typeof deviceScales;

export enum DeviceKindList {
    sberBox = 'sberBox',
    mobile = 'mobile',
    sberPortal = 'sberPortal',
}

/**
 * Проверка в браузере на устройство "SberPortal".
 * @return {boolean}
 */
export const isSberPortal = (): boolean => {
    if (typeof navigator === 'undefined') {
        return false;
    }

    const ua = navigator.userAgent.toLowerCase();

    return ua.includes('sberportal') || ua.includes('stargate');
};

/**
 * Проверка в браузере на устройство "SberBox".
 * @return {boolean}
 */
export const isSberBox = (): boolean => {
    if (typeof navigator === 'undefined') {
        return false;
    }

    const ua = navigator.userAgent.toLowerCase();

    return ua.includes('sberbox');
};

/**
 * Проверка в браузере на устройство "SberBoxTop".
 * @return {boolean}
 */
export const isSberBoxTop = (): boolean => {
    if (typeof navigator === 'undefined') {
        return false;
    }

    const ua = navigator.userAgent.toLowerCase();

    return ua.includes('satellite') || ua.includes('sberbox top');
};

/**
 * Проверка в браузере на устройство "SberBoxTV".
 * @return {boolean}
 */
export const isTV = (): boolean => {
    if (typeof navigator === 'undefined') {
        return false;
    }

    const ua = navigator.userAgent.toLowerCase();

    return (
        ua.includes('(tv; tv)') ||
        ua.includes('(tv; huawei)') ||
        ua.includes('(huawei-tv; huawei)') ||
        ua.includes('(huawei-tv; huawei tv)') ||
        ua.includes('staros') ||
        ua.includes('uifamily=tv')
    );
};

/**
 * Вернет тип устройства, под которым запустилось приложение.
 * В случае запуска в серверном окружении, возвращает "sberBox".
 * @return {DeviceKind}
 */
export const detectDevice = (): DeviceKind => {
    if (typeof navigator === 'undefined') {
        return DeviceKindList.sberBox;
    }

    switch (true) {
        case isSberPortal():
            return DeviceKindList.sberPortal;
        case isSberBoxTop():
        case isSberBox():
        case isTV():
            return DeviceKindList.sberBox;
        default:
            return DeviceKindList.mobile;
    }
};

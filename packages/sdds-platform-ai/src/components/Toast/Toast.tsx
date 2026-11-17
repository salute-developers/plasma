import {
    toastConfig,
    ToastProviderHoc,
    ToastControllerHoc,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Toast.config';

export { useToast } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(toastConfig, config);

export const Toast = component(mergedConfig);
export const ToastController = ToastControllerHoc(Toast);
/**
 * @deprecated Используйте OverlayProvider.
 */
export const ToastProvider = ToastProviderHoc(ToastController);

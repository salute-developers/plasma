import { toastConfig, ToastControllerHoc, ToastProviderHoc } from '../../../../components/Toast';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Toast.config';

export { useToast } from '../../../../components/Toast';

const mergedConfig = mergeConfig(toastConfig, config);

export const Toast = component(mergedConfig);
export const ToastController = ToastControllerHoc(Toast);
export const ToastProvider = ToastProviderHoc(ToastController);

import { toastConfig, ToastProviderHoc, ToastControllerHoc, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Toast.config';
export { useToast } from '@salutejs/plasma-new-hope/styled-components';
var mergedConfig = /*#__PURE__*/mergeConfig(toastConfig, config);
export var Toast = /*#__PURE__*/component(mergedConfig);
export var ToastController = /*#__PURE__*/ToastControllerHoc(Toast);
export var ToastProvider = /*#__PURE__*/ToastProviderHoc(ToastController);
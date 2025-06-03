import { toastContainerConfig, showToast } from '../../../components/Toast/ToastNew';
import { component, mergeConfig } from '../../../engines';

import { config } from './Toast.config';

const mergedConfig = mergeConfig(toastContainerConfig, config);

export const ToastContainer = component(mergedConfig);

export { showToast };

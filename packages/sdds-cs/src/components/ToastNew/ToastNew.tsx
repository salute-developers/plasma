import {
    component,
    mergeConfig,
    showToast as showToastOriginal,
    ShowToastPlasmaOptions,
    toastContainerConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { ComponentProps } from 'react';

import { config } from './ToastNew.config';

const mergedConfig = mergeConfig(toastContainerConfig, config);
export const ToastContainer = component(mergedConfig);

type ShowToastType = (
    text: string,
    options?: Omit<ShowToastPlasmaOptions, 'view' | 'size' | 'pilled'> &
        Pick<ComponentProps<typeof ToastContainer>, 'view' | 'size' | 'pilled'>,
) => void;

const showToast = showToastOriginal as ShowToastType;

export { showToast };

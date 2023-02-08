import { createContext } from 'react';

import { ToastInfo, ShowToast } from './Toast.types';

type ContextType = ToastInfo & {
    showToast: ShowToast;
    hideToast: () => void;
};

export const ToastContext = createContext<ContextType>({
    text: null,
    position: null,
    timeout: null,
    showToast: () => undefined,
    hideToast: () => undefined,
});

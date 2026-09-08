import type { NotifyHook } from './types';

const toastData = {
    view: 'default',
    size: 'm',
    hasClose: true,
    fade: false,
    position: 'bottom',
    offset: 0,
    timeout: 3000,
    role: 'alert',
};

export const createToastNotify = (useToast: () => { showToast: (args: any) => void }): NotifyHook => () => {
    const { showToast } = useToast();

    return (text: string) => showToast({ ...toastData, text });
};

export const createNotificationNotify = (addNotification: (args: any, timeout?: number) => void): NotifyHook => () => (
    text: string,
    isError?: boolean,
) => addNotification({ title: text, view: isError ? 'negative' : 'positive', size: 'xxs', role: 'alert' }, 3000);

import { IconBell } from '@salutejs/plasma-icons';
import {
    ToastControllerHoc,
    ToastProviderHoc,
    component,
    mergeConfig,
    toastConfig,
    useToast,
} from '@salutejs/plasma-new-hope/styled-components';

const Toast = component(mergeConfig(toastConfig as any, {}));
const ToastProvider = ToastProviderHoc(ToastControllerHoc(Toast as any));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ToastDefault = {
    name: 'Default',
    args: [
        {
            name: 'text',
            value: 'Текст всплывающего уведомления',
        },
        {
            name: 'hasClose',
            value: true,
        },
        {
            name: 'enableContentLeft',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { enableContentLeft, shape, ...rest } = args;

        return (
            <Toast
                {...rest}
                pilled={shape === 'pilled'}
                contentLeft={enableContentLeft ? <IconBell size="xs" color="inherit" /> : undefined}
                style={{ position: 'static', transform: 'none', top: 'auto', bottom: 'auto', left: 'auto' }}
            />
        );
    },
};

const LiveDemoContent = ({ Button, enableContentLeft, position, offset, timeout, fade, ...rest }: any) => {
    const { showToast, hideToast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <Button text="Скрыть уведомление" onClick={hideToast} />
            <Button
                text="Показать уведомление"
                onClick={() => {
                    showToast({
                        ...rest,
                        position,
                        offset: Number(offset) || 0,
                        timeout: Number(timeout) || 3000,
                        fade,
                        contentLeft: enableContentLeft ? <IconBell size="xs" color="inherit" /> : undefined,
                    });
                }}
            />
        </div>
    );
};

const ToastLiveDemo = {
    name: 'LiveDemo',
    args: [
        ...ToastDefault.args,
        {
            name: 'position',
            value: 'bottom',
            items: toItems(['top', 'bottom']),
        },
        {
            name: 'fade',
            value: true,
        },
        {
            name: 'offset',
            value: 0,
        },
        {
            name: 'timeout',
            value: 3000,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { ...rest } = args;
        return (
            <ToastProvider>
                <LiveDemoContent {...rest} Button={Button} />
            </ToastProvider>
        );
    },
};

export const ToastStories = [ToastDefault, ToastLiveDemo];

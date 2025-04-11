import React, { forwardRef } from 'react';
import toast, { Toaster, resolveValue } from 'react-hot-toast';

import { IconCross } from '../_Icon/Icons/IconCross';
import type { RootProps } from '../../engines';

import { ToastContainerProps } from './ToastNew.types';
import { base, Toast, CloseIconWrapper } from './ToastNew.styles';

export const toastContainerRoot = (Root: RootProps<HTMLDivElement, ToastContainerProps>) =>
    forwardRef<HTMLDivElement, ToastContainerProps>((props, ref) => {
        const { hasClose = true, ...rest } = props;

        return (
            <Root ref={ref} {...rest}>
                <Toaster
                    toastOptions={{
                        duration: Infinity,
                    }}
                >
                    {(t) => (
                        <Toast style={{ opacity: t.visible ? 1 : 0, background: 'white' }}>
                            {resolveValue(t.message, t)}

                            {t.type !== 'loading' && hasClose && (
                                <CloseIconWrapper
                                    view="clear"
                                    size="s"
                                    stretching="fixed"
                                    onClick={() => toast.dismiss(t.id)}
                                >
                                    <IconCross size="s" color="inherit" />
                                </CloseIconWrapper>
                            )}
                        </Toast>
                    )}
                </Toaster>
            </Root>
        );
    });

// export type ShowToastProps = (text: string) => void;

export const showToast = toast;

export const toastContainerConfig = {
    name: 'ToastContainer',
    tag: 'div',
    layout: toastContainerRoot,
    base,
    variations: {},
    defaults: {},
};

import React, { forwardRef } from 'react';
import toast, { Toaster, resolveValue } from 'react-hot-toast';
import type { Toast as ToastInterface } from 'react-hot-toast';

import { tokens } from '../Toast.tokens';
import type { RootProps } from '../../../engines';
import { IconCrossThin } from '../../_Icon/Icons/IconCrossThin';

import { base, Toast, CloseIconWrapper, StyledContentLeft } from './ToastNew.styles';
import { ToastContainerProps, ShowToastProps, ShowToastPlasmaOptions } from './ToastNew.types';

export const toastContainerRoot = (Root: RootProps<HTMLDivElement, ToastContainerProps>) =>
    forwardRef<HTMLDivElement, ToastContainerProps>((props, ref) => {
        const {
            hasClose = true,
            view,
            size,
            pilled,
            contentLeft,
            width,
            textColor,
            position = 'bottom-center',
            duration = Infinity,
            onCloseButtonClick,
            ...rest
        } = props;

        return (
            <Root ref={ref} view={view} size={size} pilled={pilled} {...rest}>
                <Toaster
                    toastOptions={{
                        duration,
                        position,
                    }}
                >
                    {(
                        options: ToastInterface & {
                            plasmaOptions?: ShowToastPlasmaOptions;
                        },
                    ) => {
                        return (
                            <Root
                                view={options.plasmaOptions?.view}
                                size={options.plasmaOptions?.size}
                                pilled={options.plasmaOptions?.pilled}
                            >
                                <Toast
                                    style={{ opacity: options.visible ? 1 : 0 }}
                                    width={options.plasmaOptions?.width || width}
                                    textColor={options.plasmaOptions?.textColor || textColor}
                                >
                                    {(options.plasmaOptions?.contentLeft || contentLeft) && (
                                        <StyledContentLeft>
                                            {options.plasmaOptions?.contentLeft || contentLeft}
                                        </StyledContentLeft>
                                    )}

                                    {resolveValue(options.message, options)}

                                    {(options.plasmaOptions?.hasClose ||
                                        (options.plasmaOptions?.hasClose ?? hasClose)) && (
                                        <CloseIconWrapper
                                            view="clear"
                                            size="s"
                                            stretching="fixed"
                                            onClick={() => {
                                                if (onCloseButtonClick) {
                                                    onCloseButtonClick();
                                                }

                                                toast.dismiss(options.id);
                                            }}
                                        >
                                            <IconCrossThin
                                                size="s"
                                                color="inherit"
                                                sizeCustomProperty={tokens.closeIconSize}
                                            />
                                        </CloseIconWrapper>
                                    )}
                                </Toast>
                            </Root>
                        );
                    }}
                </Toaster>
            </Root>
        );
    });

export const showToast: ShowToastProps = (text, options) => {
    toast(text, {
        // INFO: id всегда одинаковый для отключения стекирования
        id: 'toast',
        ...(options?.position ? { position: options?.position } : undefined),
        ...(options?.duration ? { duration: options?.duration } : undefined),
        // @ts-ignore
        plasmaOptions: {
            view: options?.view,
            size: options?.size,
            pilled: options?.pilled,
            contentLeft: options?.contentLeft,
            hasClose: options?.hasClose,
            width: options?.width,
            textColor: options?.textColor,
        },
    });
};

export const toastContainerConfig = {
    name: 'ToastContainer',
    tag: 'div',
    layout: toastContainerRoot,
    base,
    variations: {
        view: {
            css: '',
        },
        size: {
            css: '',
        },
        pilled: {
            css: '',
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};

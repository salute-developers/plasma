import React, { forwardRef } from 'react';
import toast, { Toaster, resolveValue } from 'react-hot-toast';
import type { Toast as ToastInterface } from 'react-hot-toast';
import type { RootProps } from 'src/engines';
import { tokens } from 'src/components/Toast/Toast.tokens';

import { IconCrossThin } from '../../_Icon/Icons/IconCrossThin';

import { base, Toast, ToastAnimationWrapper, CloseIconWrapper, StyledContentLeft } from './ToastNew.styles';
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
            gap = 8,
            animation,
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
                    gutter={gap}
                >
                    {(options: ToastInterface & { plasmaOptions?: ShowToastPlasmaOptions }) => {
                        const removeDismissedToast = (event: React.AnimationEvent<HTMLDivElement>) => {
                            if (!options.visible && event.target === event.currentTarget) {
                                toast.remove(options.id);
                            }
                        };

                        if (options.plasmaOptions?.renderToast) {
                            const { renderToast, ...plasmaOptions } = options.plasmaOptions;
                            const toastAnimation = plasmaOptions.animation ?? animation;
                            const customAnimation = options.visible ? toastAnimation?.enter : toastAnimation?.exit;

                            return (
                                <ToastAnimationWrapper
                                    data-position={options.position ?? position}
                                    data-visible={options.visible}
                                    data-custom-animation={customAnimation ? 'true' : undefined}
                                    style={
                                        customAnimation
                                            ? ({
                                                  '--plasma-private-toast-animation': customAnimation,
                                              } as React.CSSProperties)
                                            : undefined
                                    }
                                    onAnimationEnd={removeDismissedToast}
                                >
                                    {renderToast({ ...plasmaOptions, id: plasmaOptions.id ?? options.id })}
                                </ToastAnimationWrapper>
                            );
                        }

                        const toastAnimation = options.plasmaOptions?.animation ?? animation;
                        const customAnimation = options.visible ? toastAnimation?.enter : toastAnimation?.exit;

                        return (
                            <Root
                                view={options.plasmaOptions?.view}
                                size={options.plasmaOptions?.size}
                                pilled={options.plasmaOptions?.pilled}
                            >
                                <Toast
                                    width={options.plasmaOptions?.width || width}
                                    textColor={options.plasmaOptions?.textColor || textColor}
                                    data-position={options.position ?? position}
                                    data-visible={options.visible}
                                    data-custom-animation={customAnimation ? 'true' : undefined}
                                    style={
                                        customAnimation
                                            ? ({
                                                  '--plasma-private-toast-animation': customAnimation,
                                              } as React.CSSProperties)
                                            : undefined
                                    }
                                    onAnimationEnd={removeDismissedToast}
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
    const id = options?.id ?? (options?.stacking !== true ? 'toast' : undefined);

    return toast(text, {
        ...(id !== undefined ? { id } : undefined),
        ...(options?.position ? { position: options.position } : undefined),
        ...(options?.duration !== undefined ? { duration: options.duration } : undefined),
        // @ts-ignore
        plasmaOptions: {
            ...options,
        },
    });
};

export const hideToast = (id: string) => toast.dismiss(id);

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

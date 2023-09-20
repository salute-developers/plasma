import React, { forwardRef, useMemo } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines/types';

import { base as viewCSS } from './_view/base';
import { base as sizeCSS } from './_size/base';
import { SpinnerSvg } from './SpinnerSvg';

const base = css`
    display: flex;
    box-sizing: border-box;
`;

const SpinnerWrapper = styled.div<{ width: string; height: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    animation: rotate 1s linear infinite;

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;

const sizeFormatting = (size: number | string, deviceScale = 1): string => {
    const scalingPixelBasis = 16;

    if (typeof size === 'number' || (!size.endsWith('rem') && !size.endsWith('px'))) {
        return `${Number(size) / (scalingPixelBasis * deviceScale)}rem`;
    }

    return size;
};

type SpinnerInnerProps = {
    wrapperWidth: string;
    wrapperHeight: string;
    svgWidth: string | number;
    svgHeight: string | number;
    color: string;
};

// TODO: удалить после обновления API компонента
const getFallbackProps = (props: SpinnerProps, initialInnerProps: SpinnerInnerProps) => {
    const { size } = props;
    const color = props.color || initialInnerProps.color;

    if (typeof size === 'number' || (size && !Number.isNaN(parseInt(size, 10)))) {
        const wrapperSize = sizeFormatting(size);
        return {
            wrapperWidth: wrapperSize,
            wrapperHeight: wrapperSize,
            svgWidth: size,
            svgHeight: size,
            color,
        };
    }

    return {
        ...initialInnerProps,
        color,
    };
};

const useInnerProps = (props: SpinnerProps, initialInnerProps: SpinnerInnerProps) => {
    return useMemo(() => {
        const { width, height } = props;
        let innerProps = initialInnerProps;

        if (width && height) {
            innerProps = {
                wrapperWidth: sizeFormatting(width),
                wrapperHeight: sizeFormatting(height),
                svgWidth: height,
                svgHeight: width,
                color: initialInnerProps.color,
            };
        }

        return getFallbackProps(props, innerProps);
    }, [props.width, props.height, props.view, props.size]);
};

type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
    (
        | {
              width?: never;
              height?: never;
              /**
               * Размер спиннера
               */
              size?: string;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина спиннера
               */
              width: number;
              /**
               * Кастомная высота спиннера
               */
              height: number;
              size?: never;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина спиннера
               */
              width: string;
              /**
               * Кастомная высота спиннера
               */
              height: string;
              size?: never;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
    );

export const spinnerRoot = (Root: RootProps<HTMLDivElement, SpinnerProps>) =>
    forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
        const { id, ...rest } = props;

        const innerProps = useInnerProps(props, {
            wrapperWidth: 'auto',
            wrapperHeight: 'auto',
            svgWidth: 'var(--plasma-spinner-size)',
            svgHeight: 'var(--plasma-spinner-size)',
            color: 'currentColor',
        });

        const uniqId = safeUseId;
        const innerId = id || uniqId();

        return (
            <Root ref={ref} id={innerId} {...rest}>
                <SpinnerWrapper width={innerProps.wrapperWidth} height={innerProps.wrapperHeight}>
                    <SpinnerSvg
                        id={innerId}
                        width={innerProps.svgWidth}
                        height={innerProps.svgHeight}
                        color={innerProps.color}
                    />
                </SpinnerWrapper>
            </Root>
        );
    });

export const spinnerConfig = {
    name: 'Spinner',
    tag: 'div',
    layout: spinnerRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'accent',
    },
};

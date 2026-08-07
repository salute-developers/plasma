import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';
import type { RootProps } from 'src/engines/types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { SpinnerSvg } from './SpinnerSvg';
import { SpinnerWrapper, base, BodyWrapper } from './Spinner.styles';
import type { SpinnerProps } from './Spinner.types';
import { useInnerProps } from './hooks';
import { classes } from './Spinner.tokens';

export const spinnerRoot = (Root: RootProps<HTMLDivElement, SpinnerProps>) =>
    forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
        const { id, width, height, style, children, ...rest } = props;

        const innerProps = useInnerProps(props, {
            wrapperWidth: 'auto',
            wrapperHeight: 'auto',
            svgWidth: 'var(--plasma-spinner-size)',
            svgHeight: 'var(--plasma-spinner-size)',
            color: 'currentColor',
        });

        const uniqId = safeUseId;
        const innerId = id || uniqId();

        const rootStyle =
            width && height ? { ...style, width: innerProps.wrapperWidth, height: innerProps.wrapperHeight } : style;

        return (
            <Root ref={ref} id={innerId} {...rest} style={rootStyle}>
                <SpinnerWrapper
                    className={classes.spinnerWrapper}
                    width={innerProps.wrapperWidth}
                    height={innerProps.wrapperHeight}
                >
                    <SpinnerSvg
                        id={innerId}
                        width={innerProps.svgWidth}
                        height={innerProps.svgHeight}
                        color={innerProps.color}
                    />
                </SpinnerWrapper>

                <BodyWrapper>{children}</BodyWrapper>
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

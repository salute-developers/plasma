import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';
import type { RootProps } from 'src/engines/types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { SpinnerSvg } from './SpinnerSvg';
import { SpinnerWrapper, base } from './Spinner.styles';
import type { SpinnerProps } from './Spinner.types';
import { useInnerProps } from './hooks';

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

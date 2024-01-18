import React from 'react';
import type { FC, HTMLAttributes } from 'react';
import { styled } from '@linaria/react';

import { applySkeletonGradient, getSkeletonColor } from '../../../mixins';
import { cx } from '../../../utils';

export interface WithSkeletonProps extends HTMLAttributes<HTMLElement> {
    /**
     * Применить скелетон
     */
    skeleton?: boolean;
}

/**
 * Делает компонент скелетоном - у него заменяется фоновый цвет,
 * добавляется градиент и текст становится на 100% прозрачным.
 */

export const withSkeleton = <P extends WithSkeletonProps>(Component: FC<P>) => ({
    skeleton,
    className,
    ...props
}: P) => {
    const skeletonClass = skeleton ? 'apply-skeleton-gradient' : undefined;
    const skeletonGradientColor = getSkeletonColor({ lighter: true });
    const Wrapper = styled.div`
        display: contents;

        .apply-skeleton-gradient {
            ${applySkeletonGradient(skeletonGradientColor)};
        }
    `;

    const componentProps = {
        ...props,
        className: cx(skeletonClass, className),
    } as P;

    return (
        <>
            <Wrapper>
                <Component {...componentProps} />
            </Wrapper>
        </>
    );
};

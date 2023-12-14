import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import type { RootProps } from '../../engines';

import { StyledDivImg, StyledImg, StyledRoot } from './Image.styles';
import type { ImageProps } from './Image.types';

/**
 * Компонент для отображения картинок.
 */
export const imageRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, ImageProps>(
        ({ src, srcSet, sizes, ratio, customRatio, alt, width, height, base = 'img', ...rest }, outerRootRef) => {
            const rootCustomRatio = customRatio ? `${customRatio}%` : 'unset';

            return (
                <Root ref={outerRootRef}>
                    <StyledRoot $ratio={ratio} $customRatio={rootCustomRatio} $width={width} $height={height} {...rest}>
                        {base === 'img' && <StyledImg src={src} srcSet={srcSet} sizes={sizes} alt={alt} />}
                        {base === 'div' && (
                            <StyledDivImg style={{ backgroundImage: `url(${src})` }} role="img" aria-label={alt} />
                        )}
                    </StyledRoot>
                </Root>
            );
        },
    );

export const imageConfig = {
    name: 'Image',
    tag: 'div',
    layout: imageRoot,
    base: '',
    variations: {},
    defaults: {},
};

import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import type { RootProps } from '../../engines';

import { StyledDivImg, StyledImg, base } from './Image.styles';
import type { ImageProps } from './Image.types';
import { ratios } from './Image.utils';

/**
 * Компонент для отображения картинок.
 */
export const imageRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, ImageProps>(
        (
            { src, srcSet, sizes, ratio, customRatio, alt, width, height, base = 'img', style, ...rest },
            outerRootRef,
        ) => {
            const widthToken = {
                '--plasma_private-image-width': width || '100%',
            };
            const heightToken = {
                '--plasma_private-image-height': height || '0',
            };
            const rootCustomRatio = customRatio ? `${customRatio}%` : 'unset';
            const ratioToken = {
                '--plasma_private-image-pading-bottom': ratio ? `${ratios[ratio]}%` : rootCustomRatio,
            };

            return (
                <Root
                    ref={outerRootRef}
                    style={{
                        ...style,
                        ...widthToken,
                        ...heightToken,
                        ...ratioToken,
                    }}
                    {...rest}
                >
                    {base === 'img' && <StyledImg src={src} srcSet={srcSet} sizes={sizes} alt={alt} />}
                    {base === 'div' && (
                        <StyledDivImg style={{ backgroundImage: `url(${src})` }} role="img" aria-label={alt} />
                    )}
                </Root>
            );
        },
    );

export const imageConfig = {
    name: 'Image',
    tag: 'div',
    layout: imageRoot,
    base,
    variations: {},
    defaults: {},
};

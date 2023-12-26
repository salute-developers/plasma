import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { component } from '../../../../engines';
import type { RootProps } from '../../../../engines';
import { imageConfig } from '../../../Image';
import type { ImageProps } from '../../../Image';
import { classes } from '../../Header.tokens';

import { base as sizeCSS } from './variations/_size/base';

// INFO: Omit 'onResize' | 'onResizeCapture' | 'nonce'
// because this types coming with @types/react@18.0.25 and breaks react@17.0.2 with @types/react@18.0.18
export type HeaderLogoProps = Omit<
    ImageProps,
    'height' | 'width' | 'ratio' | 'customRatio' | 'onResize' | 'onResizeCapture' | 'nonce'
>;

// issue #823
const Image = component(imageConfig);

/**
 * Компонент для размещения логотипа.
 */
export const headerLogoRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, HeaderLogoProps>((props, outerRootRef) => {
        return (
            <Root ref={outerRootRef}>
                <Image className={classes.headerLogoImage} {...props} />
            </Root>
        );
    });

export const headerLogoConfig = {
    name: 'HeaderLogo',
    tag: 'div',
    layout: headerLogoRoot,
    base: '',
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};

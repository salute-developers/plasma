import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../Typography.types';
import { base } from '../Typography.styles';
import { typographyRootCompose } from '../TypographyRoot';

export type DsplProps = FontProps;

export const dsplRoot = typographyRootCompose({ defaultBold: true });

export const dsplConfig = {
    name: 'Dspl',
    tag: 'div',
    layout: dsplRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};

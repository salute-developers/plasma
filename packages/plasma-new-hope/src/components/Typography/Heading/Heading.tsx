import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../Typography.types';
import { base } from '../Typography.styles';
import { typographyRootCompose } from '../Typography';

export type HeadingProps = FontProps;

export const headingRoot = typographyRootCompose({ defaultBold: true });

export const headingConfig = {
    name: 'Heading',
    tag: 'div',
    layout: headingRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'h1',
    },
};

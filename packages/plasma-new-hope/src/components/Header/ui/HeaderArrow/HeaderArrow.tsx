import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { component, mergeConfig } from '../../../../engines';
import type { RootProps } from '../../../../engines';
import { buttonConfig } from '../../../Button';
import { classes, tokens } from '../../Header.tokens';
import { IconChevronLeft } from '../../../_Icon';
import { cx } from '../../../../utils';

import type { HeaderArrowProps } from './HeaderArrow.types';
import { base } from './HeaderArrow.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

/**
 * Кнопка-стрелка с возможностью отображения в двух типах - "назад" или "свернуть".
 */
export const headerArrowRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, HeaderArrowProps>((props, outerRootRef) => {
        const { arrow, iconSize = 's', ...rest } = props;

        const minimizeClass = arrow === 'minimize' ? classes.headerArrowIconMinimize : undefined;

        return (
            <Root ref={outerRootRef}>
                <Button view="clear" size="s" tabIndex={-1} className={classes.headerArrow} {...rest}>
                    <IconChevronLeft
                        size={iconSize}
                        sizeCustomProperty={tokens.headerArrowIconSize}
                        className={cx(classes.headerArrowIcon, minimizeClass)}
                        color="inherit"
                        {...props}
                    />
                </Button>
            </Root>
        );
    });

export const headerArrowConfig = {
    name: 'HeaderArrow',
    tag: 'div',
    layout: headerArrowRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};

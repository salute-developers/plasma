import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { buttonConfig, component, cx, mergeConfig, RootProps } from '@salutejs/plasma-new-hope';

import { classes, tokens } from '../../Header.tokens';

import type { HeaderArrowProps } from './HeaderArrow.types';
import { base } from './HeaderArrow.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { IconChevronLeft } from './_Icon';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

/**
 * Кнопка-стрелка с возможностью отображения в двух типах - "назад" или "свернуть".
 */
export const headerArrowRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, HeaderArrowProps>((props, outerRootRef) => {
        const { arrow, iconSize = 's', value, ...rest } = props;

        const minimizeClass = arrow === 'minimize' ? classes.headerArrowIconMinimize : undefined;

        return (
            <Root ref={outerRootRef}>
                <Button
                    view="clear"
                    size="s"
                    tabIndex={-1}
                    className={classes.headerArrow}
                    value={value as string}
                    {...rest}
                >
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

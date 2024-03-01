import React, { forwardRef } from 'react';

import { cx } from '../../../../utils';
import { RootProps } from '../../../../engines';
import { IconClose } from '../../../_Icon';
import { classes } from '../../Panel.tokens';

import { PanelHeaderProps, placements } from './PanelHeader.types';
import { StyledHeader, ButtonWrapper, CloseIconWrapper } from './PanelHeader.styles';
import { base as viewCSS } from './variations/_view/base';

export const panelHeaderRoot = (Root: RootProps<HTMLDivElement, PanelHeaderProps>) =>
    forwardRef<HTMLDivElement, PanelHeaderProps>(
        (
            { children, actions, view, className, onClose, hasClose = 'true', closePlacement = 'right', ...rest },
            outerRef,
        ) => {
            const hasHeaderClass = children ? undefined : classes.hasHeader;
            const isRightCloseClass = closePlacement === placements.right ? classes.isRightClose : undefined;

            return (
                <Root ref={outerRef} view={view} className={cx(className, hasHeaderClass, isRightCloseClass)} {...rest}>
                    {children && <StyledHeader>{children}</StyledHeader>}
                    {actions && <ButtonWrapper>{actions}</ButtonWrapper>}
                    {hasClose && (
                        <ButtonWrapper placement={closePlacement}>
                            <CloseIconWrapper view="clear" size="s" onClick={onClose}>
                                <IconClose size="s" color="inherit" />
                            </CloseIconWrapper>
                        </ButtonWrapper>
                    )}
                </Root>
            );
        },
    );

export const panelHeaderConfig = {
    name: 'PanelHeader',
    tag: 'div',
    layout: panelHeaderRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};

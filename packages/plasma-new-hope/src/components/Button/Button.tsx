import React, { forwardRef } from 'react';
import type { CSSProperties } from 'react';

import type { RootProps } from '../../engines';
import { convertRoundnessMatrix } from '../../utils/roundness';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as focusedCSS } from './variations/_focused/base';
import { base as stretchingCSS } from './variations/_stretching/base';
import { base as blurredCSS } from './variations/_blurred/base';
import type { ButtonProps, ContentPlacementMapper } from './Button.types';
import {
    base,
    ButtonText,
    ButtonValue,
    Loader,
    LoadWrap,
    StyledContentLeft,
    StyledContentRight,
    StyledSpinner,
} from './Button.styles';
import { classes, tokens } from './Button.tokens';

export const buttonRoot = (Root: RootProps<HTMLButtonElement, ButtonProps>) =>
    forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        const {
            children,
            view,
            size,
            text,
            value,
            contentLeft,
            contentRight,
            contentPlacing = 'default',
            isLoading,
            loader,
            stretch,
            square,
            pin,
            disabled,
            focused,
            outlined,
            className,
            blur,
            style,
            stretching = 'auto',
            ...rest
        } = props;

        const txt = typeof children === 'string' ? children : text;

        const stretchingClass = stretch
            ? classes.filledStretching
            : classes[`${stretching}Stretching` as keyof typeof classes];
        const contentRelaxedClass = contentPlacing === 'relaxed' ? classes.contentRelaxed : undefined;
        const squareClass = square ? classes.buttonSquare : undefined;
        const isLoadingClass = isLoading ? classes.buttonLoading : undefined;
        const buttonBorderRadius = pin
            ? convertRoundnessMatrix(pin, `var(${tokens.buttonRadius})`, `var(${tokens.buttonHeight})`)
            : `var(${tokens.buttonRadius}, calc(var(${tokens.buttonHeight}) / 4))`;

        const contentPlacingMapper: ContentPlacementMapper = {
            default: 'center',
            relaxed: 'space-between',
        };

        const contentPlacementValue = contentPlacing ? contentPlacingMapper[contentPlacing] : 'center';

        return (
            <Root
                type="button"
                ref={ref}
                view={view}
                size={size}
                value={value}
                disabled={disabled}
                focused={focused || outlined}
                contentPlacing={contentPlacing}
                className={cx(squareClass, stretchingClass, classes.buttonItem, isLoadingClass, className)}
                style={
                    {
                        ...style,
                        '--plasma_computed-btn-br': buttonBorderRadius,
                        '--plasma_private-blur': blur,
                    } as CSSProperties
                }
                {...rest}
            >
                <LoadWrap contentPlacing={contentPlacementValue} isLoading={isLoading}>
                    {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                    {txt ? <ButtonText className={contentRelaxedClass}>{txt}</ButtonText> : children}
                    {value && <ButtonValue>{value}</ButtonValue>}
                    {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
                </LoadWrap>
                {isLoading && <Loader>{loader || <StyledSpinner />}</Loader>}
            </Root>
        );
    });

export const buttonConfig = {
    name: 'Button',
    tag: 'button',
    layout: buttonRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        focused: {
            css: focusedCSS,
            // TODO: isLoading => disabled
        },
        blurred: {
            css: blurredCSS,
        },
        stretching: {
            css: stretchingCSS,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
        stretching: 'auto',
    },
};

import React, { useState, useEffect, forwardRef, useRef } from 'react';
import styled, { css } from 'styled-components';
import { caption, dark02, shadows, useForkRef, white } from '@salutejs/plasma-core';
import { usePopper } from 'react-popper';

/** Направление раскрытия тултипа */
export type BasePlacement = 'top' | 'bottom' | 'right' | 'left';
export type VariationPlacement = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
export type Placement = BasePlacement | VariationPlacement;

const ESCAPE_KEYCODE = 27;

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Текст тултипа.
     */
    text: string;
    /**
     * Видимость тултипа.
     */
    isVisible: boolean;
    /**
     * Направление раскрытия тултипа.
     */
    placement?: Placement;
    /**
     * Видимость стрелки (хвоста).
     */
    arrow?: boolean;
    /**
     * Анимированное появление/сокрытие.
     */
    animated?: boolean;
    /**
     * Событие закрытия тултипа по кнопке Esc.
     */
    onDismiss?: () => void;
}

const offset = [0, 6];

const StyledWrapper = styled.div`
    position: relative;
    display: inline-flex;
`;

const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: inherit;
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

const StyledTooltip = styled.span<Pick<TooltipProps, 'isVisible' | 'animated'>>`
    ${caption};

    position: absolute;
    z-index: 9200;

    padding: 0.375rem 0.5rem;

    background-color: ${dark02};
    border-radius: 0.25rem;
    box-shadow: ${shadows.small};
    color: ${white};

    max-width: 15rem;
    width: max-content;
    word-break: break-word;

    pointer-events: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &[data-popper-placement^='top'] > ${StyledArrow} {
        bottom: -0.25rem;
    }

    &[data-popper-placement^='bottom'] > ${StyledArrow} {
        top: -0.25rem;
    }

    &[data-popper-placement^='left'] > ${StyledArrow} {
        right: -0.25rem;
    }

    &[data-popper-placement^='right'] > ${StyledArrow} {
        left: -0.25rem;
    }

    ${({ animated }) =>
        animated &&
        css`
            transition: opacity 200ms ease-in-out;
        `}

    ${({ isVisible }) =>
        css`
            opacity: ${Number(isVisible)};
        `}
`;

/**
 * Компонент для текстовых подсказок. Основное предназначение — подписи к блокам.
 */
export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
    (
        { id, text, isVisible, arrow = true, animated = true, placement = 'bottom', children, onDismiss, ...rest },
        outerRef,
    ) => {
        const tooltipElement = useRef<HTMLSpanElement>(null);
        const ref = useForkRef(outerRef, tooltipElement);

        const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(null);
        const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

        const { styles, attributes, forceUpdate } = usePopper(wrapperElement, tooltipElement.current, {
            strategy: 'fixed',
            placement,
            modifiers: [
                { name: 'offset', options: { offset: [offset[0], offset[1]] } },
                { name: 'arrow', options: { element: arrowElement } },
            ],
        });

        useEffect(() => {
            const onKeyDown = (event: KeyboardEvent) => {
                if (event.keyCode === ESCAPE_KEYCODE) {
                    onDismiss?.();
                }
            };

            window.addEventListener('keydown', onKeyDown);

            return () => {
                window.removeEventListener('keydown', onKeyDown);
            };
        }, []);

        useEffect(() => {
            if (!isVisible || !forceUpdate) {
                return;
            }

            /*
             * INFO: Метод forceUpdate содержит в себе flushSync и приводит
             * к повторному рендеру компонента, который уже находится в процессе рендера.
             * Данный хак, нужен для того, чтобы это поведение избежать и перенаправить
             * вызов метода в очередь микрозадач.
             */
            Promise.resolve().then(forceUpdate);
        }, [isVisible, forceUpdate, text]);

        return (
            <>
                <StyledTooltip
                    {...attributes.popper}
                    ref={ref}
                    id={id}
                    isVisible={isVisible && Boolean(text?.length)}
                    animated={animated}
                    style={styles.popper}
                    role="tooltip"
                    aria-live="polite"
                    aria-hidden={!isVisible}
                >
                    {arrow && <StyledArrow ref={setArrowElement} style={styles.arrow} {...attributes.arrow} />}
                    {text}
                </StyledTooltip>
                {children && (
                    <StyledWrapper ref={setWrapperElement} {...rest}>
                        {children}
                    </StyledWrapper>
                )}
            </>
        );
    },
);

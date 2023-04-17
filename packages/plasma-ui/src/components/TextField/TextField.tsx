import React, { forwardRef, useCallback, KeyboardEvent, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FieldRoot, FieldPlaceholder, FieldContent, Input, secondary, useForkRef } from '@salutejs/plasma-core';
import type { FieldProps, InputProps } from '@salutejs/plasma-core';

import { FieldHelper, applyInputStyles } from '../Field';
import { spatnavClassNameAttrs } from '../../utils';
import { useThemeContext } from '../../hooks';

import { HiddenDiv } from './HiddenDiv';
import { useTrailingSymbol } from './useTrailingSymbol';

export interface TextFieldProps extends FieldProps, InputProps {
    /**
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Висящие символы справа от курсора
     */
    rightTrailingSymbols?: string;
}

const positionTopMap = {
    l: '1.7rem',
    m: '0.875rem',
};

const StyledInput = styled(Input).attrs(spatnavClassNameAttrs)`
    ${applyInputStyles};

    border-radius: 1rem;

    &::placeholder {
        opacity: 0;
    }

    &:placeholder-shown + ${FieldPlaceholder} {
        color: ${({ status }) => (status ? null : secondary)};
    }
`;

export const RightTrailingSymbols = styled.div`
    position: absolute;
    z-index: -1;

    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
`;

const Field = styled(FieldRoot)<{
    $rightTrailingSymbolsPosition?: number;
    $rightTrailingSymbolsWidth?: number;
    $rightTrailingSymbols?: string;
    $deviceScale?: number;
}>`
    ${({
        $isContentRight,
        $size = 'l',
        $rightTrailingSymbolsPosition = 0,
        $rightTrailingSymbolsWidth = 0,
        $rightTrailingSymbols = '',
        $deviceScale = 1,
    }) => {
        const paddingRightBase = $isContentRight ? '4rem' : '2rem';
        const isSingle = $rightTrailingSymbols.length === 1;

        const rightTrailingSymbolsWidth = isSingle ? 0 : $rightTrailingSymbolsWidth;

        // INFO: Высчитываем значения для увеличения отступа справа.
        // INFO: 12 - база для множителя "на глаз".
        const offsetByDeviceScale = isSingle ? $deviceScale * 12 : rightTrailingSymbolsWidth;

        // INFO: Если у нас есть висящие символы, необходимо увеличить отступ справа.
        const paddingRight = $rightTrailingSymbols ? `calc(${paddingRightBase} + ${offsetByDeviceScale}px)` : null;

        // INFO: Расчитываем значение для позиции left с учетом deviceScale.
        // INFO: 8 - база для множителя "на глаз" для более равмномерного отступа как для 1 символа, так и текста.
        const rightTrailingSymbolsPosition = $rightTrailingSymbolsPosition + $deviceScale * 8;

        return css`
            & > ${StyledInput} {
                padding-right: ${paddingRight};
            }

            ${RightTrailingSymbols} {
                top: ${positionTopMap[$size]};
                left: ${rightTrailingSymbolsPosition}px;
            }

            ${FieldPlaceholder} {
                white-space: ${$rightTrailingSymbols ? 'pre' : null};
            }
        `;
    }}
`;

/**
 * Поле ввода текста.
 */
// eslint-disable-next-line prefer-arrow-callback
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    {
        id,
        size = 'l',
        disabled,
        status,
        label,
        placeholder,
        contentLeft,
        contentRight,
        helperText,
        style,
        className,
        onChange,
        onSearch,
        rightTrailingSymbols,
        value,
        ...rest
    },
    ref,
) {
    const rightTrailingSymbolsRef = useRef<HTMLDivElement>(null);

    const placeLabel = (label || placeholder) as string | undefined;
    const { deviceScale } = useThemeContext();

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            const { maxLength } = event.target;

            if (!onChange || (maxLength !== -1 && event.target.value.length > maxLength)) {
                return;
            }

            onChange(event);
        },
        [onChange],
    );

    const handleSearch = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.keyCode === 13 && onSearch) {
                onSearch((event.target as HTMLInputElement).value, event);
            }
        },
        [onSearch],
    );

    const rightTrailingSymbolsWidth = rightTrailingSymbolsRef?.current?.clientWidth || 0;

    const { inputRef, hiddenDivRef, rightTrailingSymbolsPosition } = useTrailingSymbol({
        size,
        contentRight,
        contentLeft,
        rightTrailingSymbols,
        value,
        rightTrailingSymbolsWidth,
        deviceScale,
    });

    const forkRef = useForkRef(inputRef, ref);

    const placeholderText = rightTrailingSymbols && !value ? `${placeLabel}  ${rightTrailingSymbols}` : placeLabel;

    return (
        <Field
            $size={size}
            $disabled={disabled}
            $isContentLeft={Boolean(contentLeft)}
            $isContentRight={Boolean(contentRight)}
            $isHelper={Boolean(helperText)}
            status={status}
            style={style}
            className={className}
            $rightTrailingSymbolsPosition={rightTrailingSymbolsPosition}
            $rightTrailingSymbolsWidth={rightTrailingSymbolsWidth}
            $rightTrailingSymbols={rightTrailingSymbols}
            $deviceScale={deviceScale}
        >
            {contentLeft && <FieldContent pos="left">{contentLeft}</FieldContent>}

            <StyledInput
                $size={size}
                ref={forkRef}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                aria-describedby={id ? `${id}-helpertext` : undefined}
                onChange={handleChange}
                onKeyUp={onSearch && handleSearch}
                value={value}
                {...rest}
            />

            {placeLabel && size === 'l' && <FieldPlaceholder htmlFor={id}>{placeholderText}</FieldPlaceholder>}

            {contentRight && <FieldContent pos="right">{contentRight}</FieldContent>}

            {helperText && <FieldHelper id={id ? `${id}-helpertext` : undefined}>{helperText}</FieldHelper>}

            {value && <RightTrailingSymbols ref={rightTrailingSymbolsRef}>{rightTrailingSymbols}</RightTrailingSymbols>}

            <HiddenDiv ref={hiddenDivRef}>{value}</HiddenDiv>
        </Field>
    );
});

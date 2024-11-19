import React, { forwardRef } from 'react';

import { StyledChip, TextChip } from './TextFieldChip.styles';
import type { TextFieldChipProps } from './TextFieldChip.types';

/**
 * Чип, отображающий выбранный элемент
 */
export const TextFieldChip = forwardRef<
    HTMLButtonElement,
    TextFieldChipProps & { _forceChipManipulationWithReadonly: any }
>(
    (
        { id, text, disabled, readOnly, onClick, onClear, onKeyDown, _forceChipManipulationWithReadonly, chipType },
        ref,
    ) => {
        const onClearHandle = () => onClear(id);

        const onKeyDownHandle = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            onKeyDown?.(event, id);
        };

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onClick) {
                onClick(e);
            }

            if (onClear) {
                onClear(id);
            }
        };

        return chipType === 'default' ? (
            <StyledChip
                ref={ref}
                tabIndex={-1}
                disabled={disabled}
                readOnly={readOnly}
                onClick={onClick}
                onClear={onClearHandle}
                onKeyDown={onKeyDownHandle}
                text={`${text}`}
                // TODO: #1547
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _forceChipManipulationWithReadonly={_forceChipManipulationWithReadonly}
            />
        ) : (
            <TextChip ref={ref} tabIndex={-1} onClick={handleClick} onKeyDown={onKeyDownHandle}>
                {text}
            </TextChip>
        );
    },
);

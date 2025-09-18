import React, { FC, KeyboardEvent } from 'react';
import { TextChip } from 'src/components/TextField/ui/TextFieldChip/TextFieldChip.styles';

import { StyledChips } from '../../TextField.styles';
import { classes } from '../../TextField.tokens';

import { StyledChip } from './TextFieldChipNew.styles';

export const TextFieldChipNew: FC<{
    chips: { value: string; label: string; disabled: boolean }[];
    onChipClick: (chip: { value: string; label: string; disabled: boolean }) => void;
    getRef: (...e: any) => void;
    handleChipKeyDown: (event: KeyboardEvent<HTMLButtonElement>, chipId: string, chipIndex: number) => void;
    onChipClear: (clearId: string, index: number) => void;
    readOnly: boolean;
    chipType?: string;
    view?: string;
    _forceChipManipulationWithReadonly?: any;
}> = ({
    chips,
    onChipClick,
    getRef,
    handleChipKeyDown,
    onChipClear,
    readOnly,
    chipType,
    view,
    _forceChipManipulationWithReadonly,
}) => {
    return (
        <StyledChips className={classes.chipsWrapper}>
            {chips.map(({ value, label, disabled }, index) => {
                const chipId = `${index}_${value}`;

                const onKeyDownHandle = (event: React.KeyboardEvent<HTMLButtonElement>) => {
                    if (handleChipKeyDown) {
                        handleChipKeyDown(event, chipId, index);
                    }

                    if (event.key === 'Enter' || event.key === 'Backspace') {
                        if (onChipClick) {
                            onChipClick({ value, label, disabled });
                        }
                    }
                };

                const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
                    event.stopPropagation();

                    if (onChipClick) {
                        onChipClick({ value, label, disabled });
                    }

                    if (onChipClear) {
                        onChipClear(chipId, index);
                    }
                };

                return chipType === 'default' ? (
                    <StyledChip
                        key={chipId}
                        ref={(element) => getRef(element, index)}
                        tabIndex={-1}
                        disabled={disabled}
                        hasClear={!disabled}
                        readOnly={readOnly}
                        onClick={handleClick}
                        onKeyDown={onKeyDownHandle}
                        text={label}
                        view={view}
                        // TODO: #1547
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        _forceChipManipulationWithReadonly={_forceChipManipulationWithReadonly}
                    />
                ) : (
                    <TextChip tabIndex={-1} onClick={handleClick} onKeyDown={onKeyDownHandle}>
                        {label}
                    </TextChip>
                );
            })}
        </StyledChips>
    );
};

import React, { forwardRef } from 'react';

import { Hint, HintTargetWrapper, HintIconWrapper } from '../../TextField.styles';
import { IconInfoCircleOutline } from '../../../_Icon';
import { safeUseId } from '../../../../utils';

import type { TextFieldHintProps } from './Hint.types';

export const HintComponent = forwardRef<HTMLDivElement, TextFieldHintProps>(
    (
        {
            hintText,
            isHintVisible,
            hintTrigger,
            hintTargetIcon,
            hintPlacement,
            hintHasArrow,
            hintOffset,
            hintWidth,
            hintContentLeft,
            handleHintShow,
            handleHintHide,
            handleHintClick,
        },
        ref,
    ) => {
        const hintId = safeUseId();

        return (
            <Hint
                ref={ref}
                text={String(hintText)}
                opened={isHintVisible}
                target={
                    <HintTargetWrapper>
                        <HintIconWrapper
                            id={hintId}
                            {...(hintTrigger === 'hover'
                                ? {
                                      onMouseEnter: handleHintShow,
                                      onMouseLeave: handleHintHide,
                                  }
                                : { onClick: handleHintClick })}
                        >
                            {hintTargetIcon || (
                                <IconInfoCircleOutline
                                    color="inherit"
                                    sizeCustomProperty="--plasma-private-text-field-hint-icon-size"
                                />
                            )}
                        </HintIconWrapper>
                    </HintTargetWrapper>
                }
                placement={hintPlacement}
                hasArrow={hintHasArrow}
                offset={hintOffset}
                minWidth={hintWidth}
                maxWidth={hintWidth}
                contentLeft={hintContentLeft}
                frame={hintId}
            />
        );
    },
);

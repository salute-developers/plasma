import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';

import { Hint, HintIconWrapper, HintTargetWrapper } from '../../TextArea.styles';
import { IconInfoCircleOutline } from '../../../_Icon';
import { tokens } from '../../TextArea.tokens';

import type { TextAreaHintProps } from './Hint.types';

export const HintComponent = forwardRef<HTMLDivElement, TextAreaHintProps>(
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
            isInnerLabel,
            size,
            handleHintShow,
            handleHintHide,
            handleHintClick,
        },
        ref,
    ) => {
        const hintId = safeUseId();

        const getInfoIconSize = () => {
            if (!isInnerLabel || size === 'xs') {
                return 'xs';
            }

            return 's';
        };

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
                                    size={getInfoIconSize()}
                                    color="inherit"
                                    sizeCustomProperty={tokens.hintCustomIconTargetSize}
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

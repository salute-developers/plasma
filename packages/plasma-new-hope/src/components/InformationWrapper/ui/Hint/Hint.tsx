import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';

import { Hint, HintTargetWrapper, HintIconWrapper } from '../../InformationWrapper.styles';
import { IconInfoCircleOutline } from '../../../_Icon';
import { tokens } from '../../InformationWrapper.tokens';

import type { HintProps } from './Hint.types';

export const HintComponent = forwardRef<HTMLDivElement, HintProps>(
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
            withoutLabel,
            size,
            handleHintShow,
            handleHintHide,
            handleHintClick,
        },
        ref,
    ) => {
        const hintId = safeUseId();

        const getInfoIconSize = () => {
            if (!withoutLabel || size === 'xs') {
                return 'xs';
            }

            return 's';
        };

        const hintTriggerHandler =
            hintTrigger === 'hover'
                ? {
                      onMouseEnter: handleHintShow,
                      onMouseLeave: handleHintHide,
                  }
                : { onClick: handleHintClick };

        return (
            <Hint
                ref={ref}
                text={String(hintText)}
                opened={isHintVisible}
                target={
                    <HintTargetWrapper>
                        <HintIconWrapper id={hintId} {...hintTriggerHandler}>
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

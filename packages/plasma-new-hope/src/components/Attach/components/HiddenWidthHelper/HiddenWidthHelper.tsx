import React, { forwardRef } from 'react';

import { AttachButton } from '../AttachButton';
import { StyledAttachButtonWrapper } from '../../Attach.styles';
import { MoreTrigger } from '../../ui';

import { HiddenRoot, HiddenWrapper } from './HiddenWidthHelper.styles';

type HiddenWidthHelperProps = {
    hideButtonOnAttach?: boolean;
    filesLength?: number;
    hasHiddenFiles?: boolean;
    size?: string;
};

export const HiddenWidthHelper = forwardRef<HTMLDivElement, HiddenWidthHelperProps>(
    ({ hideButtonOnAttach, filesLength, hasHiddenFiles, size }, wrapperRef) => {
        return (
            <HiddenRoot>
                {(!hideButtonOnAttach || !filesLength) && (
                    <StyledAttachButtonWrapper>
                        <AttachButton />
                    </StyledAttachButtonWrapper>
                )}

                <HiddenWrapper ref={wrapperRef} />
                {hasHiddenFiles && <MoreTrigger size={size} />}
            </HiddenRoot>
        );
    },
);

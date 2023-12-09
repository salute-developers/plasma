import React, { forwardRef } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../engines/types';
import { SegmentProvider } from '../SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as filledBackgroundCSS } from './variations/_filledBackgound/base';
import type { SegmentGroupProps } from './SegmentGroup.types';
import { StyledContent, base } from './SegmentGroup.styles';

export const segmentGroupRoot = (Root: RootProps<HTMLLabelElement, SegmentGroupProps>) =>
    forwardRef<HTMLLabelElement, SegmentGroupProps>((props, outerRef) => {
        const { size, view, id, selectionMode, pilled, filledBackground, children, ...rest } = props;

        const uniqId = safeUseId();
        const segmentGroupId = id || uniqId;

        const pilledAttr = view !== 'clear' && pilled;
        const filledBackgroundAttr = view !== 'clear' && filledBackground;

        return (
            <Root
                view={view}
                size={size}
                id={segmentGroupId}
                ref={outerRef}
                data-pilled={pilledAttr}
                pilled={pilledAttr}
                data-filled={filledBackgroundAttr}
                filledBackground={filledBackgroundAttr}
                {...rest}
            >
                <StyledContent>
                    <SegmentProvider outerSelectionMode={selectionMode}>{children}</SegmentProvider>
                </StyledContent>
            </Root>
        );
    });

export const segmentGroupConfig = {
    name: 'SegmentGroup',
    tag: 'div',
    layout: segmentGroupRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
        filledBackground: {
            css: filledBackgroundCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'clear',
        size: 'xs',
    },
};

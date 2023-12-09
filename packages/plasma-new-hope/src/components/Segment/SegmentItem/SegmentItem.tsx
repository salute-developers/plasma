import React, { forwardRef, useMemo } from 'react';
import type { MouseEvent } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../engines/types';
import { cx, extractTextFrom } from '../../../utils';
import { classes } from '../tokens';
import { useSegment } from '../SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as filledBackgroundCSS } from './variations/_filledBackgound/base';
import type { SegmentItemProps } from './SegmentItem.types';
import { StyledContent, base } from './SegmentItem.styles';

export const segmentItemRoot = (Root: RootProps<HTMLLabelElement, SegmentItemProps>) =>
    forwardRef<HTMLLabelElement, SegmentItemProps>((props, outerRef) => {
        const {
            size,
            view,
            focused,
            id,
            label,
            value,
            pilled,
            filledBackground,
            customHandleSelect,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;
        const { handleSelect, selectedSegmentItems } = useSegment();

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const ariaLabelDefault = useMemo(() => extractTextFrom(label), [label]);
        const pilledAttr = view !== 'clear' && pilled;
        const filledBackgroundAttr = view !== 'clear' && filledBackground;

        const isSelected = selectedSegmentItems.includes(value || ariaLabelDefault);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const handleSelectSegment = (event: MouseEvent<HTMLLabelElement>) => {
            customHandleSelect?.(event);
            handleSelect(value || ariaLabelDefault);
        };

        return (
            <Root
                view={view}
                size={size}
                focused={focused}
                id={segmentId}
                ref={outerRef}
                aria-label={ariaLabelExternal || ariaLabelDefault}
                value={value}
                data-pilled={pilledAttr}
                pilled={pilledAttr}
                data-filled={filledBackgroundAttr}
                filledBackground={filledBackgroundAttr}
                className={cx(selectedClass)}
                onClick={(event) => handleSelectSegment(event)}
                {...rest}
            >
                <StyledContent>{label || value}</StyledContent>
            </Root>
        );
    });

export const segmentItemConfig = {
    name: 'SegmentItem',
    tag: 'label',
    layout: segmentItemRoot,
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

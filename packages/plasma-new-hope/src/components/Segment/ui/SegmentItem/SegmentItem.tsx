import React, { forwardRef, useCallback, useMemo } from 'react';
import type { MouseEvent } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines/types';
import { cx, extractTextFrom } from '../../../../utils';
import { classes } from '../../tokens';
import { useSegmentInner } from '../../SegmentProvider/SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import type { SegmentItemProps } from './SegmentItem.types';
import { StyledContent, base } from './SegmentItem.styles';

export const segmentItemRoot = (Root: RootProps<HTMLLabelElement, SegmentItemProps>) =>
    forwardRef<HTMLLabelElement, SegmentItemProps>((props, outerRef) => {
        const {
            size,
            view,
            id,
            label,
            value,
            pilled,
            customHandleSelect,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;
        const { selectionMode, disabledGroup, handleSelect, selectedSegmentItems } = useSegmentInner();

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const ariaLabelDefault = useMemo(() => extractTextFrom(label), [label]);
        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.segmentPilled : undefined;

        const isSelected = selectedSegmentItems?.includes(value || ariaLabelDefault);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const handleSelectSegment = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                if (disabledGroup) {
                    return;
                }

                customHandleSelect?.(event);
                handleSelect?.(value || ariaLabelDefault);
            },
            [selectionMode],
        );

        return (
            <Root
                view={view}
                size={size}
                id={segmentId}
                ref={outerRef}
                aria-label={ariaLabelExternal || ariaLabelDefault}
                value={value}
                pilled={pilledAttr}
                className={cx(selectedClass, pilledClass)}
                onClick={handleSelectSegment}
                tabIndex={disabledGroup ? -1 : 0}
                disabled={disabledGroup}
                {...rest}
            >
                <StyledContent>{label || value}</StyledContent>
            </Root>
        );
    });

export const segmentItemConfig = {
    name: 'SegmentItem',
    tag: 'button',
    layout: segmentItemRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'clear',
        size: 'xs',
    },
};

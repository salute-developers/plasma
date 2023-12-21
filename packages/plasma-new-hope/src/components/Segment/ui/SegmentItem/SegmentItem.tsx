import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines/types';
import { cx, extractTextFrom } from '../../../../utils';
import { classes } from '../../tokens';
import { useSegment } from '../../SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as selectedViewCSS } from './variations/_selectedView/base';
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
            selectedView,
            customHandleSelect,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;
        const { selectionMode, viewGroup, disabledGroup, handleSelect, selectedSegmentItems } = useSegment();

        const [selectedViewAttr, setSelectedViewAttr] = useState(false);

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const ariaLabelDefault = useMemo(() => extractTextFrom(label), [label]);
        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.segmentPilled : undefined;

        const isSelected = selectedSegmentItems.includes(value || ariaLabelDefault);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const handleSelectSegment = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                if (disabledGroup) {
                    return;
                }

                customHandleSelect?.(event);
                handleSelect(value || ariaLabelDefault);
            },
            [selectionMode],
        );

        useEffect(() => {
            setSelectedViewAttr(viewGroup !== 'clear' || view !== 'clear');
        }, [view, viewGroup]);

        return (
            <Root
                view={view}
                size={size}
                id={segmentId}
                ref={outerRef}
                selectedView={selectedView || 'default'}
                data-selected-view={selectedViewAttr}
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
        selectedView: {
            css: selectedViewCSS,
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

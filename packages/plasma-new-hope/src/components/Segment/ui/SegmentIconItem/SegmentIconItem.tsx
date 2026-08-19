import React, { forwardRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines/types';
import { useForkRef } from 'src/hooks';
import { cx, safeUseId } from 'src/utils';

import { classes } from '../../tokens';
import { dividerOrientationMap, useSegmentInner } from '../../SegmentProvider/SegmentProvider';
import { StyledDivider } from '../SegmentGroup/SegmentGroup.styles';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import type { SegmentIconItemProps } from './SegmentIconItem.types';
import { StyledIcon, base } from './SegmentIconItem.styles';

export const segmentIconItemRoot = (Root: RootProps<HTMLButtonElement, SegmentIconItemProps>) =>
    forwardRef<HTMLButtonElement, SegmentIconItemProps>((props, outerRef) => {
        const {
            style,
            size,
            view = 'default',
            className,
            id,
            icon,
            value,
            pilled,
            customHandleSelect,
            'aria-label': ariaLabelExternal,
            ...rest
        } = props;
        const {
            disabledGroup,
            handleSelect,
            selectedSegmentItems,
            hasDivider,
            orientation,
            selectionMode,
            registerItemRef,
        } = useSegmentInner();

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const pilledClass = pilled ? classes.segmentPilled : undefined;
        const multipleSelectionClass = selectionMode === 'multiple' ? classes.segmentMultipleSelection : undefined;

        const isSelected = selectedSegmentItems?.includes(value);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const setItemRef = useCallback(
            (node: HTMLButtonElement | null) => {
                registerItemRef(value, node);
            },
            [value, registerItemRef],
        );
        const ref = useForkRef(outerRef, setItemRef);

        const handleSelectSegment = (event: MouseEvent<HTMLButtonElement>) => {
            if (disabledGroup) {
                return;
            }

            customHandleSelect?.(event);
            handleSelect?.(value);
        };

        return (
            <>
                {hasDivider && <StyledDivider orientation={dividerOrientationMap[orientation]} data-segment-divider />}

                <Root
                    view={view}
                    size={size}
                    id={segmentId}
                    ref={ref}
                    aria-label={ariaLabelExternal || value}
                    value={value}
                    pilled={pilled}
                    className={cx(classes.segmentItem, selectedClass, pilledClass, multipleSelectionClass, className)}
                    onClick={handleSelectSegment}
                    tabIndex={disabledGroup ? -1 : 0}
                    disabled={disabledGroup}
                    style={style}
                    {...rest}
                >
                    <StyledIcon>{icon}</StyledIcon>
                </Root>
            </>
        );
    });

export const segmentIconItemConfig = {
    name: 'SegmentIconItem',
    tag: 'button',
    layout: segmentIconItemRoot,
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
        view: 'default',
        size: 'xs',
    },
};

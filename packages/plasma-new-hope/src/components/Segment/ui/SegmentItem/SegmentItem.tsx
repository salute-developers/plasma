import React, { forwardRef, useCallback, useMemo } from 'react';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines/types';
import { useForkRef } from 'src/hooks';
import { cx, safeUseId, extractTextFrom } from 'src/utils';

import { classes } from '../../tokens';
import { dividerOrientationMap, useSegmentInner } from '../../SegmentProvider/SegmentProvider';
import { StyledDivider } from '../SegmentGroup/SegmentGroup.styles';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import type { SegmentItemProps } from './SegmentItem.types';
import { StyledContent, base, LeftContent, RightContent } from './SegmentItem.styles';

export const segmentItemRoot = (Root: RootProps<HTMLButtonElement, SegmentItemProps>) =>
    forwardRef<HTMLButtonElement, SegmentItemProps>((props, outerRef) => {
        const {
            style,
            size,
            view = 'default',
            className,
            id,
            label,
            value,
            pilled,
            contentLeft,
            contentRight,
            maxItemWidth: maxWidth = 'auto',
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

        const ariaLabelDefault = useMemo(() => extractTextFrom(label), [label]);
        const pilledClass = pilled ? classes.segmentPilled : undefined;
        const xsSize = size === 'xs' ? classes.segmentXsSize : undefined;
        const truncateClass = maxWidth !== 'auto' ? classes.segmentTruncate : undefined;
        const multipleSelectionClass = selectionMode === 'multiple' ? classes.segmentMultipleSelection : undefined;

        const itemValue = value || ariaLabelDefault;
        const isSelected = selectedSegmentItems?.includes(itemValue);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const setItemRef = useCallback(
            (node: HTMLButtonElement | null) => {
                registerItemRef(itemValue, node);
            },
            [itemValue, registerItemRef],
        );
        const ref = useForkRef(outerRef, setItemRef);

        const handleSelectSegment = (event: MouseEvent<HTMLButtonElement>) => {
            if (disabledGroup) {
                return;
            }

            customHandleSelect?.(event);
            handleSelect?.(itemValue);
        };

        return (
            <>
                {hasDivider && <StyledDivider orientation={dividerOrientationMap[orientation]} data-segment-divider />}

                <Root
                    view={view}
                    size={size}
                    id={segmentId}
                    ref={ref}
                    aria-label={ariaLabelExternal || ariaLabelDefault}
                    value={value}
                    pilled={pilled}
                    className={cx(
                        classes.segmentItem,
                        selectedClass,
                        pilledClass,
                        xsSize,
                        truncateClass,
                        multipleSelectionClass,
                        className,
                    )}
                    onClick={handleSelectSegment}
                    tabIndex={disabledGroup ? -1 : 0}
                    disabled={disabledGroup}
                    style={{ ...style, maxWidth }}
                    {...rest}
                >
                    {contentLeft && <LeftContent>{contentLeft}</LeftContent>}
                    <StyledContent>{label || value}</StyledContent>
                    {contentRight && (
                        <RightContent className={typeof contentRight === 'string' ? classes.segmentAdditionalText : ''}>
                            {contentRight}
                        </RightContent>
                    )}
                </Root>
            </>
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
        view: 'default',
        size: 'xs',
    },
};

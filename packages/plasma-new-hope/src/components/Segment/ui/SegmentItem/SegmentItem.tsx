import React, { forwardRef, useMemo } from 'react';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines/types';
import { cx, safeUseId, extractTextFrom } from 'src/utils';

import { classes } from '../../tokens';
import { useSegmentInner } from '../../SegmentProvider/SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import type { SegmentItemProps } from './SegmentItem.types';
import { StyledContent, base, LeftContent, RightContent } from './SegmentItem.styles';

export const segmentItemRoot = (Root: RootProps<HTMLLabelElement, SegmentItemProps>) =>
    forwardRef<HTMLLabelElement, SegmentItemProps>((props, outerRef) => {
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
        const { disabledGroup, handleSelect, selectedSegmentItems } = useSegmentInner();

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const ariaLabelDefault = useMemo(() => extractTextFrom(label), [label]);
        const pilledClass = pilled ? classes.segmentPilled : undefined;
        const xsSize = size === 'xs' ? classes.segmentXsSize : undefined;
        const truncateClass = maxWidth !== 'auto' ? classes.segmentTruncate : undefined;

        const isSelected = selectedSegmentItems?.includes(value || ariaLabelDefault);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const handleSelectSegment = (event: MouseEvent<HTMLButtonElement>) => {
            if (disabledGroup) {
                return;
            }

            customHandleSelect?.(event);
            handleSelect?.(value || ariaLabelDefault);
        };

        return (
            <Root
                view={view}
                size={size}
                id={segmentId}
                ref={outerRef}
                aria-label={ariaLabelExternal || ariaLabelDefault}
                value={value}
                pilled={pilled}
                className={cx(selectedClass, pilledClass, xsSize, truncateClass, className)}
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

import React, { forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines/types';
import { cx, safeUseId } from 'src/utils';

import { classes } from '../../tokens';
import { useSegmentInner } from '../../SegmentProvider/SegmentProvider';

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
        const { disabledGroup, handleSelect, selectedSegmentItems } = useSegmentInner();

        const uniqId = safeUseId();
        const segmentId = id || `label-${uniqId}`;

        const pilledClass = pilled ? classes.segmentPilled : undefined;

        const isSelected = selectedSegmentItems?.includes(value);
        const selectedClass = isSelected ? classes.selectedSegmentItem : undefined;

        const handleSelectSegment = (event: MouseEvent<HTMLButtonElement>) => {
            if (disabledGroup) {
                return;
            }

            customHandleSelect?.(event);
            handleSelect?.(value);
        };

        return (
            <Root
                view={view}
                size={size}
                id={segmentId}
                ref={outerRef}
                aria-label={ariaLabelExternal || value}
                value={value}
                pilled={pilled}
                className={cx(selectedClass, pilledClass, className)}
                onClick={handleSelectSegment}
                tabIndex={disabledGroup ? -1 : 0}
                disabled={disabledGroup}
                style={style}
                {...rest}
            >
                <StyledIcon>{icon}</StyledIcon>
            </Root>
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

import React, { forwardRef } from 'react';
import { safeUseId } from '@salutejs/plasma-new-hope/styled-components';
import type { RootProps } from '@salutejs/plasma-new-hope/styled-components';

import type { BubbleProps } from './Bubble.types';
import { classes } from './Bubble.tokens';
import { base } from './Bubble.styles';
import { BodyGlowFilter, BodyJoin, CloseIcon, DecorStarIcon, SparkleIcon, StarShapeIcon } from './assets/icons';

const placements = ['left', 'right', 'top-left', 'top-right'] as const;

export const bubbleRoot = (Root: RootProps<HTMLDivElement, Omit<BubbleProps, 'opened' | 'content'>>) =>
    forwardRef<HTMLDivElement, BubbleProps>(
        (
            { opened = false, content, placement = 'top-right', className, onClick, 'aria-label': ariaLabel, ...rest },
            ref,
        ) => {
            const resolvedPlacement = placements.includes(placement) ? placement : 'top-right';
            const rootClassName = [opened && classes.opened, className].filter(Boolean).join(' ');
            const glowFilterId = `bubble-union-glow-${safeUseId()}`;

            return (
                <Root ref={ref} className={rootClassName} data-placement={resolvedPlacement} {...rest}>
                    <BodyGlowFilter id={glowFilterId} />
                    <div className={classes.body}>
                        <div className={classes.bodyShape} style={{ filter: `url(#${glowFilterId})` }}>
                            <BodyJoin placement={resolvedPlacement} />
                            <span className={classes.bodyRect} />
                        </div>
                        <div className={classes.content} aria-hidden={!opened}>
                            {content}
                        </div>
                    </div>
                    <button
                        type="button"
                        className={classes.trigger}
                        aria-expanded={opened}
                        aria-label={ariaLabel ?? (opened ? 'Закрыть' : 'Подсказка')}
                        onClick={onClick}
                    >
                        <span className={classes.shapeStar}>
                            <StarShapeIcon filterId={glowFilterId} />
                        </span>
                        <span className={classes.decorStar} aria-hidden>
                            <DecorStarIcon />
                        </span>
                        <span className={classes.icon}>
                            <span className={classes.iconStar}>
                                <SparkleIcon />
                            </span>
                            <span className={classes.iconClose}>
                                <CloseIcon />
                            </span>
                        </span>
                    </button>
                </Root>
            );
        },
    );

export const bubbleConfig = {
    name: 'Bubble',
    tag: 'div',
    layout: bubbleRoot,
    base,
    variations: {},
    defaults: {},
};

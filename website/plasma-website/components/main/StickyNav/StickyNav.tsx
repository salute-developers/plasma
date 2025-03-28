import React, { FC, MutableRefObject } from 'react';

import { ArrowRight } from '../../icons/ArrowRight';
import { stickyNavSnapVariant } from '../../../utils';

import { Icon, SideNavigationTitle, StickyNavElement } from './StickyNav.styles';

type StickyNavItemProps = {
    index: number;
    offsetIndex: number;
    group: string;
    stickyNavRefs: MutableRefObject<(HTMLDivElement | null)[]>;
    onClick: () => void;
    needExtraOffset?: boolean;
};

export const StickyNavItem: FC<StickyNavItemProps> = ({
    index,
    offsetIndex,
    needExtraOffset,
    group,
    stickyNavRefs,
    onClick,
}) => {
    return (
        <>
            <StickyNavElement offsetIndex={offsetIndex} needExtraOffset={false} style={{ visibility: 'hidden' }}>
                <Icon>
                    <ArrowRight />
                </Icon>
                <SideNavigationTitle>{group}</SideNavigationTitle>
            </StickyNavElement>
            <StickyNavElement
                ref={(el) => {
                    stickyNavRefs.current[index] = el;
                }}
                offsetIndex={offsetIndex}
                needExtraOffset={needExtraOffset}
                onClick={onClick}
                data-snap={stickyNavSnapVariant.bottomOfViewport}
            >
                <Icon>
                    <ArrowRight />
                </Icon>
                <SideNavigationTitle>{group}</SideNavigationTitle>
            </StickyNavElement>
        </>
    );
};

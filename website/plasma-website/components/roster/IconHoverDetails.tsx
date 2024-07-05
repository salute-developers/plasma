import React, { useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import styled, { css } from 'styled-components';

import { AnimationSlideUp } from './AnimationSlideUp';

type IconInfoProps = {
    name: string;
    sizes: Record<'16' | '24' | '36', boolean>;
    pageRef: RefObject<HTMLDivElement>;
};

export const StyledIconHoverDetails = styled.div`
    position: absolute;
    z-index: 2;
    top: -4.25rem;
    left: 0.625rem;
    display: none;
    flex-direction: column;
    padding: 0.75rem;
    border-radius: 1rem;

    font-size: 0.75rem;
    line-height: 0.875rem;

    background-color: rgba(23, 23, 23, 1);

    ${AnimationSlideUp};
`;

const StyledSizeList = styled.div`
    display: flex;
    column-gap: 0.75rem;
    padding-top: 0.5rem;
`;

const StyleSizeItem = styled.span<{ isDisable?: boolean }>`
    ${({ isDisable }) =>
        isDisable &&
        css`
            color: rgba(255, 255, 255, 0.28);
            transition: var(--color-transition);
        `}
`;

export const IconHoverDetails = ({ name, sizes, pageRef }: IconInfoProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!pageRef?.current || !ref?.current) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ isIntersecting, intersectionRatio }) => {
                    if (ref?.current && isIntersecting && intersectionRatio < 1) {
                        ref.current.style.left = 'auto';
                        ref.current.style.right = '0';
                    }
                });
            },
            {
                root: pageRef.current,
                threshold: [0, 1],
            },
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);

                ref.current.style.left = '0.625rem';
                ref.current.style.right = 'auto';
            }
        };
    }, []);

    return (
        <StyledIconHoverDetails ref={ref}>
            {name}
            <StyledSizeList>
                {Object.entries(sizes).map(([key, value]) => (
                    <StyleSizeItem isDisable={!value} key={key}>
                        {key}
                    </StyleSizeItem>
                ))}
            </StyledSizeList>
        </StyledIconHoverDetails>
    );
};

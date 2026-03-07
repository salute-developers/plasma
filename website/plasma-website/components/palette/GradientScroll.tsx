import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const fixPadding = 212;

const GradientScrollContainer = styled.div<{ padding: number }>`
    position: fixed;
    top: 7.5rem;
    height: calc(100vh - ${({ padding }) => padding}px);
    left: 0;
    width: 4rem;
    padding-left: 1.875rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    z-index: 3;
`;

const GradientScrollContainerScroll = styled.div`
    width: 2.125rem;
    height: 100%;
    position: relative;
`;

const GradientScrollHeight = styled.div<{ colors: string[] }>`
    width: 0.25rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.125rem;
    /* stylelint-disable */
    background: linear-gradient(
        180deg,
        ${({ colors }) =>
            colors.map((color: string, index: number) => `${color} ${(100 / colors.length) * index}%`).join(',')}
    );
    /* stylelint-enable */
`;

const GradientScrollScroll = styled.div<{ height: number; top: number }>`
    background: rgba(255, 255, 255, 0.56);
    width: 0.125rem;
    height: ${({ height }) => height}px;
    position: absolute;
    top: ${({ top }) => top}px;
    right: 0;
    border-radius: 0.125rem;
`;
const GradientScrollTopText = styled.div`
    top: -1.25rem;
    font-size: 0.75rem;
    left: 100%;
    position: absolute;
    opacity: 0.8;
`;

const GradientScrollBottomText = styled.div`
    bottom: -1.25rem;
    font-size: 0.75rem;
    left: 100%;
    position: absolute;
    opacity: 0.8;
`;

export const GradientScroll: React.FC<{
    hsl: number[];
    colors: string[];
    scrollRef: React.RefObject<HTMLDivElement>;
}> = ({ hsl, colors, scrollRef }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isWindowScroll, setIsWindowScroll] = useState(false);

    const scrollHeight = isWindowScroll ? document.documentElement.scrollHeight : scrollRef?.current?.scrollHeight ?? 0;
    const clientHeight = isWindowScroll ? window.innerHeight : scrollRef?.current?.clientHeight ?? 0;

    const hasScrollableArea = scrollHeight > 0 && clientHeight > fixPadding;

    const heightAllScroll = hasScrollableArea ? clientHeight - fixPadding : 0;
    const heightScroll =
        hasScrollableArea && scrollHeight > clientHeight ? heightAllScroll / (scrollHeight / clientHeight) : 0;
    const topScroll = hasScrollableArea && scrollHeight > 0 ? heightAllScroll * (scrollPosition / scrollHeight) + 2 : 0;

    useEffect(() => {
        const refEl = scrollRef?.current;

        if (refEl && refEl.scrollHeight > refEl.clientHeight) {
            const handler = () => setScrollPosition(refEl.scrollTop);
            refEl.addEventListener('scroll', handler);
            handler();
            return () => refEl.removeEventListener('scroll', handler);
        }

        setIsWindowScroll(true);
        const handler = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <GradientScrollContainer padding={fixPadding}>
            <GradientScrollContainerScroll>
                <GradientScrollTopText>H:{hsl[0]}</GradientScrollTopText>
                <GradientScrollHeight colors={colors} />
                <GradientScrollScroll top={topScroll} height={heightScroll} />
                <GradientScrollBottomText>H:{hsl[hsl.length - 1]}</GradientScrollBottomText>
            </GradientScrollContainerScroll>
        </GradientScrollContainer>
    );
};

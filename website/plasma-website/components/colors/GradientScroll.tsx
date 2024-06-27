import React from 'react';
import styled from 'styled-components';

const GradientScrollContainer = styled.div`
    position: fixed;
    top: 7.5rem;
    height: calc(100vh - 208px);
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
    scrollHeight: number;
    scrollTop: number;
    height: number;
}> = ({ hsl, colors, scrollHeight, scrollTop, height }) => {
    const heightAllScroll = height - 212;
    const heightScroll = heightAllScroll / (scrollHeight / height);
    const topScroll = heightAllScroll * (scrollTop / scrollHeight) + 2;

    return (
        <GradientScrollContainer>
            <GradientScrollContainerScroll>
                <GradientScrollTopText>H:{hsl[0]}</GradientScrollTopText>
                <GradientScrollHeight colors={colors} />
                <GradientScrollScroll top={topScroll} height={heightScroll} />
                <GradientScrollBottomText>H:{hsl[hsl.length - 1]}</GradientScrollBottomText>
            </GradientScrollContainerScroll>
        </GradientScrollContainer>
    );
};

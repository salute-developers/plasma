import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 7rem;
    height: calc(100vh - 200px);
    left: 0;
    width: 4rem;
    padding-left: 1.875rem;
    box-sizing : border-box;
    display: flex;
    align-items: center;
    z-index: 3;
`;

const ContainerScroll  = styled.div`
    width: 2.125rem;
    height: 100%;
    position: relative;
`;

const AllScroll = styled.div<{colors: string[]}>`
    background: white;
    width: 0.25rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.125rem;
    background: linear-gradient(
        180deg,
        ${({colors}) => colors.map((color: string, index: number)  => `${color} ${(100 / colors.length) * index}%`).join(',')}
    );
`;

const Scroll = styled.div<{height: number, top: number}>`
    background: rgba(255,255,255, 0.56);
    width: 0.125rem;
    height: ${({height}) => height}px;
    position: absolute;
    top: ${({top}) => top}px;
    right: 0;
    border-radius: 0.125rem;
`;

const TopText = styled.div`
    top: -2rem;
    font-size: 0.75rem;
    left: 100%;
    position: absolute;
    opacity: 0.8;
`;

const BottomText = styled.div`
    bottom: -2rem;
    font-size: 0.75rem;
    left: 100%;
    position: absolute;
    opacity: 0.8;
`;

export const GradientScroll: React.FC<{ hsl: number[], colors: string[], scrollHeight: number, scrollTop: number, height: number }> = ({hsl, colors, scrollHeight, scrollTop, height}) => {
    const heightAllScroll = height - 200;
    const heightScroll = heightAllScroll / (scrollHeight / height);
    const topScroll = heightAllScroll * (scrollTop / scrollHeight);

    return (
        <Container>
            <ContainerScroll>
                <TopText>
                    H:{hsl[0]}
                </TopText>
                <AllScroll colors={colors} />
                <Scroll top={topScroll} height={heightScroll} />
                <BottomText>
                    H:{hsl[hsl.length - 1]}
                </BottomText>
            </ContainerScroll>
        </Container>
    );
};
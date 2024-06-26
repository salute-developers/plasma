import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    width: 2rem;
    padding-left: 1rem;
    box-sizing : border-box;
    display: flex;
    align-items: center;
    z-index: 3;
`;

const ContainerScroll  = styled.div`
    width: 1rem;
    height: 80%;
    position: relative;
`;

const AllScroll = styled.div<{colors: string[]}>`
    background: white;
    width: 0.125rem;
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
    background: rgba(255,255,255, 0.28);
    width: 0.125rem;
    height: ${({height}) => height}px;
    position: absolute;
    top: ${({top}) => top}px;
    right: 0;
    border-radius: 0.125rem;
`;

export const GradientScroll: React.FC<{ colors: string[], scrollHeight: number, scrollTop: number, height: number }> = ({colors, scrollHeight, scrollTop, height}) => {
    const heightAllScroll = height * 0.8;
    const heightScroll = heightAllScroll / (scrollHeight / height);
    const topScroll = heightAllScroll * (scrollTop / scrollHeight);

    return (
        <Container>
            <ContainerScroll>
                <AllScroll colors={colors} />
                <Scroll top={topScroll} height={heightScroll} />
            </ContainerScroll>
        </Container>
    );
};
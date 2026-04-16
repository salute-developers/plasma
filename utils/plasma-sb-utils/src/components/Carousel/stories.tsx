import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 400px;
    height: 370px;
    background-color: #add8e6;
    font-size: 30px;
`;

export const createDefaultStory = (CarouselComponent: any) => {
    return ({ paginationDisabled, visibleDots, paginationCentered, loop, slides, ...rest }: any) => {
        const items = Array(slides)
            .fill(1)
            .map((_, i) => ({
                id: i,
                title: i,
            }));

        return (
            <div style={{ width: '600px' }}>
                <CarouselComponent
                    paginationOptions={{
                        disabled: paginationDisabled,
                        visibleDots,
                        centered: paginationCentered,
                    }}
                    loop={loop}
                    {...rest}
                >
                    {items.map((item, i) => (
                        <StyledCard key={i}>{item.title}</StyledCard>
                    ))}
                </CarouselComponent>
            </div>
        );
    };
};

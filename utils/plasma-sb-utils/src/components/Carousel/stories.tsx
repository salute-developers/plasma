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

const CompactCard = styled(StyledCard)`
    width: 280px;
    height: 180px;
`;

const ScrollViewport = styled.div`
    height: calc(100vh - 2rem);
    overflow-y: auto;
    background: #f3f4f6;
    border-radius: 12px;
`;

const Hint = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 12px 16px;
    background: #111827;
    color: #f9fafb;
    font-size: 14px;
    line-height: 1.45;
`;

const Band = styled.div<{ $tone: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72vh;
    padding: 24px;
    background: ${({ $tone }) => $tone};
    color: #111827;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
`;

const Stage = styled.div`
    padding: 24px 16px 8px;
`;

const StageTitle = styled.div`
    max-width: 720px;
    margin: 0 auto 12px;
    font-size: 16px;
    font-weight: 600;
`;

const CarouselFrame = styled.div`
    max-width: 720px;
    margin: 0 auto;
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

export const createVerticalScrollStory = (CarouselComponent: any) => {
    return ({ paginationDisabled, visibleDots, paginationCentered, loop, slides, swipeEnabled, ...rest }: any) => {
        const items = Array(slides)
            .fill(1)
            .map((_, i) => ({
                id: i,
                title: i,
            }));

        const paginationOptions = {
            disabled: paginationDisabled,
            visibleDots,
            centered: paginationCentered,
        };

        const renderSlides = () => items.map((item, i) => <CompactCard key={i}>{item.title}</CompactCard>);

        return (
            <ScrollViewport>
                <Hint>
                    Вертикальный жест или колесо мыши по карточке должны прокручивать эту область. Горизонтальный свайп
                    листает слайды только у нижней карусели, если swipeEnabled включён.
                </Hint>
                <Band $tone="#ede9fe">Контент над каруселью</Band>
                <Stage>
                    <StageTitle>Без свайпа. Вертикальный жест прокручивает страницу.</StageTitle>
                    <CarouselFrame>
                        <CarouselComponent
                            paginationOptions={paginationOptions}
                            loop={loop}
                            {...rest}
                            swipeEnabled={false}
                        >
                            {renderSlides()}
                        </CarouselComponent>
                    </CarouselFrame>
                </Stage>
                <Band $tone="#d1fae5">Между каруселями</Band>
                <Stage>
                    <StageTitle>
                        {swipeEnabled
                            ? 'Со свайпом. Вертикальный жест прокручивает страницу, горизонтальный листает слайды.'
                            : 'swipeEnabled выключен контролом. Оба направления отдают скролл странице.'}
                    </StageTitle>
                    <CarouselFrame>
                        <CarouselComponent
                            paginationOptions={paginationOptions}
                            loop={loop}
                            {...rest}
                            swipeEnabled={swipeEnabled}
                        >
                            {renderSlides()}
                        </CarouselComponent>
                    </CarouselFrame>
                </Stage>
                <Band $tone="#ffedd5">
                    Контент под каруселью. Если этот блок виден после вертикального жеста по карточке, скролл не
                    заблокирован.
                </Band>
            </ScrollViewport>
        );
    };
};

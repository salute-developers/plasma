import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { TourProps } from './Tour.types';

const Button = getComponent('Button');
const componentExists = hasComponent('Tour');
const describeFn = getDescribeFN('Tour');

describeFn('Tour', () => {
    const Tour = componentExists ? getComponent<TourProps>('Tour') : () => null;

    const Card = styled.div`
        padding: 1rem;
        background: #fff;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
        border-radius: 0.75rem;
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    `;

    const Title = styled.h4`
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
    `;

    const Description = styled.p`
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.5;
        color: #666;
    `;

    const Footer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
        margin-top: 0.5rem;

        > div {
            display: flex;
            gap: 0.5rem;
        }

        small {
            color: #666;
            white-space: nowrap;
        }
    `;

    const Demo = (args) => {
        const ref1 = useRef<HTMLButtonElement>(null);
        const ref2 = useRef<HTMLButtonElement>(null);
        const ref3 = useRef<HTMLButtonElement>(null);
        const ref4 = useRef<HTMLButtonElement>(null);
        const [open, setOpen] = useState(false);
        const [current, setCurrent] = useState(0);

        const onNext = () => setCurrent(current + 1);
        const onPrev = () => setCurrent(current - 1);
        const onClose = () => setOpen(false);

        const renderTourCard = (currentStep: number, length, last, step) => {
            return (
                <Card>
                    {step?.title && <Title>{step?.title}</Title>}
                    {step?.description && <Description>{step?.description}</Description>}
                    <Footer>
                        <div>
                            {currentStep > 0 && (
                                <Button id="prev" size="s" type="button" onClick={onPrev}>
                                    Назад
                                </Button>
                            )}
                            {!last && (
                                <Button id="next" size="s" type="button" onClick={onNext}>
                                    Далее
                                </Button>
                            )}
                            {last && (
                                <Button id="close" size="s" type="button" onClick={onClose}>
                                    Закрыть
                                </Button>
                            )}
                        </div>
                        <small>
                            Шаг {currentStep + 1} / {length}
                        </small>
                    </Footer>
                </Card>
            );
        };

        const steps = [
            {
                target: ref1,
                title: 'Title 1',
                description: 'Description text for title 1',
                placement: 'right',
            },
            {
                target: ref2,
                title: 'Title 2',
                description: 'Description text for title 2',
            },
            {
                target: ref3,
                title: 'Title 3',
                description: 'Description text for title 3',
            },
            {
                target: ref4,
                title: 'Title 4',
                description: 'Description text for title 4',
                placement: 'left',
            },
        ];

        return (
            <div
                style={{
                    width: '100%',
                    height: '480px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button ref={ref1}>Блок 1</Button>
                    <Button ref={ref2}>Блок 2</Button>
                </div>
                <Button id="start" onClick={() => setOpen(true)}>
                    Запуск тура
                </Button>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button ref={ref3}>Блок 3</Button>
                    <Button ref={ref4}>Блок 4</Button>
                </div>

                <Tour
                    {...args}
                    offset={[args.offset, args.shift]}
                    open={open}
                    current={current}
                    onClose={() => {
                        setCurrent(0);
                        setOpen(false);
                    }}
                    renderStep={renderTourCard}
                    steps={steps}
                />
            </div>
        );
    };

    const step1 = 'Шаг 1 / 4';
    const step2 = 'Шаг 2 / 4';
    const step3 = 'Шаг 3 / 4';
    const step4 = 'Шаг 4 / 4';

    it('offset=100, shift=50, highlightOffset=0, withOverlay', () => {
        const args = {
            withOverlay: true,
            offset: 100,
            shift: 50,
            highlightOffset: 0,
            overlayColor: 'rgba(255, 255, 255, 0.25)',
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);

        cy.matchImageSnapshot();
    });

    it('offset=50, shift=0, highlightOffset=100', () => {
        const args = {
            withOverlay: false,
            offset: 50,
            shift: 0,
            highlightOffset: 100,
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);

        cy.matchImageSnapshot();
    });

    it('offset=0, shift=100, highlightOffset=50', () => {
        const args = {
            withOverlay: false,
            offset: 0,
            shift: 100,
            highlightOffset: 50,
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);

        cy.matchImageSnapshot();
    });

    it('move next', () => {
        const args = {
            withOverlay: false,
            offset: 12,
            shift: 12,
            highlightOffset: 4,
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);
        cy.get('#next').click();
        cy.get('small').should('have.text', step2);

        cy.matchImageSnapshot();
    });

    it('move prev', () => {
        const args = {
            withOverlay: false,
            offset: 12,
            shift: 12,
            highlightOffset: 4,
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);
        cy.get('#next').click();
        cy.get('small').should('have.text', step2);
        cy.get('#prev').click();
        cy.get('small').should('have.text', step1);

        cy.matchImageSnapshot();
    });

    it('finish tour', () => {
        const args = {
            withOverlay: false,
            offset: 12,
            shift: 12,
            highlightOffset: 4,
        };

        mount(<Demo {...args} />);

        cy.get('#start').click();
        cy.get('small').should('have.text', step1);
        cy.get('#next').click();
        cy.get('small').should('have.text', step2);
        cy.get('#next').click();
        cy.get('small').should('have.text', step3);
        cy.get('#next').click();
        cy.get('small').should('have.text', step4);
        cy.get('#close').click();
        cy.get('small').should('not.exist');

        cy.matchImageSnapshot();
    });
});

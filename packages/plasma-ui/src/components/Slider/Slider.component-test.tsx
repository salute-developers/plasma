import React, { useState } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe, Portal } from '@salutejs/plasma-cy-utils';

const noop = () => {};

const dragAndDrop = (chainableSelector: Cypress.Chainable, coord: { clientX: number; clientY: number }) => {
    chainableSelector.trigger('mousedown').trigger('mousemove', coord).trigger('mouseup');
};

describe('plasma-core: Slider', () => {
    const Slider = getComponent('Slider');
    const Badge = getComponent('Badge');
    const sliderThumbSelector = 'div > div + div > div';

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={42} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('default: focus', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={24} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('with portal', () => {
        const PORTAL_ROOT_ID = 'portal-root';

        mount(
            <CypressTestDecorator>
                <>
                    <div id={PORTAL_ROOT_ID}>
                        <Badge view="primary" transparent text="Slider in Portal" />
                    </div>
                    <Portal id={PORTAL_ROOT_ID}>
                        <Slider value={30} min={0} max={100} />
                    </Portal>
                </>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecorator>
                <Slider disabled value={42} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('double', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={[13, 42]} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('drag and drop with single', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChange={noop} onChangeCommitted={noop} value={50} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root(), { clientX: 350, clientY: 15 });

        cy.root().click(270, 15);

        cy.matchImageSnapshot();
    });

    it('drag and drop without onChange', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChangeCommitted={noop} value={[0, 50]} min={0} max={100} />
                <PadMe />
                <Slider onChangeCommitted={noop} value={50} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root().get('div > div + div').first(), { clientX: 50, clientY: 15 });

        cy.root().click(350, 15);

        cy.root().click(350, 45);

        cy.matchImageSnapshot();
    });

    it('drag and drop with double', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChange={noop} onChangeCommitted={noop} value={[25, 75]} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root().get('div > div + div').first(), { clientX: 50, clientY: 15 });

        dragAndDrop(cy.root().get('div > div + div').last(), { clientX: 450, clientY: 15 });

        cy.matchImageSnapshot();
    });

    describe('Keyboard support', () => {
        const props = {
            max: 100,
            min: 0,
        };

        const ariaValueNow = 'aria-valuenow';
        const ariaValueMax = 'aria-valuemax';
        const ariaValueMin = 'aria-valuemin';
        const defaultSliderValue = 20;

        function StubComponent({ value = defaultSliderValue }: { value?: number | number[] }) {
            const [state, setState] = useState(value);

            const onChangeCommittedHandle = (values) => {
                setState(values);
            };

            return <Slider onChangeCommitted={onChangeCommittedHandle} value={state} {...props} />;
        }

        it('increase value by ArrowRight, ArrowUp', () => {
            const countRepeat = 2;

            mount(
                <CypressTestDecorator>
                    <StubComponent />
                </CypressTestDecorator>,
            );

            cy.get(sliderThumbSelector)
                .focus()
                .should('have.attr', ariaValueNow, defaultSliderValue)
                .type('{rightArrow}'.repeat(countRepeat))
                .should('have.attr', ariaValueNow, defaultSliderValue + countRepeat)
                .type('{upArrow}'.repeat(countRepeat))
                .should('have.attr', ariaValueNow, defaultSliderValue + countRepeat * 2);
        });

        it('decrease value by ArrowLeft, ArrowDown', () => {
            const countRepeat = 2;

            mount(
                <CypressTestDecorator>
                    <StubComponent />
                </CypressTestDecorator>,
            );

            cy.get(sliderThumbSelector)
                .focus()
                .should('have.attr', ariaValueNow, defaultSliderValue)
                .type('{leftArrow}'.repeat(countRepeat))
                .should('have.attr', ariaValueNow, defaultSliderValue - countRepeat)
                .type('{downArrow}'.repeat(countRepeat))
                .should('have.attr', ariaValueNow, defaultSliderValue - countRepeat * 2);
        });

        it('change value by Home, End', () => {
            mount(
                <CypressTestDecorator>
                    <StubComponent />
                </CypressTestDecorator>,
            );

            cy.get(sliderThumbSelector)
                .focus()
                .should('have.attr', ariaValueNow, defaultSliderValue)
                .type('{end}')
                .should('have.attr', ariaValueNow, props.max)
                .type('{home}')
                .should('have.attr', ariaValueNow, props.min);
        });

        it('processing multiple steps by PageUp, PageDown', () => {
            mount(
                <CypressTestDecorator>
                    <StubComponent />
                </CypressTestDecorator>,
            );

            const multipleSteps = props.max * 0.1;

            cy.get(sliderThumbSelector)
                .focus()
                .should('have.attr', ariaValueNow, defaultSliderValue)
                .type('{pageUp}')
                .should('have.attr', ariaValueNow, defaultSliderValue + multipleSteps)
                .type('{pageDown}')
                .should('have.attr', ariaValueNow, defaultSliderValue);
        });

        it('Double slider', () => {
            mount(
                <CypressTestDecorator>
                    <StubComponent value={[25, 75]} />
                </CypressTestDecorator>,
            );

            cy.get(sliderThumbSelector)
                .first()
                .focus()
                .should('have.attr', ariaValueNow, 25)
                .should('have.attr', ariaValueMin, props.min)
                .type('{end}')
                .should('have.attr', ariaValueMax, 75)
                .type('{home}')
                .should('have.attr', ariaValueNow, props.min)
                .type('{rightArrow}'.repeat(10));

            cy.get(sliderThumbSelector)
                .last()
                .focus()
                .type('{end}')
                .should('have.attr', ariaValueMax, props.max)
                .type('{home}')
                .invoke('attr', ariaValueNow)
                .then((state) => {
                    // INFO: Проверяем, что максимальное значение первого слайдера ограничено текущем значением второго
                    cy.get(sliderThumbSelector).first().should('have.attr', ariaValueMax, state);
                });

            // INFO: Проверяем, что минимальное значение второго слайдера ограничено текущем значением первого
            cy.get(sliderThumbSelector)
                .last()
                .focus()
                .invoke('attr', ariaValueMin)
                .then((state) => {
                    cy.get(sliderThumbSelector).first().should('have.attr', ariaValueNow, state);
                });

            cy.matchImageSnapshot();
        });
    });
});

import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('sdds-insol: Slider', () => {
    const Slider = getComponent('Slider');
    const sliderThumbSelector = '[role="slider"]';

    it('[PLASMA-T1694] Slider: size=l, view=default, pointerSize=small, pointerVisibility=always, orientation=horizontal, labelPlacement=top, scaleAlign=bottom, showScale, showCurrentValue, currentValueVisibility=always', () => {
        mount(
            <CypressTestDecorator>
                <Slider
                    label="Text"
                    view="default"
                    size="l"
                    min={0}
                    max={100}
                    value={50}
                    pointerSize="small"
                    pointerVisibility="always"
                    orientation="horizontal"
                    labelPlacement="top"
                    scaleAlign="bottom"
                    showScale
                    showCurrentValue
                    currentValueVisibility="always"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1695] Slider: size=m, view=accent, pointerSize=large, pointerVisibility=hover, labelPlacement=left, scaleAlign=side, showScale, showCurrentValue, currentValueVisibility=hover, showIcon', () => {
        mount(
            <CypressTestDecorator>
                <Slider
                    label="Text"
                    view="accent"
                    size="m"
                    min={0}
                    max={100}
                    value={50}
                    pointerSize="large"
                    pointerVisibility="hover"
                    orientation="horizontal"
                    labelPlacement="left"
                    scaleAlign="side"
                    showScale
                    showCurrentValue
                    currentValueVisibility="hover"
                    showIcon
                />
            </CypressTestDecorator>,
        );

        cy.get('div[orientation="horizontal"]').trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1696] Slider: size=s, view=gradient, pointerSize=none, without icon', () => {
        mount(
            <CypressTestDecorator>
                <Slider
                    label="Text"
                    view="gradient"
                    size="s"
                    min={0}
                    max={100}
                    value={50}
                    pointerSize="none"
                    pointerVisibility="always"
                    orientation="horizontal"
                    labelPlacement="top"
                    scaleAlign="bottom"
                    showScale
                    showCurrentValue
                    currentValueVisibility="hover"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1697] Slider: without label, without scale, without current value', () => {
        mount(
            <CypressTestDecorator>
                <Slider
                    view="default"
                    size="l"
                    min={0}
                    max={100}
                    value={50}
                    pointerSize="none"
                    pointerVisibility="always"
                    orientation="horizontal"
                    labelPlacement="top"
                    scaleAlign="bottom"
                    currentValueVisibility="always"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1698] Slider: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Slider view="default" size="l" min={0} max={100} value={50} disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1699] Slider: orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex', height: '20rem' }}>
                    <Slider
                        view="default"
                        size="l"
                        min={0}
                        max={100}
                        value={50}
                        pointerSize="none"
                        pointerVisibility="always"
                        orientation="vertical"
                        labelPlacement="top"
                        scaleAlign="bottom"
                        currentValueVisibility="always"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T947] Slider: focused', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={25} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });
});

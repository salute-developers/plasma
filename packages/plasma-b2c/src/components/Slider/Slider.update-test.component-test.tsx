import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Slider', () => {
    const Slider = getComponent('Slider');
    const sliderThumbSelector = '[role="slider"]';

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1694] Slider: size=l, view=default, pointerSize=small, pointerVisibility=always, orientation=horizontal, labelPlacement=top, scaleAlign=bottom, showScale, showCurrentValue, currentValueVisibility=always', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1695] Slider: size=m, view=accent, pointerSize=large, pointerVisibility=hover, labelPlacement=left, scaleAlign=side, showScale, showCurrentValue, currentValueVisibility=hover, showIcon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div[orientation="horizontal"]').trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1696] Slider: size=s, view=gradient, pointerSize=none, without icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1697] Slider: without label, without scale, without current value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1698] Slider: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider view="default" size="l" min={0} max={100} value={50} disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1699] Slider: orientation=vertical', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T947] Slider: focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider value={25} min={0} max={100} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });
});

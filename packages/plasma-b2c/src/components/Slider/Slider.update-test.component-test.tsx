import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Slider', () => {
    const Slider = getComponent('Slider');
    const sliderThumbSelector = 'div > div + div > div';

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T697] Slider: view=default, size=m, labelPlacement=outer', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider label="Text" min={0} max={100} value={50} view="default" size="m" labelPlacement="outer" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T938] Slider: view=accent, size=l, rangeValuesPlacement=outer', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} view="accent" size="l" rangeValuesPlacement="outer" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T939] Slider: view=gradient, size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} view="accent" size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T937] Slider: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T940] Slider: min=10, labelPlacement=inner', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider label="Text" min={10} max={100} value={50} labelPlacement="inner" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T941] Slider: max=123, rangeValuesPlacement=inner', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={123} value={50} rangeValuesPlacement="inner" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T942] Slider: showCurrentValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} showCurrentValue />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T943] Slider: disableShowRangeValues', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} showRangeValues={false} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={[25, 75]} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('focus', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider value={25} min={0} max={100} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('_placement', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider label="Text" value={50} min={0} max={100} labelPlacement="inner" />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} labelPlacement="outer" />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} rangeValuesPlacement="inner" />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} rangeValuesPlacement="outer" />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} showRangeValues />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} showRangeValues={false} />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} showCurrentValue />
                <PadMe />
                <PadMe />
                <Slider label="Text" value={50} min={0} max={100} showCurrentValue={false} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});

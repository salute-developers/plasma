import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Slider', () => {
    const Slider = getComponent('Slider');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider min={0} max={100} value={50} />
                <PadMe />
                <Slider min={0} max={100} value={[25, 75]} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider value={50} min={0} max={100} view="default" />
                <PadMe />
                <Slider value={50} min={0} max={100} view="accent" />
                <PadMe />
                <Slider value={50} min={0} max={100} view="gradient" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider value={50} min={0} max={100} size="s" />
                <PadMe />
                <Slider value={50} min={0} max={100} size="m" />
                <PadMe />
                <Slider value={50} min={0} max={100} size="l" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Slider value={50} min={0} max={100} />
                <PadMe />
                <Slider value={50} min={0} max={100} disabled />
            </CypressTestDecoratorWithTypo>,
        );
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

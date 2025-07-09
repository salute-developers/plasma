import React, { useEffect, useState } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconMic } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Slider', () => {
    const Slider = getComponent('Slider');
    const sliderThumbSelector = 'div > div + div > div';

    const CypressTestDecoratorWithTypo: React.FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo: React.FC = ({ newValue }) => {
        const [value, setValue] = useState(30);

        useEffect(() => {
            setValue(newValue);
        }, [newValue]);

        return <Slider min={0} max={100} value={value} showCurrentValue />;
    };

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

    it('value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo newValue={50} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.contains('50').should('be.visible');
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

    it('_vertical: simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'flex', height: '20rem' }}>
                    <Slider value={0} min={0} max={100} size="s" orientation="vertical" />
                    <PadMe />
                    <Slider value={50} min={0} max={100} size="m" orientation="vertical" />
                    <PadMe />
                    <Slider value={100} min={0} max={100} size="l" orientation="vertical" />
                </div>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    ['s', 'm', 'l'].map((size) =>
        it(`_vertical: sliderAlign, ${size}`, () => {
            const showIcon = true;

            const props = {
                value: 40,
                min: 0,
                max: 100,
                size,
                orientation: 'vertical',
                label: 'Громкость',
                labelContent: showIcon ? <IconMic size={size === 's' ? 'xs' : 's'} /> : null,
                showCurrentValue: true,
                showScale: true,
            };

            mount(
                <CypressTestDecoratorWithTypo>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '14rem',
                        }}
                    >
                        <Slider sliderAlign="right" {...props} />
                        <div style={{ padding: '0 0.75rem' }} />
                        <Slider sliderAlign="center" {...props} />
                        <div style={{ padding: '0 0.75rem' }} />
                        <Slider sliderAlign="left" {...props} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2rem',
                            height: '14rem',
                        }}
                    >
                        <Slider sliderAlign="center" reversed {...props} />
                        <div style={{ padding: '0 0.75rem' }} />
                        <Slider sliderAlign="center" reversed labelReversed {...props} />
                        <div style={{ padding: '0 0.75rem' }} />
                    </div>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        }),
    );

    it('pointerVisibility', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div
                    style={{
                        display: 'flex',
                        height: '5rem',
                        flexDirection: 'column',
                    }}
                >
                    <Slider
                        id="horizontal"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="horizontal"
                        pointerVisibility="hover"
                    />
                    <PadMe />
                    <Slider
                        id="horizontal-all"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="horizontal"
                        pointerVisibility="hover"
                        showCurrentValue
                        showScale
                    />
                    <PadMe />
                </div>
                <div
                    style={{
                        display: 'flex',
                        height: '20rem',
                        flexDirection: 'row',
                    }}
                >
                    <Slider
                        id="vertical"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="vertical"
                        pointerVisibility="hover"
                    />
                    <PadMe />
                    <Slider
                        id="vertical-all"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="vertical"
                        pointerVisibility="hover"
                        showCurrentValue
                        showScale
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot('before-hover');

        cy.get('#horizontal').trigger('pointerover');
        cy.get('#horizontal-all').trigger('pointerover');
        cy.get('#vertical').trigger('pointerover');
        cy.get('#vertical-all').trigger('pointerover');

        cy.matchImageSnapshot();
    });
});

import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const src = 'https://bit.ly/3xRatFGimages/320_320_0.jpg';

describe('sdds-insol: Image', () => {
    const Image = getComponent('Image');

    const Why = styled.div`
        width: 8rem;
        display: inline-block;
    `;

    beforeEach(() => {
        cy.intercept(src, (req) => {
            req.reply({
                fixture: 'images/320_320_0.jpg',
            });
        });
    });

    it.only('[PLASMA-T1734] Image: base=div, ratio=1:1', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ maxWidth: '10rem' }}>
                    <Image src={src} base="div" ratio="1/1" width="200px" height="200px" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it.only('[PLASMA-T1735] Image: base=div, ratio=1:2, width=400, height=400', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ maxWidth: '10rem' }}>
                    <Image src={src} base="div" ratio="1/2" width="400px" height="400px" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it.only('[PLASMA-T1736] Image: base=img, ratio=3:4, width=350, height=250', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ maxWidth: '10rem' }}>
                    <Image src={src} base="img" ratio="3/4" width="350px" height="250px" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it.only('[PLASMA-T1737] Image: base=img, ratio=16:9, width=200, height=200', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ maxWidth: '10rem' }}>
                    <Image src={src} base="img" ratio="16/9" width="200px" height="200px" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_customRatio', () => {
        mount(
            <CypressTestDecorator>
                <Why key="_base_div">
                    <Image base="div" customRatio={75} src={src} />
                </Why>
                <Why key="_base_img">
                    <Image customRatio={75} src={src} />
                </Why>
                <PadMe />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

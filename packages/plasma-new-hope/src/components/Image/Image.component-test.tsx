import React, { Fragment } from 'react';
import styled from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

import type { ImageProps } from './Image.types';

const componentExists = hasComponent('Image');
const describeFn = getDescribeFN('Image');

const src = 'https://bit.ly/3xRatFGimages/320_320_0.jpg';

const Why = styled.div`
    width: 8rem;
    display: inline-block;
`;

describeFn('Image', () => {
    const Image = componentExists ? getComponent<ImageProps>('Image') : () => null;

    beforeEach(() => {
        cy.intercept(src, (req) => {
            req.reply({
                fixture: 'images/320_320_0.jpg',
            });
        });
    });

    it('default', () => {
        mount(<Image src={src} width="320px" height="320px" />);

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('div', () => {
        mount(<Image base="div" src={src} width="320px" height="320px" />);

        cy.matchImageSnapshot();
    });

    it('width, height', () => {
        cy.viewport(500, 800);

        mount(
            <>
                <Image src={src} width="200px" height="200px" />
                <PadMe />
                <Image src={src} width="100px" height="300px" />
                <PadMe />
                <Image src={src} width="300px" height="100px" />
            </>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('ratio', () => {
        cy.viewport(500, 2500);

        const ratios = Object.keys({
            '1 / 1': '100',
            '1/1': '100',
            '3 / 4': '133.3333',
            '3/4': '133.3333',
            '4 / 3': '75',
            '4/3': '75',
            '9 / 16': '177.7778',
            '9/16': '177.7778',
            '16 / 9': '56.25',
            '16/9': '56.25',
            '1 / 2': '200',
            '1/2': '200',
            '2 / 1': '50',
            '2/1': '50',
        });

        mount(
            <>
                {ratios.map((ratio) => (
                    <Fragment key={ratio}>
                        <Why key="_base_div">
                            <Image base="div" ratio={ratio as any} src={src} />
                        </Why>
                        <Why key="_base_img">
                            <Image ratio={ratio as any} src={src} />
                        </Why>
                        <PadMe />
                    </Fragment>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('customRatio', () => {
        mount(
            <>
                <Why key="_base_div">
                    <Image base="div" customRatio="75" src={src} />
                </Why>
                <Why key="_base_img">
                    <Image customRatio="75" src={src} />
                </Why>
                <PadMe />
            </>,
        );

        cy.matchImageSnapshot();
    });
});

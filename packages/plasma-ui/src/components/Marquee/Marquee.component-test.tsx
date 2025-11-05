import React from 'react';
import styled from 'styled-components';
import { CypressTestDecorator, getComponent, withNoAnimation } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-ui: Marquee', () => {
    const Marquee = withNoAnimation(getComponent('Marquee'));

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Marquee>Очень очень длинный текст бегущей строки Такой что не влезает прям никуда!!</Marquee>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_textAlign', () => {
        mount(
            <CypressTestDecorator>
                <Marquee textAlign="start">Не очень очень длинный текст !!</Marquee>
                <Marquee textAlign="center">Не очень очень длинный текст !!</Marquee>
                <Marquee textAlign="end">Не очень очень длинный текст !!</Marquee>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

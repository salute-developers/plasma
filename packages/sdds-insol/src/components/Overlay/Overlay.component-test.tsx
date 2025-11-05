import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const text = 'Голосовая викторина с Валдисом Пельшем';

describe('sdds-insol: Overlay', () => {
    const Overlay = getComponent('Overlay');
    const Button = getComponent('Button');

    function Demo(props: { withBlur?: boolean; transparent?: boolean }) {
        return (
            <div>
                <Overlay
                    zIndex="900"
                    backgroundColorProperty="rgba(26,158,50,0.5)"
                    withBlur={props.withBlur}
                    transparent={props.transparent}
                />
                <Button text={text} />
            </div>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('withBlur', () => {
        mount(
            <CypressTestDecorator>
                <Demo withBlur />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('transparent', () => {
        mount(
            <CypressTestDecorator>
                <Demo transparent />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

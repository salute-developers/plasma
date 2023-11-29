import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import type { PopoverTrigger } from './Popover';

const text = 'Голосовая викторина Валдисом Пельшем';

describe('plasma-web: Popover', () => {
    const Popover = getComponent('Popover');
    const Button = getComponent('Button');
    const P1 = getComponent('P1');

    function Demo(props: { trigger?: PopoverTrigger; closeOnOverlayClick?: boolean; closeOnEsc?: boolean }) {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <Popover
                isOpen={isOpen}
                onToggle={(is) => setIsOpen(is)}
                role="presentation"
                id="popover"
                target={<Button>Target</Button>}
                {...props}
            >
                <div>
                    <P1>{text}</P1>
                    <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                </div>
            </Popover>
        );
    }

    it('open popover by click', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').should('be.visible');
    });

    it('open popover by hover', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="hover" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().trigger('mouseover');
        cy.get('p').should('be.visible');
    });

    it('close popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').should('be.visible');

        cy.get('button').contains('close').click();
        cy.get('p').should('not.be.visible');
    });

    it('close popover by overlay click', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" closeOnOverlayClick />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').should('be.visible');

        cy.get('body').click(5, 5);
        cy.get('p').should('not.be.visible');
    });

    it('close popover by ESC', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" closeOnEsc />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('p').should('not.be.visible');
    });
});

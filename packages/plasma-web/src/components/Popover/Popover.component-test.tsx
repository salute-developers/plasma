import React, { useRef } from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import styled from 'styled-components';

import type { PopoverTrigger } from '.';

const text = 'Голосовая викторина с Валдисом Пельшем';

const Content = styled.div`
    background: var(--surface-solid-card);
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

describe('plasma-web: Popover', () => {
    const Popover = getComponent('Popover');
    const Button = getComponent('Button');
    const P1 = getComponent('P1');

    const Demo = (props: { trigger?: PopoverTrigger; closeOnOverlayClick?: boolean; closeOnEsc?: boolean }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <Popover
                opened={isOpen}
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
    };

    it('open popover by click', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');
    });

    it('open popover by hover', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="hover" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().trigger('mouseover', { force: true });
        cy.get('p').contains(text).should('be.visible');
    });

    it('close popover by mouseleave a target', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="hover" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().trigger('mouseover', { force: true });
        cy.get('p').contains(text).should('be.visible');

        cy.get('button').first().trigger('mouseout', { force: true });
        cy.get('.popover-root').should('not.be.visible');
    });

    it('close popover', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('button').contains('close').click();
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('close popover by overlay click', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" closeOnOverlayClick />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').click(5, 5);
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('close popover by ESC', () => {
        mount(
            <CypressTestDecorator>
                <Demo trigger="click" closeOnEsc />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('p').contains(text).should('not.be.visible');
    });

    const TargetAsRef = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const targetRef = useRef<HTMLButtonElement>(null);

        return (
            <>
                <Button ref={targetRef}>Target</Button>
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    role="presentation"
                    id="popover"
                    target={targetRef}
                    trigger="click"
                    closeOnEsc
                >
                    <div>
                        <P1>{text}</P1>
                        <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                    </div>
                </Popover>
            </>
        );
    };

    it('target as ref', () => {
        mount(
            <CypressTestDecorator>
                <TargetAsRef />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('resizable', () => {
        function Resizable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Popover
                        opened={isOpen}
                        onToggle={(is) => setIsOpen(is)}
                        role="presentation"
                        id="popover"
                        target={<Button>Target</Button>}
                        resizable
                    >
                        <Content>
                            <P1>{text}</P1>
                            <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                        </Content>
                    </Popover>
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <Resizable />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });
});

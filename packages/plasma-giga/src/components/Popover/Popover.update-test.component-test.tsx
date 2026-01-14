import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { surfaceSolid03 } from '@salutejs/plasma-core';
import styled from 'styled-components';

const StyledContent = styled.div`
    background: ${surfaceSolid03};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    height: 100%;
    box-sizing: border-box;
`;

describe('plasma-giga: Popover', () => {
    const Popover = getComponent('Popover');
    const Button = getComponent('Button');
    const TextM = getComponent('TextM');

    const styleForTest = {
        width: '30rem',
        height: '30rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const PopoverForTest = ({
        placement,
        trigger,
        closeOnOverlayClick,
        closeOnEsc,
        hasArrow,
        isFocusTrapped,
        offset,
        resizable,
    }) => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <section style={styleForTest}>
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    id="popover"
                    target={<Button>Open</Button>}
                    offset={offset}
                    placement={placement}
                    trigger={trigger}
                    hasArrow={hasArrow}
                    closeOnOverlayClick={closeOnOverlayClick}
                    closeOnEsc={closeOnEsc}
                    isFocusTrapped={isFocusTrapped}
                    resizable={resizable}
                >
                    <StyledContent>
                        <TextM>Content</TextM>
                        <Button onClick={() => setIsOpen(false)}>close</Button>
                    </StyledContent>
                </Popover>
            </section>
        );
    };
    it.skip('[PLASMA-T1688] Popover: placement=top, trigger=click, closeOnOverlayClick, skidding=0, distance=10', () => {
        mount(
            <CypressTestDecorator>
                <PopoverForTest
                    opened={false}
                    placement="top"
                    trigger="click"
                    offset={[0, 10]}
                    closeOnOverlayClick
                    closeOnEsc={false}
                    hasArrow
                    isFocusTrapped={false}
                />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open').click();
        cy.matchImageSnapshot();

        cy.get('body').type('{esc}');
        cy.get('#popover').should('exist');
        cy.get('body').click(5, 5);
        cy.get('#popover').should('not.be.visible');
    });

    it.skip('[PLASMA-T1689] Popover: placement=bottom, trigger=hover, closeOnEsc, skidding=10, distance=100', () => {
        mount(
            <CypressTestDecorator>
                <PopoverForTest
                    opened={false}
                    placement="bottom"
                    trigger="hover"
                    offset={[10, 100]}
                    closeOnOverlayClick={false}
                    closeOnEsc
                    hasArrow
                    isFocusTrapped={false}
                />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open').trigger('mouseover');
        cy.matchImageSnapshot();
        cy.get('body').type('{esc}');
        cy.get('#popover').should('not.be.visible');
    });

    it('[PLASMA-T1690] Popover: placement=right, trigger=click, skidding=100, distance=0', () => {
        mount(
            <CypressTestDecorator>
                <PopoverForTest
                    opened={false}
                    placement="right"
                    trigger="click"
                    offset={[100, 0]}
                    closeOnOverlayClick={false}
                    closeOnEsc={false}
                    hasArrow
                    isFocusTrapped
                />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1691] Popover: placement=left, opened, trigger=click, skidding=0, distance=6', () => {
        mount(
            <CypressTestDecorator>
                <section style={styleForTest}>
                    <Popover
                        opened
                        id="popover"
                        target={<Button>Open</Button>}
                        offset={[0, 6]}
                        placement="left"
                        trigger="click"
                        hasArrow="true"
                        closeOnOverlayClick={false}
                        closeOnEsc={false}
                        isFocusTrapped={false}
                    >
                        <StyledContent>
                            <TextM>Content</TextM>
                            <Button>close</Button>
                        </StyledContent>
                    </Popover>
                </section>
            </CypressTestDecorator>,
        );
        cy.get('#popover').contains('Content').should('be.visible');
        cy.matchImageSnapshot();
        cy.get('body').click(0, 0);
        cy.get('#popover').contains('Content').should('be.visible');
    });

    it('[PLASMA-T1692] Popover: placement=auto, trigger=click, closeOnOverlay, hasArrow=false', () => {
        mount(
            <CypressTestDecorator>
                <PopoverForTest
                    opened={false}
                    placement="auto"
                    trigger="click"
                    offset={[0, 6]}
                    closeOnOverlayClick
                    closeOnEsc={false}
                    hasArrow={false}
                    isFocusTrapped
                />
            </CypressTestDecorator>,
        );
        cy.get('button').contains('Open').click();
        cy.matchImageSnapshot();
    });

    it('resizable', () => {
        mount(
            <CypressTestDecorator>
                <PopoverForTest
                    resizable
                    opened={false}
                    placement="auto"
                    trigger="click"
                    offset={[0, 6]}
                    closeOnOverlayClick
                    closeOnEsc={false}
                    hasArrow={false}
                    isFocusTrapped
                />
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

import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Content = styled.div`
    background: #f0f0f0;
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

const StyledInFrame = styled.div``;

const OtherContent = styled.div`
    width: 50%;
    height: 50%;
    background: #e1e1e1;
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    bottom: 0rem;
    right: 0;

    ${StyledInFrame} {
        padding: 1rem;
        box-sizing: border-box;
        background-color: rgba(145, 50, 50, 1);
        color: rgba(255, 255, 255, 1);
    }
`;

describe('sdds-insol: Popup', () => {
    const PopupProvider = getComponent('PopupProvider');
    const Popup = getComponent('Popup');
    const Button = getComponent('Button');
    const H3 = getComponent('H3');

    function Demo({ open = false, placement }: { open?: boolean; placement?: string }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <>
                <Button text="Open popup" onClick={() => setIsOpen(true)} />
                <Popup opened={isOpen} onClose={() => setIsOpen(false)} placement={placement}>
                    <Content id="popup-content">
                        <H3>Popup</H3>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </Popup>
            </>
        );
    }

    function Placement({ placement, offset }: { placement?: string; offset?: [number, number] }) {
        return (
            <>
                <Popup opened placement={placement} offset={offset}>
                    <Content>
                        <H3>{placement}</H3>
                        <Button text="Close" />
                    </Content>
                </Popup>
            </>
        );
    }

    function Frame() {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);
        const [isOpenC, setIsOpenC] = React.useState(false);

        const ref = React.useRef<HTMLDivElement>(null);
        return (
            <>
                <Button text="Open popup A" onClick={() => setIsOpenA(true)} />
                <Button text="Open popup B" onClick={() => setIsOpenB(true)} />
                <Button text="Open popup C" onClick={() => setIsOpenC(true)} />
                <Popup opened={isOpenA} frame={ref}>
                    <Content>
                        <H3>Popup A</H3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                    </Content>
                </Popup>

                <Popup opened={isOpenC} frame={ref} positionFixed>
                    <StyledInFrame>
                        <H3>Popup C</H3>
                        <Button text="Close C" onClick={() => setIsOpenC(false)} />
                    </StyledInFrame>
                </Popup>

                <OtherContent ref={ref}>
                    <H3>Frame</H3>
                </OtherContent>

                <Popup opened={isOpenB}>
                    <Content>
                        <H3>Popup B</H3>
                        <Button text="Close B" onClick={() => setIsOpenB(false)} />
                    </Content>
                </Popup>
            </>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Demo />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Demo />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#popup-content').should('be.visible');
        cy.get('button').contains('Close').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('placement basic', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Placement placement="center" />
                    <Placement placement="right" />
                    <Placement placement="left" />
                    <Placement placement="bottom" />
                    <Placement placement="top" />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('placement combination', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Placement placement="bottom-right" />
                    <Placement placement="bottom-left" />
                    <Placement placement="top-right" />
                    <Placement placement="top-left" />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('placement combination + offset', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Placement placement="bottom-right" offset={[1, 1]} />
                    <Placement placement="bottom-left" offset={[1, 1]} />
                    <Placement placement="top-right" offset={[1, 1]} />
                    <Placement placement="top-left" offset={[1, 1]} />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('frame', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Frame />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open popup A').click();
        cy.get('button').contains('Open popup B').click();
        cy.matchImageSnapshot();
    });

    it('frame, alwaysFixed', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Frame />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open popup A').click();
        cy.get('button').contains('Open popup C').click();
        cy.matchImageSnapshot();
    });

    it('prop: data-attrs', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Popup opened data-testid="test-data-id">
                        <Content>
                            <H3>Popup</H3>
                        </Content>
                    </Popup>
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('.popup-base-root').should('have.attr', 'data-testid', 'test-data-id');
    });

    it('draggable', () => {
        function Draggable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                    <Popup opened={isOpen} placement="center" draggable>
                        <Content id="content">
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </Popup>
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Draggable />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.get('#content').trigger('mousedown').trigger('mousemove', { clientX: 200, clientY: 100 }).trigger('mouseup');

        cy.matchImageSnapshot();
    });

    it('resizable', () => {
        function Resizable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                    <Popup opened={isOpen} placement="center" resizable>
                        <Content>
                            Content
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </Popup>
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Resizable />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });
});

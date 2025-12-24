import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
// TODO: нужно поменять на импорт из plasma-themes, когда исправим в TestDecorator подключение тем
import { surfaceSolid02, surfaceSolid03 } from '@salutejs/plasma-tokens-web';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

const StyledInFrame = styled.div``;

const OtherContent = styled.div`
    width: 50%;
    height: 50%;
    background: ${surfaceSolid03};
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    box-sizing: content-box;

    bottom: 0rem;
    right: 0;

    ${StyledInFrame} {
        padding: 1rem;
        box-sizing: border-box;
        background-color: rgba(145, 50, 50, 1);
        color: rgba(255, 255, 255, 1);
    }
`;

describe('plasma-b2c: PopupBase', () => {
    const PopupBaseProvider = getComponent('PopupBaseProvider');
    const PopupBase = getComponent('PopupBase');
    const Button = getComponent('Button');
    const Headline3 = getComponent('Headline3');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo({ open = false, placement }: { open?: boolean; placement?: string }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <>
                <Button text="Open popup" onClick={() => setIsOpen(true)} />
                <PopupBase opened={isOpen} onClose={() => setIsOpen(false)} placement={placement}>
                    <Content id="popup-content">
                        <Headline3>Popup</Headline3>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </PopupBase>
            </>
        );
    }

    function Placement({ placement, offset }: { placement?: string; offset?: [number, number] }) {
        return (
            <>
                <PopupBase opened placement={placement} offset={offset}>
                    <Content>
                        <Headline3>Placement: {placement}</Headline3>
                        <Headline3>OffsetX: {offset[0]}</Headline3>
                        <Headline3>OffsetY: {offset[1]}</Headline3>
                        <Button text="Close" />
                    </Content>
                </PopupBase>
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
                <PopupBase opened={isOpenA} frame={ref}>
                    <Content>
                        <Headline3>Popup A</Headline3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                    </Content>
                </PopupBase>

                <PopupBase opened={isOpenC} frame={ref} positionFixed>
                    <StyledInFrame>
                        <Headline3>Popup C</Headline3>
                        <Button text="Close C" onClick={() => setIsOpenC(false)} />
                    </StyledInFrame>
                </PopupBase>

                <OtherContent ref={ref}>
                    <Headline3>Frame</Headline3>
                </OtherContent>

                <PopupBase opened={isOpenB}>
                    <Content>
                        <Headline3>Popup B</Headline3>
                        <Button text="Close B" onClick={() => setIsOpenB(false)} />
                    </Content>
                </PopupBase>
            </>
        );
    }

    function Draggable() {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <>
                <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                <PopupBase opened={isOpen} placement="center" draggable>
                    <Content id="content">
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </PopupBase>
            </>
        );
    }

    function Resizable() {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <>
                <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                <PopupBase opened={isOpen} placement="center" resizable>
                    <Content>
                        Content
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </PopupBase>
            </>
        );
    }

    it('[PLASMA-T2207] Popup: placement=center', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="center" offset={[0, 0]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2208] Popup: placement=top, offsetX=5, offsetY=10', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="top" offset={[5, 10]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2209] Popup: placement=bottom, offsetX=10, offsetY=5', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="bottom" offset={[10, 5]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2210] Popup: placement=right, offsetX=5, offsetY=10', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="right" offset={[5, 10]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2211] Popup: placement=left, offsetX=10, offsetY=5', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="left" offset={[10, 5]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2450] Popup: close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Demo />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#popup-content').should('be.visible');
        cy.get('button').contains('Close').click();
        cy.get('.popup-base-root').should('not.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2451] Popup: frame', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Frame />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open popup A').click();
        cy.get('button').contains('Open popup B').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2452] Popup: draggable', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Draggable />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.get('#content').trigger('mousedown').trigger('mousemove', { clientX: 200, clientY: 100 }).trigger('mouseup');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2453] Popup: resizable', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Resizable />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });
});

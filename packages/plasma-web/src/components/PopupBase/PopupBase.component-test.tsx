import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { surfaceSolid02, surfaceSolid03 } from '@salutejs/plasma-tokens-web';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
`;

const OtherContent = styled.div`
    width: 50%;
    height: 50%;
    background: ${surfaceSolid03};
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    bottom: 0rem;
    right: 0;
`;

describe('plasma-web: PopupBase', () => {
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
                        <Headline3>{placement}</Headline3>
                        <Button text="Close" />
                    </Content>
                </PopupBase>
            </>
        );
    }

    function Frame() {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);

        const ref = React.useRef<HTMLDivElement>(null);
        return (
            <>
                <Button text="Open popup A" onClick={() => setIsOpenA(true)} />
                <Button text="Open popup B" onClick={() => setIsOpenB(true)} />
                <PopupBase opened={isOpenA} frame={ref}>
                    <Content>
                        <Headline3>Popup A</Headline3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                    </Content>
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

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Demo />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close', () => {
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
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('placement basic', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="center" />
                    <Placement placement="right" />
                    <Placement placement="left" />
                    <Placement placement="bottom" />
                    <Placement placement="top" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('placement combination', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="bottom-right" />
                    <Placement placement="bottom-left" />
                    <Placement placement="top-right" />
                    <Placement placement="top-left" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('placement combination + offset', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Placement placement="bottom-right" offset={[1, 1]} />
                    <Placement placement="bottom-left" offset={[1, 1]} />
                    <Placement placement="top-right" offset={[1, 1]} />
                    <Placement placement="top-left" offset={[1, 1]} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('frame', () => {
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
});

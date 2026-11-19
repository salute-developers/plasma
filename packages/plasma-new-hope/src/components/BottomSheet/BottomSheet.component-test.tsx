import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { BottomSheetProps } from './BottomSheet.types';

const Button = getComponent('Button');
const componentExists = hasComponent('BottomSheet');
const describeFn = getDescribeFN('BottomSheet');

describeFn('BottomSheet', () => {
    const BottomSheet = componentExists ? getComponent<BottomSheetProps>('BottomSheet') : () => null;

    const Header = <div style={{ padding: '1.5rem 1.5rem 0.75rem' }}>Источники</div>;

    const Content = (
        <div style={{ padding: '0 1.5rem' }}>
            <div style={{ padding: '0.75rem 0' }}>Контент шторки</div>
            <div style={{ padding: '0.75rem 0' }}>Дополнительное описание</div>
        </div>
    );

    const Footer = (
        <div style={{ padding: '1rem 1.5rem 2.5rem' }}>
            <Button stretching="filled" view="default">
                Готово
            </Button>
        </div>
    );

    const BeforeHeader = (
        <div
            style={{
                height: '10rem',
                background: 'linear-gradient(135deg, #d3f8e2, #a0e7e5 50%, #b4a7f5)',
            }}
        />
    );

    const renderBottomSheet = (props: BottomSheetProps = {}) => (
        <BottomSheet opened withOverlay={false} contentHeader={Header} contentFooter={Footer} {...props}>
            {props.children ?? Content}
        </BottomSheet>
    );

    it('default', () => {
        mount(renderBottomSheet());

        cy.matchImageSnapshot();
    });

    it('with content before header', () => {
        mount(
            renderBottomSheet({
                contentBeforeHeader: BeforeHeader,
            }),
        );

        cy.matchImageSnapshot();
    });

    it('with outer handle', () => {
        mount(
            renderBottomSheet({
                handlePlacement: 'outer',
            }),
        );

        cy.matchImageSnapshot();
    });

    it('scrollable', () => {
        mount(
            renderBottomSheet({
                maxHeight: '20rem',
                children: (
                    <div style={{ padding: '0 1.5rem' }}>
                        {Array.from({ length: 30 }, (_, index) => (
                            <div key={index} style={{ padding: '0.75rem 0' }}>
                                Элемент {index + 1}
                            </div>
                        ))}
                    </div>
                ),
            }),
        );

        cy.matchImageSnapshot();
    });

    it('with snap points', () => {
        mount(
            renderBottomSheet({
                snapPoints: ['40%', '70%'],
                initialSnapPoint: '40%',
            }),
        );

        cy.matchImageSnapshot();
    });

    it('closes on overlay click by default and ignores the click when disabled', () => {
        const onClose = cy.stub().as('onClose');

        mount(
            <BottomSheet data-testid="bottom-sheet" opened closeOnOverlayClick={false} onClose={onClose}>
                <div>Контент</div>
            </BottomSheet>,
        );

        cy.get('[data-testid="bottom-sheet"]').children().first().should('have.css', 'cursor', 'default');
        cy.get('[data-testid="bottom-sheet"]').children().first().click('top');

        cy.get('@onClose').should('not.have.been.called');

        mount(
            <BottomSheet data-testid="bottom-sheet" opened onClose={onClose}>
                <div>Контент</div>
            </BottomSheet>,
        );

        cy.get('[data-testid="bottom-sheet"]').children().first().should('have.css', 'cursor', 'pointer');
        cy.get('[data-testid="bottom-sheet"]').children().first().click('top');

        cy.get('@onClose').should('have.been.calledOnce');
    });

    it('clamps a full-height snap point to the top safe area', () => {
        mount(
            renderBottomSheet({
                withTransition: false,
                snapPoints: ['100%'],
                hasHandle: false,
                hasClose: false,
            }),
        );

        cy.get('.bottom-sheet-panel').should(($panel) => {
            expect($panel[0].style.maxHeight).to.match(/safe-area-inset-top/);
        });

        cy.get('.bottom-sheet-panel').then(($panel) => {
            const panel = $panel[0];
            const previousHeight = panel.style.height;

            panel.style.height = '5000px';

            expect(Math.round(panel.getBoundingClientRect().height)).to.eq(window.innerHeight);

            panel.style.height = previousHeight;
        });
    });

    it('uses the horizontal padding token with a zero fallback', () => {
        mount(renderBottomSheet());

        cy.get('.bottom-sheet-panel').then(($panel) => {
            const content = $panel[0].lastElementChild as HTMLElement;

            expect(getComputedStyle(content).paddingLeft).to.eq('0px');
            expect(getComputedStyle(content).paddingRight).to.eq('0px');

            $panel[0].style.setProperty('--plasma-bottom-sheet-content-padding-horizontal', '1.5rem');

            expect(getComputedStyle(content).paddingLeft).to.eq('24px');
            expect(getComputedStyle(content).paddingRight).to.eq('24px');
        });
    });
});

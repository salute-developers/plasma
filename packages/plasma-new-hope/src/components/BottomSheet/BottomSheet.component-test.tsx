import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { BottomSheetProps } from './BottomSheet.types';

const Button = getComponent('Button');
const componentExists = hasComponent('BottomSheet');
const describeFn = getDescribeFN('BottomSheet');

describeFn('BottomSheet', () => {
    const BottomSheet = componentExists ? getComponent<BottomSheetProps>('BottomSheet') : () => null;

    const Content = <div style={{ minHeight: '4rem' }}>Контент шторки</div>;

    const Image = <div style={{ background: 'linear-gradient(135deg, #d3f8e2, #b4a7f5)' }} />;

    const Buttons = (
        <Button stretching="filled" view="default">
            Готово
        </Button>
    );

    it('with title and buttons', () => {
        mount(
            <BottomSheet opened title="Заголовок" onClose={() => undefined} buttons={Buttons}>
                {Content}
            </BottomSheet>,
        );

        cy.matchImageSnapshot();
    });

    it('with image', () => {
        mount(
            <BottomSheet opened title="Заголовок" onClose={() => undefined} image={Image} buttons={Buttons}>
                {Content}
            </BottomSheet>,
        );

        cy.matchImageSnapshot();
    });

    it('overflowing content: collapsed with handle and dividers on scroll', () => {
        mount(
            <BottomSheet opened title="Источники" onClose={() => undefined} buttons={Buttons}>
                {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} style={{ padding: '0.75rem 0' }}>
                        Элемент {i + 1}
                    </div>
                ))}
            </BottomSheet>,
        );

        cy.get('.bottom-sheet-scrollable').scrollTo(0, 200);
        cy.matchImageSnapshot();
    });

    it('calls onClose on close button click', () => {
        const onClose = cy.stub().as('onClose');

        mount(
            <BottomSheet opened title="Заголовок" onClose={onClose}>
                {Content}
            </BottomSheet>,
        );

        cy.get('[aria-label="Закрыть"]').click();
        cy.get('@onClose').should('have.been.called');
    });
});

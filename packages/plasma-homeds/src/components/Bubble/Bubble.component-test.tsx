import React, { createRef } from 'react';
import type { CSSProperties, RefAttributes } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';
import { inverseBackgroundPrimary } from '@salutejs/plasma-themes/tokens/plasma_homeds';

import type { BubblePlacement, BubbleProps } from './component/Bubble.types';
import { classes, tokens } from './component/Bubble.tokens';

const componentExists = hasComponent('Bubble');
const describeFn = getDescribeFN('Bubble');

const placements: BubblePlacement[] = ['top-right', 'top-left', 'right', 'left'];
const content = 'Прокачать до 100%';

const noMotionStyle = {
    [tokens.delay]: '0s',
    [tokens.duration]: '0s',
} as CSSProperties;

const canvasStyle: CSSProperties = {
    boxSizing: 'border-box',
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: inverseBackgroundPrimary,
};

const stageStyle = (placement: BubblePlacement): CSSProperties => {
    const frame: CSSProperties = { boxSizing: 'border-box', width: '15rem', height: '11rem' };

    if (placement === 'top-right') {
        return { ...frame, padding: '7.5rem 8rem 1.5rem 1.5rem' };
    }

    if (placement === 'top-left') {
        return { ...frame, padding: '7.5rem 1.5rem 1.5rem 8rem' };
    }

    if (placement === 'right') {
        return { ...frame, padding: '4rem 9rem 4rem 1.5rem' };
    }

    return { ...frame, padding: '4rem 1.5rem 4rem 9rem' };
};

describeFn('Bubble', () => {
    const Bubble = componentExists ? getComponent<BubbleProps & RefAttributes<HTMLDivElement>>('Bubble') : () => null;

    it('renders collapsed trigger by default', () => {
        mount(<Bubble content="Прокачать до 100%" />);

        cy.get(`.${classes.trigger}`).should('be.visible');
        cy.get(`.${classes.opened}`).should('not.exist');
        cy.get(`.${classes.content}`).should('have.attr', 'aria-hidden', 'true');
    });

    it('shows content when opened', () => {
        mount(<Bubble opened content="Прокачать до 100%" style={noMotionStyle} />);

        cy.get(`.${classes.opened}`).should('exist');
        cy.get(`.${classes.content}`).should('have.attr', 'aria-hidden', 'false').and('contain', 'Прокачать до 100%');
        cy.get(`.${classes.trigger}`).should('have.attr', 'aria-expanded', 'true');
    });

    it('sets placement data attribute', () => {
        mount(<Bubble placement="top-left" content="Hint" />);

        cy.get('[data-placement="top-left"]').should('exist');
    });

    it('forwards the ref and HTML attributes', () => {
        const ref = createRef<HTMLDivElement>();
        const onClick = cy.stub().as('onClick');

        mount(<Bubble ref={ref} id="bubble" className="custom" content="Hint" onClick={onClick} />);

        cy.get('#bubble')
            .should('have.class', 'custom')
            .then(($element) => expect(ref.current).to.equal($element[0]));
        cy.get(`.${classes.trigger}`).click();
        cy.get('@onClick').should('have.been.calledOnce');
    });

    it('collapsed placements', () => {
        mount(
            <div style={canvasStyle}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '1rem' }}>
                    {placements.map((placement) => (
                        <div key={placement} style={stageStyle(placement)}>
                            <Bubble placement={placement} content={content} style={noMotionStyle} />
                        </div>
                    ))}
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('opened placements', () => {
        mount(
            <div style={canvasStyle}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '1rem' }}>
                    {placements.map((placement) => (
                        <div key={placement} style={stageStyle(placement)}>
                            <Bubble opened placement={placement} content={content} style={noMotionStyle} />
                        </div>
                    ))}
                </div>
            </div>,
        );

        cy.get(`.${classes.opened}`).should('have.length', placements.length);
        cy.matchImageSnapshot();
    });
});

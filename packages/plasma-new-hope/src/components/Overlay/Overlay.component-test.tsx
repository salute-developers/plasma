import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { OverlayProps } from './Overlay.types';

const componentExists = hasComponent('Overlay');
const describeFn = getDescribeFN('Overlay');

const text = 'Голосовая викторина с Валдисом Пельшем';
const showOverlayText = 'Показать Overlay';
const closeOverlayText = 'Скрыть Overlay';

describeFn('Overlay', () => {
    const Overlay = componentExists ? getComponent<OverlayProps>('Overlay') : () => null;
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

    function OverlayForTest(props: {
        withBlur?: boolean;
        transparent?: boolean;
        isClickable?: boolean;
        onOverlayClick?: () => void;
    }) {
        const [showOverlay, setShowOverlay] = React.useState(false);

        return (
            <div>
                {showOverlay && (
                    <Overlay
                        zIndex="900"
                        backgroundColorProperty="rgba(8, 12, 9, 0.5)"
                        withBlur={props.withBlur}
                        transparent={props.transparent}
                        isClickable={props.isClickable}
                        onOverlayClick={props.onOverlayClick}
                        data-testid="overlay"
                    />
                )}
                <Button text={showOverlayText} onClick={() => setShowOverlay(true)} />
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1000,
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Button onClick={() => setShowOverlay(false)} disabled={!showOverlay}>
                        {closeOverlayText}
                    </Button>
                </div>
            </div>
        );
    }

    it('simple', () => {
        mount(<Demo />);
        cy.matchImageSnapshot();
    });

    it('withBlur', () => {
        mount(<Demo withBlur />);
        cy.matchImageSnapshot();
    });

    it('transparent', () => {
        mount(<Demo transparent />);
        cy.matchImageSnapshot();
    });

    it('isClickable', () => {
        const onOverlayClick = cy.stub().as('onOverlayClick');

        mount(<OverlayForTest transparent={false} isClickable onOverlayClick={onOverlayClick} />);
        cy.get('button').contains(showOverlayText).click();
        cy.get('[data-testid="overlay"]').click();
        cy.get('@onOverlayClick').should('have.been.calledOnce');
    });

    it('without isClickable', () => {
        const onOverlayClick = cy.stub().as('onOverlayClick');

        mount(<OverlayForTest transparent={false} isClickable={false} onOverlayClick={onOverlayClick} />);
        cy.get('button').contains(showOverlayText).click();
        cy.get('[data-testid="overlay"]').click();
        cy.get('@onOverlayClick').should('not.have.been.called');
    });
});

import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

const showOverlayText = 'Показать Overlay';
const closeOverlayText = 'Скрыть Overlay';

const StyledContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
`;

describe('plasma-web: Overlay', () => {
    const Overlay = getComponent('Overlay');
    const Button = getComponent('Button');

    function OverlayForTest(props: { withBlur?: boolean; transparent?: boolean; isClickable?: boolean }) {
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
                    />
                )}
                <Button text={showOverlayText} onClick={() => setShowOverlay(true)} />
                <StyledContent style={{ position: 'relative', zIndex: 1000 }}>
                    <Button onClick={() => setShowOverlay(false)} disabled={!showOverlay}>
                        {closeOverlayText}
                    </Button>
                </StyledContent>
            </div>
        );
    }

    it('[PLASMA-T1661] Overlay: withBlur, isClickable=false, transparent=false', () => {
        mount(
            <CypressTestDecorator>
                <OverlayForTest withBlur transparent={false} isClickable={false} />
            </CypressTestDecorator>,
        );
        cy.get('button').contains(showOverlayText).click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1660] Overlay: withBlur=false, isClickable=true, transparent=false', () => {
        mount(
            <CypressTestDecorator>
                <OverlayForTest withBlur={false} transparent={false} isClickable />
            </CypressTestDecorator>,
        );
        cy.get('button').contains(showOverlayText).click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1662] Overlay: withBlur=false, isClickable=false, transparent=true', () => {
        mount(
            <CypressTestDecorator>
                <OverlayForTest withBlur={false} transparent isClickable={false} />
            </CypressTestDecorator>,
        );
        cy.get('button').contains(showOverlayText).click();
        cy.matchImageSnapshot();
    });
});

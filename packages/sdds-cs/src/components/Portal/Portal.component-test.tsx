import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const text = 'Тортик - это ложь';

const StyledWrapper = styled.div`
    padding: 1.25rem;
    margin-bottom: 0.625rem;
    margin-top: 0.625rem;

    border: 1px solid;
`;

describe('sdds-cs: Portal', () => {
    const Portal = getComponent('Portal');
    const Button = getComponent('Button');
    const BodyM = getComponent('BodyM');

    function Demo({ disabled = false }: { disabled?: boolean }) {
        const [show, setShow] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);

        return (
            <>
                <Button onClick={() => setShow(!show)} />
                <StyledWrapper id="parentContainer">
                    <BodyM>
                        По завершении программы вам предложат тортик и возможность выговориться перед дипломированным
                        сочувственным слушателем.
                    </BodyM>
                    {show && containerRef.current && (
                        <Portal disabled={disabled} container={containerRef.current}>
                            <BodyM>{text}</BodyM>
                        </Portal>
                    )}
                </StyledWrapper>
                <StyledWrapper id="targetContainer" ref={containerRef} />
            </>
        );
    }

    it('open portal', () => {
        mount(
            <CypressTestDecorator>
                <Demo />,
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#parentContainer').contains(text).should('not.exist');
        cy.get('#targetContainer').contains(text).should('be.visible');
    });

    it('disabled portal', () => {
        mount(
            <CypressTestDecorator>
                <Demo disabled />,
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#parentContainer').contains(text).should('be.visible');
        cy.get('#targetContainer').contains(text).should('not.exist');
    });
});

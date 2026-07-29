import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const descriptionEnabled = 'Содержимое портала появится в нижнем блоке.';
const descriptionDisabled = 'Если портал выключен (disabled), то содержимое появится в данном блоке.';
const text = 'Содержимое портала';

const StyledWrapper = styled.div`
    padding: 1.25rem;
    margin-bottom: 0.625rem;
    margin-top: 0.625rem;
    border: 1px solid;
`;

describe('sdds-insol: Portal', () => {
    const Portal = getComponent('Portal');
    const Button = getComponent('Button');
    const BodyM = getComponent('BodyM');

    function Demo({ disabled = false }: { disabled?: boolean }) {
        const [show, setShow] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);

        return (
            <>
                <Button onClick={() => setShow(!show)}>{show ? 'Скрыть' : 'Показать'}</Button>
                <StyledWrapper id="parentContainer">
                    <BodyM style={{ marginBottom: '1.25rem' }}>{descriptionEnabled}</BodyM>
                    <BodyM style={{ marginBottom: '1.25rem' }}>{descriptionDisabled}</BodyM>
                    {show && containerRef.current && (
                        <Portal disabled={disabled} container={containerRef.current}>
                            <BodyM bold>{text}</BodyM>
                        </Portal>
                    )}
                </StyledWrapper>
                <StyledWrapper id="targetContainer" ref={containerRef} />
            </>
        );
    }

    it('[PLASMA-T1683] Portal: enabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#parentContainer').should('not.have.text', descriptionEnabled + descriptionDisabled + text);
        cy.get('#targetContainer').should('have.text', text);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1684] Portal: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo disabled />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#parentContainer').should('have.text', descriptionEnabled + descriptionDisabled + text);
        cy.get('#targetContainer').should('not.have.text', text);

        cy.matchImageSnapshot();
    });
});

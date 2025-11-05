import React from 'react';
import styled from 'styled-components';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const StyledWrapper = styled.div<{ orientation?: string }>`
    display: inline-flex;
    gap: 0.5rem;
    padding: 1rem;
    background: #aab1e9;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'column' : 'row')};
`;

describe('sdds-insol: Divider', () => {
    const Divider = getComponent('Divider');
    const BodyS = getComponent('BodyS');

    const Demo = ({
        view = 'default',
        orientation = 'horizontal',
        length = '100%',
        beforeText = 'Before',
        afterText = 'After',
    }) => {
        return (
            <StyledWrapper orientation={orientation}>
                <BodyS>{beforeText}</BodyS>
                <Divider view={view} orientation={orientation} length={length} />
                <BodyS>{afterText}</BodyS>
            </StyledWrapper>
        );
    };

    it('[PLASMA-T1730] Divider: view=default, orientation=horizontal, length=100%', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1731] Divider: view=dark, orientation=vertical, length=50%', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="dark" orientation="vertical" length="50%" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1732] Divider: view=light', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="light" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1733] Divider: view=inverse', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="inverse" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

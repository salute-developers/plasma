import React from 'react';
import styled from 'styled-components';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const StyledWrapper = styled.div`
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    &.vertical {
        flex-direction: row;
    }

    &.horizontal {
        flex-direction: column;
    }
`;

describe('plasma-web: Divider', () => {
    const Divider = getComponent('Divider');
    const BodyS = getComponent('BodyS');

    const Demo = ({ orientation = 'horizontal', length = '100%', beforeText = 'Before', afterText = 'After' }) => {
        return (
            <StyledWrapper className={orientation}>
                <BodyS>{beforeText}</BodyS>
                <Divider orientation={orientation} length={length} />
                <BodyS>{afterText}</BodyS>
            </StyledWrapper>
        );
    };

    it('simple: orientation', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
                <PadMe />
                <Demo orientation="vertical" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('custom length', () => {
        mount(
            <CypressTestDecorator>
                <Demo beforeText="in % before" afterText="in % after" length="50%" />
                <PadMe />
                <Demo beforeText="in px before" afterText="in px after" length="100px" />
                <PadMe />
                <Demo beforeText="in rem before" afterText="in rem after" length="10rem" />
                <PadMe />
                <Demo beforeText="without unit before" afterText="without unit after" length="60" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

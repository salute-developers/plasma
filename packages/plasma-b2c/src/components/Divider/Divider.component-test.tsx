import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

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

    const Demo = ({
        orientation = 'horizontal',
        orientationScale = '100%',
        beforeText = 'Before',
        afterText = 'After',
    }) => {
        return (
            <StyledWrapper className={orientation}>
                <BodyS>{beforeText}</BodyS>
                <Divider orientation={orientation} orientationScale={orientationScale} />
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

    it('custom orientationScale', () => {
        mount(
            <CypressTestDecorator>
                <Demo beforeText="in % before" afterText="in % after" orientationScale="50%" />
                <PadMe />
                <Demo beforeText="in px before" afterText="in px after" orientationScale="100px" />
                <PadMe />
                <Demo beforeText="in rem before" afterText="in rem after" orientationScale="10rem" />
                <PadMe />
                <Demo beforeText="without unit before" afterText="without unit after" orientationScale="60" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

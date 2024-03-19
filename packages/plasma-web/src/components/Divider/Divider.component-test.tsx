import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

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

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

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
            <CypressTestDecoratorWithTypo>
                <Demo />
                <PadMe />
                <Demo orientation="vertical" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('custom orientationScale', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo beforeText="in % before" afterText="in % after" orientationScale="50%" />
                <PadMe />
                <Demo beforeText="in px before" afterText="in px after" orientationScale="100px" />
                <PadMe />
                <Demo beforeText="in rem before" afterText="in rem after" orientationScale="10rem" />
                <PadMe />
                <Demo beforeText="without unit before" afterText="without unit after" orientationScale="60" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});

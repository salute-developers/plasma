import React from 'react';
import styled from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { DividerProps } from './Divider.types';

const componentExists = hasComponent('Divider');
const describeFn = getDescribeFN('Divider');

const StyledWrapper = styled.div<{ orientation?: string }>`
    display: inline-flex;
    gap: 0.5rem;
    padding: 1rem;
    background: #aab1e9;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'column' : 'row')};
`;

const componentProps = {};

getBaseVisualTests({
    component: 'Divider',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: () => {
        cy.get('body').invoke('attr', 'style', 'padding: 1rem; background: #aab1e9;');
    },
});

describeFn('Divider', () => {
    const Divider = componentExists ? getComponent<DividerProps>('Divider') : () => null;
    const BodyS = (hasComponent('BodyS') ? getComponent('BodyS') : 'div') as React.ElementType;

    const Demo = ({
        orientation = 'horizontal',
        length = '100%',
        beforeText = 'Before',
        afterText = 'After',
        ...rest
    }: DividerProps & { beforeText?: string; afterText?: string }) => {
        return (
            <StyledWrapper orientation={orientation}>
                <BodyS>{beforeText}</BodyS>
                <Divider orientation={orientation} length={length} {...rest} />
                <BodyS>{afterText}</BodyS>
            </StyledWrapper>
        );
    };

    it('orientation', () => {
        mount(
            <>
                <Demo />
                <PadMe />
                <Demo orientation="vertical" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('custom length', () => {
        mount(
            <>
                <Demo beforeText="in % before" afterText="in % after" length="50%" />
                <PadMe />
                <Demo beforeText="in px before" afterText="in px after" length="100px" />
                <PadMe />
                <Demo beforeText="in rem before" afterText="in rem after" length="10rem" />
                <PadMe />
                <Demo beforeText="without unit before" afterText="without unit after" length="60" />
            </>,
        );

        cy.matchImageSnapshot();
    });
});

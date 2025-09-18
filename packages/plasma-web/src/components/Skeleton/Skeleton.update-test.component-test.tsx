import React from 'react';
import { mount, CypressTestDecorator, getComponent, withNoAnimation } from '@salutejs/plasma-cy-utils';
import type { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Skeleton', () => {
    describe('LineSkeleton', () => {
        const LineSkeleton = getComponent('LineSkeleton');
        const Line = withNoAnimation(LineSkeleton);
        const CypressTestDecoratorWithTypo: FC = ({ children }) => (
            <CypressTestDecorator>
                <StandardTypoStyle />
                {children}
            </CypressTestDecorator>
        );

        it('[PLASMA-T1832] Skeleton: size=dsplL, roundness=0', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Line size="dsplL" roundness={0} />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('[PLASMA-T1833] Skeleton: size=button2, roundness=32, lighter', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Line size="button2" roundness={32} lighter />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('[PLASMA-T1834] Skeleton: size=textXS, roundness=250', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Line size="textXS" roundness={250} />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });
});

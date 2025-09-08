import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-insol: Skeleton', () => {
    describe('LineSkeleton', () => {
        const LineSkeleton = getComponent('LineSkeleton');

        it('[PLASMA-T1832] Skeleton: size=dsplL, roundness=0', () => {
            mount(
                <CypressTestDecorator>
                    <LineSkeleton size="dsplL" roundness={0} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('[PLASMA-T1833] Skeleton: size=bodyL, roundness=32, lighter', () => {
            mount(
                <CypressTestDecorator>
                    <LineSkeleton size="bodyL" roundness={32} lighter />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('[PLASMA-T1834] Skeleton: size=textXS, roundness=250', () => {
            mount(
                <CypressTestDecorator>
                    <LineSkeleton size="textXS" roundness={250} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });
});

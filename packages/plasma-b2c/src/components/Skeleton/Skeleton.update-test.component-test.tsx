import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-b2c: Skeleton', () => {
    describe('LineSkeleton', () => {
        const LineSkeleton = getComponent('LineSkeleton');

        it('[PLASMA-T1832] Skeleton: size=display1, roundness=0', () => {
            mount(
                <CypressTestDecorator>
                    <LineSkeleton size="display1" roundness={0} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('[PLASMA-T1833] Skeleton: size=button2, roundness=32, lighter', () => {
            mount(
                <CypressTestDecorator>
                    <LineSkeleton size="button2" roundness={32} lighter />
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

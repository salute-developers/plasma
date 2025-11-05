import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-hope: UploadAudio', () => {
    const UploadAudio = getComponent('UploadAudio');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <UploadAudio />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });
});

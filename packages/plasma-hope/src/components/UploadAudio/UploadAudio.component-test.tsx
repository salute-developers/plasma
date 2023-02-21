import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-hope: UploadAudio', () => {
    const UploadAudio = getComponent('UploadAudio');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <UploadAudio />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

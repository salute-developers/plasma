import React from 'react';
import { Headline1 } from '@salutejs/plasma-core';
import { mount, CypressTestDecorator } from '@salutejs/plasma-cy-utils';

import { Editable } from '.';

describe('Editable', () => {
    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ background: '#000' }}>
                    <Editable value="Пример текста" textComponent={Headline1} />
                </div>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

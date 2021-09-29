import React from 'react';
import ReactDom from 'react-dom';
import { mount } from '@cypress/react';
import { Headline1 } from '@salutejs/plasma-core';
import { CypressTestDecorator } from '@salutejs/plasma-cy-utils';

import { Editable } from '.';

describe('Editable', () => {
    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ background: '#000' }}>
                    <Editable value="Пример текста" textComponent={Headline1} />
                </div>
            </CypressTestDecorator>,
            { ReactDom },
        );
        cy.matchImageSnapshot();
    });
});

import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-cs: Link', () => {
    const Link = getComponent('Link');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <style>{`
                    body {
                        font-family: "SB Sans Text", sans-serif;
                    }
                `}</style>
                <Link href="https://plasma.sberdevices.ru">Hello Plasma</Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

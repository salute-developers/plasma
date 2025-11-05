import React from 'react';
import ReactDom from 'react-dom';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Button = getComponent('Button');

describe('Button', () => {
    it('renders Button', () => {
        mount(
            <CypressTestDecorator>
                <Button
                    text="Hello Plasma"
                    size="m"
                    view="primary"
                    pin="square-square"
                    scaleOnInteraction
                    outlined
                    focused={false}
                    disabled={false}
                    square={false}
                    stretch={false}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

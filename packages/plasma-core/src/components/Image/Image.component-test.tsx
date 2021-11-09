import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-core: Image', () => {
    const Image = getComponent('Image');

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Image src="https://bit.ly/3xQvdgFimages/320_320_0.jpg" width="320px" height="320px" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('div', () => {
        mount(
            <CypressTestDecorator>
                <Image
                    base="div"
                    src="https://bit.ly/3xQvdgFimages/320_320_0.jpg"
                    width="320px"
                    height="320px"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

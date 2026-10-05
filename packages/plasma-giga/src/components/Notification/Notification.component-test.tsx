import React from 'react';
import styled from 'styled-components';
import { mount } from '@salutejs/plasma-cy-utils';

import { Button } from '../Button';

import { Notification } from './Notification';

const Actions = styled.div`
    display: flex;
    gap: 0.125rem;
`;

const src = 'https://bit.ly/3xRatFGimages/320_320_0.jpg';

describe('Notification image', () => {
    beforeEach(() => {
        cy.intercept(src, (req) => {
            req.reply({
                fixture: 'images/320_320_0.jpg',
            });
        });
    });

    (['small', 'fullWidth'] as const).forEach((imageSize) => {
        it(`vertical, imageSize=${imageSize}`, () => {
            mount(
                <Notification
                    title="Title"
                    size="xs"
                    image={{ src, alt: 'Artwork' }}
                    imageSize={imageSize}
                    actions={
                        <Actions>
                            <Button text="Label" size="xs" stretch />
                            <Button text="Label" size="xs" stretch />
                        </Actions>
                    }
                >
                    Text
                </Notification>,
            );

            cy.get('.notification-image').should('have.css', 'width', imageSize === 'small' ? '72px' : '240px');
            cy.get('.notification-image').should('have.css', 'height', imageSize === 'small' ? '72px' : '200px');
            cy.get('.notification-image img').should(($image) => {
                expect(($image[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
            });
            cy.get('.notification-wrapper').should('have.css', 'height', imageSize === 'small' ? '208px' : '320px');
            cy.get('.notification-textbox').should('have.css', 'padding-right', '2px');
            cy.get('.notification-close-icon').should('have.css', 'top', '16px').and('have.css', 'right', '16px');
            cy.matchImageSnapshot();
        });
    });

    it('full-width image follows a custom notification width without actions or close icon', () => {
        mount(
            <Notification
                title="Title"
                image={{ src, alt: 'Artwork' }}
                imageSize="fullWidth"
                width="20rem"
                maxWidth="18rem"
                showCloseIcon={false}
            >
                Text
            </Notification>,
        );

        cy.get('.notification-image').should('have.css', 'width', '288px').and('have.css', 'height', '200px');
        cy.get('.notification-wrapper').should('have.css', 'height', '272px');
        cy.get('.notification-close-icon').should('not.exist');
        cy.get('.notification-buttons-wrapper').should('not.exist');
    });
});

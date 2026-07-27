import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import React from 'react';

const AvatarImage = 'images/avatar.png';

describe('sdds-insol: AvatarGroup', () => {
    const Avatar = getComponent('Avatar');
    const AvatarGroup = getComponent('AvatarGroup');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <AvatarGroup>
                    {Array(5)
                        .fill(true)
                        .map(() => (
                            <Avatar size="xxl" url={AvatarImage} />
                        ))}
                </AvatarGroup>
            </CypressTestDecorator>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });
});

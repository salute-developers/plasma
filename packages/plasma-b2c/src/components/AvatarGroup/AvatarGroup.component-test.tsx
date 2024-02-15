import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import React from 'react';

describe('plasma-b2c: AvatarGroup', () => {
    const Avatar = getComponent('Avatar');
    const AvatarGroup = getComponent('AvatarGroup');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <AvatarGroup>
                    {Array(5)
                        .fill(true)
                        .map(() => (
                            <Avatar size="xxl" url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                        ))}
                </AvatarGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

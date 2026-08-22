import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { AvatarProps } from '../Avatar/Avatar.types';

import type { AvatarGroupProps } from './AvatarGroup.types';

const componentExists = hasComponent('AvatarGroup') && hasComponent('Avatar');
const describeFn = getDescribeFN('AvatarGroup');

const Avatar = getComponent<AvatarProps>('Avatar');

const AvatarImage = 'images/avatar.png';

const getAvatars = (count = 5) =>
    Array(count)
        .fill(true)
        .map((_, i) => <Avatar key={`avatar-${i}`} size="xxl" name="Иван Фадеев" />);

const componentProps = {
    children: getAvatars(),
};

getBaseVisualTests({
    component: 'AvatarGroup',
    componentProps,
});

describeFn('AvatarGroup', () => {
    const AvatarGroup = componentExists ? getComponent<AvatarGroupProps>('AvatarGroup') : () => null;

    it('simple', () => {
        mount(
            <AvatarGroup>
                {Array(5)
                    .fill(true)
                    .map((_, i) => (
                        <Avatar key={`avatar-${i}`} size="xxl" url={AvatarImage} />
                    ))}
            </AvatarGroup>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });
});

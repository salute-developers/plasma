import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
    PadMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconEye } from 'override/_Icon';

import type { AvatarProps } from './Avatar.types';

const componentExists = hasComponent('Avatar');
const describeFn = getDescribeFN('Avatar');
const itSkipCs = skipForPackages(['sdds-cs']);
const itScalable = skipForPackages([
    'plasma-b2c',
    'plasma-web',
    'plasma-giga',
    'plasma-homeds',
    'sdds-cs',
    'sdds-insol',
    'sdds-insol-next',
    'sdds-finai',
    'sdds-netology',
    'sdds-bizcom',
    'sdds-os',
    'sdds-serv',
    'sdds-scan',
    'sdds-sbcom',
    'sdds-platform-ai',
]);

const AvatarImage = 'images/avatar.png';
const AvatarName = 'Иван Фадеев';

const extraPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;
const counterViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'] as const;
const badgeViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'] as const;

const componentProps = {
    name: AvatarName,
};

getBaseVisualTests({
    component: 'Avatar',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'shape'],
    excludePropsValues: {
        size: ['fit', 'scalable'],
    },
});

describeFn('Avatar', () => {
    const Avatar = componentExists ? getComponent<AvatarProps>('Avatar') : () => null;

    it('simple', () => {
        mount(<Avatar name={AvatarName} />);

        cy.matchImageSnapshot();
    });

    it('with Avatar url', () => {
        mount(<Avatar url={AvatarImage} />);

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('size=fit', () => {
        mount(
            <div style={{ width: 100, height: 100, border: '1px solid blue' }}>
                <Avatar size="fit" url={AvatarImage} />
            </div>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    itScalable('size=scalable', () => {
        mount(
            <div style={{ width: 100, height: 100, border: '1px solid blue' }}>
                <Avatar size="scalable" url={AvatarImage} />
            </div>,
        );

        cy.mockImage('img', AvatarImage);
        cy.matchImageSnapshot();
    });

    it('with status', () => {
        mount(
            <>
                <Avatar status="active" name={AvatarName} />
                <PadMe />
                <Avatar status="inactive" name={AvatarName} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasExtra,type=counter,extraPlacement', () => {
        mount(
            <>
                {extraPlacements.map((placement) => (
                    <React.Fragment key={placement}>
                        <Avatar
                            size="m"
                            name={AvatarName}
                            extraPlacement={placement}
                            type="counter"
                            count={33}
                            counterView="positive"
                            hasExtra
                        />
                        <PadMe />
                    </React.Fragment>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('_hasExtra,type=counter,counterView', () => {
        mount(
            <>
                {counterViews.map((counterView) => (
                    <React.Fragment key={counterView}>
                        <Avatar
                            size="m"
                            name={AvatarName}
                            type="counter"
                            count={33}
                            counterView={counterView}
                            hasExtra
                        />
                        <PadMe />
                    </React.Fragment>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    itSkipCs('_hasExtra,type=badge,badgeView', () => {
        mount(
            <>
                {badgeViews.map((badgeView) => (
                    <React.Fragment key={badgeView}>
                        <Avatar size="m" name={AvatarName} type="badge" text="15" badgeView={badgeView} hasExtra />
                        <PadMe />
                    </React.Fragment>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });
});

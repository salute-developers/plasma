import React from 'react';
import { Button, detectDevice, Image } from '@salutejs/plasma-ui';

import { startApp, stubImage, images } from '../../testHelpers/testRenderHelpers';

import { StateLayout } from './StateLayout';
import { StateLayoutCommonProps } from './types';

const defaultProps: React.PropsWithChildren<StateLayoutCommonProps> = {
    title: 'StateLayout Component Test',
    button: <Button view="primary" text="Button" data-cy="test-control" />,
    background: images.imageBg,
    backgroundFit: 'cover',
    image: images.image320,
};

function initStateLayoutTest(props: React.PropsWithChildren<StateLayoutCommonProps> = defaultProps) {
    return startApp([
        {
            name: 'state',
            component: () => <StateLayout {...props} />,
        },
    ]);
}

describe('StateLayout', () => {
    beforeEach(() => {
        stubImage('https://bit.ly/3xRatFGimages/320_320_0.jpg', 'images/320_320_0.jpg');
        stubImage('https://bit.ly/3MuphOm-storybook/images/parrot.png', 'images/parrot.png');
    });

    afterEach(() => {
        cy.matchImageSnapshot();
    });

    it('render', () => {
        initStateLayoutTest().then(() => {
            cy.get('[data-cy="state-layout-title"]').should('contain.text', 'StateLayout Component Test');
            cy.get('[data-cy="test-control"]').should('be.enabled').should('be.visible');
            cy.get('[data-cy="StateLayoutImage-container"]').children().should('have.length', 1);
        });
    });

    it('render with children', () => {
        const imageWidth = () => {
            switch (detectDevice()) {
                case 'sberBox':
                    return '656px';
                case 'sberPortal':
                    return '486px';
                default:
                    return '192px';
            }
        };
        initStateLayoutTest({
            ...defaultProps,
            children: (
                <div style={{ width: imageWidth() }}>
                    <Image base="div" src={images.image320} ratio="1 / 1" data-cy="test-image" />
                </div>
            ),
        }).then(() => {
            cy.get('[data-cy="test-image"]').should('be.visible');
        });
    });

    it('render with broken image', () => {
        initStateLayoutTest({
            ...defaultProps,
            image: 'invalid url',
        }).then(() => {
            cy.get('[data-cy="StateLayoutImage-container"]').should('exist');
        });
    });

    it('render with custom ratio', () => {
        initStateLayoutTest({
            ...defaultProps,
            image: { src: images.image320, customRatio: '150' },
        }).then(() => {
            cy.get('[data-cy="StateLayoutImage-container"]').should('exist');
        });
    });

    it('render without background mask', () => {
        initStateLayoutTest({
            ...defaultProps,
            image: { src: images.image320, customRatio: '100' },
            backgroundMask: false,
        }).then(() => {
            cy.get('[data-cy="StateLayoutImage-container"]').should('exist');
        });
    });

    it('render with custom renderText prop', () => {
        initStateLayoutTest({
            renderText: (
                <>
                    <p>Правильно: 8 / 10</p>
                    <h3 data-cy="StateLayout-custom-h3">Прекрасно!</h3>
                    <h2>Как Вам такое удалось?</h2>
                </>
            ),
            button: defaultProps.button,
            image: { src: images.image320, customRatio: '150' },
        }).then(() => {
            cy.get('[data-cy="StateLayout-custom-h3"]').should('exist');
        });
    });
});

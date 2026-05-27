import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    PadMe,
    SpaceMe,
    withNoAnimation,
} from '@salutejs/plasma-cy-utils';

import type { ButtonProps } from '../Button/Button.types';

import type { LineSkeletonProps } from './LineSkeleton/LineSkeleton.types';
import type { RectSkeletonProps } from './RectSkeleton/RectSkeleton.types';
import type { TextSkeletonProps } from './TextSkeleton/TextSkeleton.types';

const componentExists = hasComponent('LineSkeleton');
const describeFn = getDescribeFN('LineSkeleton');

const roundnessKeys = [0, 4, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250] as const;

getBaseVisualTests({
    component: 'LineSkeleton',
    componentProps: {},
    configPropsForMatrix: ['view', 'size'],
});

getBaseVisualTests({
    component: 'TextSkeleton',
    componentProps: { lines: 2 },
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Skeleton', () => {
    describe('LineSkeleton', () => {
        const LineSkeleton = componentExists ? getComponent<LineSkeletonProps>('LineSkeleton') : () => null;
        const Line = withNoAnimation(LineSkeleton);

        it('simple', () => {
            mount(<Line />);
            cy.matchImageSnapshot();
        });

        it('roundness', () => {
            mount(
                <>
                    {roundnessKeys.map((roundness) => (
                        <Line key={roundness} roundness={roundness} />
                    ))}
                </>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('RectSkeleton', () => {
        const RectSkeleton = componentExists ? getComponent<RectSkeletonProps>('RectSkeleton') : () => null;

        // NOTE: RectSkeleton doesn't start animation and snaps are empty
        // const Rect = withNoAnimation(RectSkeleton);

        it('simple', () => {
            mount(<RectSkeleton width="12rem" height="8rem" />);
            cy.matchImageSnapshot();
        });

        it('width, height', () => {
            mount(
                <>
                    <RectSkeleton width="12rem" height="8rem" />
                    <SpaceMe />
                    <RectSkeleton width={128} height={128} />
                    <SpaceMe />
                    <RectSkeleton width="50px" height="80px" />
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('roundness', () => {
            mount(
                <>
                    {roundnessKeys.map((roundness) => (
                        <React.Fragment key={roundness}>
                            <RectSkeleton width="12rem" height="2rem" roundness={roundness} />
                            <PadMe />
                        </React.Fragment>
                    ))}
                </>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('TextSkeleton', () => {
        const TextSkeleton = componentExists ? getComponent<TextSkeletonProps>('TextSkeleton') : () => null;
        const Text = withNoAnimation(TextSkeleton);

        it('simple', () => {
            mount(<Text lines={3} />);
            cy.matchImageSnapshot();
        });

        it('lines', () => {
            mount(
                <>
                    <Text lines={0} />
                    <Text lines={1} />
                    <Text lines={2} />
                    <Text lines={3} />
                    <Text lines={4} />
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <>
                    {roundnessKeys.map((roundness) => (
                        <React.Fragment key={roundness}>
                            <Text lines={2} roundness={roundness} />
                            <PadMe />
                        </React.Fragment>
                    ))}
                </>,
            );
            cy.matchImageSnapshot();
        });

        it('width', () => {
            mount(
                <>
                    <Text lines={3} width={50} />
                    <Text lines={3} width="2rem" />
                </>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('withSkeleton', () => {
        const withSkeleton = componentExists ? getComponent('withSkeleton') : null;
        const Button = componentExists ? getComponent<ButtonProps>('Button') : null;
        const Btn = withSkeleton && Button ? withNoAnimation(withSkeleton(Button)) : () => null;

        it('simple', () => {
            mount(
                <>
                    <Btn text="Loading" skeleton />
                    <PadMe />
                    <Btn text="Done" />
                </>,
            );
            cy.matchImageSnapshot();
        });
    });
});

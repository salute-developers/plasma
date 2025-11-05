import React from 'react';
import { CypressTestDecorator, getComponent, PadMe, SpaceMe, withNoAnimation } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { radiuses } from '@salutejs/plasma-new-hope/styled-components';

import { LineSkeleton as LineSkeletonCS, RectSkeleton as RectSkeletonCS, TextSkeleton as TextSkeletonCS } from '.';

// from  typography in '@salutejs/plasma-tokens'
const textSizes = [
    'bodyL',
    'bodyM',
    'bodyS',
    'bodyXS',
    'bodyXXS',
    'dsplL',
    'dsplM',
    'dsplS',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'textL',
    'textM',
    'textS',
    'textXS',
];
const roundnessKeys = Object.keys(radiuses).map((r) => Number(r));

describe('sddds-cs: Skeleton', () => {
    describe('LineSkeleton', () => {
        const LineSkeleton = getComponent('LineSkeleton') as typeof LineSkeletonCS;
        const Line = withNoAnimation(LineSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecorator>
                    <Line />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecorator>
                    {textSizes.map((size) => (
                        <Line key={size} size={size} />
                    ))}
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecorator>
                    {roundnessKeys.map((roundness) => (
                        <Line key={roundness} roundness={roundness} />
                    ))}
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('RectSkeleton', () => {
        const RectSkeleton = getComponent('RectSkeleton') as typeof RectSkeletonCS;
        const Rect = withNoAnimation(RectSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecorator>
                    <Rect width="12rem" height="8rem" />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecorator>
                    <Rect width="12rem" height="8rem" />
                    <SpaceMe />
                    <Rect width={128} height={128} />
                    <SpaceMe />
                    <Rect height="8rem" />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecorator>
                    {roundnessKeys.map((roundness) => (
                        <>
                            <Rect key={roundness} width="12rem" height="2rem" roundness={roundness} />
                            <PadMe key={roundness} />
                        </>
                    ))}
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('TextSkeleton', () => {
        const TextSkeleton = getComponent('TextSkeleton') as typeof TextSkeletonCS;
        const Text = withNoAnimation(TextSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecorator>
                    <Text size="bodyL" lines={2} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('__lines', () => {
            mount(
                <CypressTestDecorator>
                    <Text size="bodyL" lines={0} />
                    <Text size="bodyL" lines={1} />
                    <Text size="bodyL" lines={2} />
                    <Text size="bodyL" lines={3} />
                    <Text size="bodyL" lines={4} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
        it('__lines:20', () => {
            mount(
                <CypressTestDecorator>
                    <Text size="bodyL" lines={20} />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecorator>
                    {textSizes.map((size) => (
                        <Text key={size} size={size} />
                    ))}
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecorator>
                    {roundnessKeys.map((roundness) => (
                        <>
                            <Text size="bodyL" key={roundness} roundness={roundness} />
                            <PadMe key={roundness} />
                        </>
                    ))}
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });

        it(':width', () => {
            mount(
                <CypressTestDecorator>
                    <Text size="bodyL" lines={3} width={50} />
                    <Text size="bodyL" lines={3} width="2rem" />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('withSkeleton', () => {
        const withSkeleton = getComponent('withSkeleton');
        const Button = getComponent('Button');
        const Btn = withNoAnimation(withSkeleton(Button));

        it('simple', () => {
            mount(
                <CypressTestDecorator>
                    <Btn view="accent" text="Loading" skeleton />
                    <PadMe />
                    <Btn view="accent" text="Done" />
                </CypressTestDecorator>,
            );
            cy.matchImageSnapshot();
        });
    });
});

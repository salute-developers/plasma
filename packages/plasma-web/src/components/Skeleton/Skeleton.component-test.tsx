import React from 'react';
import type { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe, withNoAnimation } from '@salutejs/plasma-cy-utils';

import { radiuses } from '../..';

// from  typography in '@salutejs/plasma-tokens'
const textSizes = [
    'display1',
    'display2',
    'display3',
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'body1',
    'body2',
    'body3',
    'paragraph1',
    'paragraph2',
    'footnote1',
    'footnote2',
    'button1',
    'button2',
    'caption',
    'underline',
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

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-core: Skeleton', () => {
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    describe('LineSkeleton', () => {
        const LineSkeleton = getComponent('LineSkeleton');
        const Line = withNoAnimation(LineSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Line />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    {textSizes.map((size) => (
                        <Line key={size} size={size} />
                    ))}
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    {roundnessKeys.map((roundness) => (
                        <Line key={roundness} roundness={roundness} />
                    ))}
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('RectSkeleton', () => {
        const RectSkeleton = getComponent('RectSkeleton');
        const Rect = withNoAnimation(RectSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Rect width="12rem" height="8rem" />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Rect width="12rem" height="8rem" />
                    <SpaceMe />
                    <Rect width={128} height={128} />
                    <SpaceMe />
                    <Rect height="8rem" />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    {roundnessKeys.map((roundness) => (
                        <>
                            <Rect key={roundness} width="12rem" height="2rem" roundness={roundness} />
                            <PadMe key={roundness} />
                        </>
                    ))}
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('TextSkeleton', () => {
        const TextSkeleton = getComponent('TextSkeleton');
        const Text = withNoAnimation(TextSkeleton);

        it('simple', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Text size="body1" />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('__lines', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Text size="body1" lines={0} />
                    <Text size="body1" lines={1} />
                    <Text size="body1" lines={2} />
                    <Text size="body1" lines={3} />
                    <Text size="body1" lines={4} />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
        it('__lines:20', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Text size="body1" lines={20} />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_size', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    {textSizes.map((size) => (
                        <Text key={size} size={size} />
                    ))}
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('_roundness', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    {roundnessKeys.map((roundness) => (
                        <>
                            <Text size="body1" key={roundness} roundness={roundness} />
                            <PadMe key={roundness} />
                        </>
                    ))}
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it(':width', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <Text size="body1" lines={3} width={50} />
                    <Text size="body1" lines={3} width="2rem" />
                </CypressTestDecoratorWithTypo>,
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
                <CypressTestDecoratorWithTypo>
                    <Btn view="primary" text="Loading" skeleton />
                    <PadMe />
                    <Btn view="primary" text="Done" />
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });
});

import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    PadMe,
    skipForPackages,
} from '@salutejs/plasma-cy-utils';

import type { CardProps } from './Card.types';

const componentExists = hasComponent('Card');
const describeFn = getDescribeFN('Card');
const itSkip = skipForPackages(['plasma-b2c']);

const CardContent = hasComponent('CardContent')
    ? getComponent<{
          aspectRatio?: string | number;
          orientation?: 'vertical' | 'horizontal';
          children?: React.ReactNode;
          style?: React.CSSProperties;
      }>('CardContent')
    : () => null;
const CardInnerContent = hasComponent('CardInnerContent')
    ? getComponent<{
          orientation?: 'vertical' | 'horizontal';
          children?: React.ReactNode;
      }>('CardInnerContent')
    : () => null;

const src = 'images/320_320_0.jpg';

const matchMockedImageSnapshot = (width = 500, height = 500) => {
    cy.mockImage('img', src);
    cy.viewport(width, height);
    cy.matchImageSnapshot();
};

const Image = (props: React.ComponentProps<'img'>) => (
    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', ...props.style }} {...props} />
);

const TextContent = () => (
    <div style={{ padding: '1rem', boxSizing: 'border-box' }}>
        <div>Label</div>
        <div>Title</div>
        <div>description</div>
    </div>
);

const cardChildren = (
    <CardContent aspectRatio="4 / 3" orientation="horizontal" style={{ width: '100%' }}>
        <CardInnerContent orientation="horizontal">
            <TextContent />
        </CardInnerContent>
        <Image />
    </CardContent>
);

const componentProps = {
    style: { width: '320px' },
    orientation: 'horizontal' as const,
    children: cardChildren,
};

getBaseVisualTests({
    component: 'Card',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: () => {
        cy.mockImage('img', src);
    },
    packagesForSkip: ['plasma-b2c'],
});

describeFn('Card', () => {
    const Card = componentExists ? getComponent<CardProps>('Card') : () => null;

    const Demo = ({
        orientation = 'vertical',
        aspectRatio = '1/1',
        cover = true,
        ...rest
    }: CardProps & { aspectRatio?: string; cover?: boolean }) => (
        <Card style={{ width: '50%' }} orientation={orientation} {...rest}>
            <CardContent orientation={orientation} aspectRatio={aspectRatio} style={{ width: '100%' }}>
                {cover && (
                    <CardInnerContent orientation={orientation}>
                        <TextContent />
                    </CardInnerContent>
                )}
                <Image />
            </CardContent>
            {!cover && <TextContent />}
        </Card>
    );

    itSkip('aspectRatio', () => {
        mount(
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <Demo aspectRatio="1/1" style={{ width: '100%' }} />
                <Demo aspectRatio="1/2" style={{ width: '100%' }} />
                <Demo aspectRatio="4/3" style={{ width: '100%' }} />
                <Demo aspectRatio="16/9" style={{ width: '100%' }} />
            </div>,
        );

        matchMockedImageSnapshot(500, 700);
    });

    itSkip('orientation', () => {
        mount(
            <>
                <Demo orientation="vertical" aspectRatio="4/3" />
                <PadMe />
                <Demo orientation="horizontal" aspectRatio="4/3" style={{ width: '100%' }} />
            </>,
        );

        matchMockedImageSnapshot(500, 600);
    });

    itSkip('selected', () => {
        mount(
            <>
                <Demo />
                <PadMe />
                <Demo selected />
            </>,
        );

        matchMockedImageSnapshot(500, 600);
    });

    itSkip('backgroundType', () => {
        mount(
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <Demo backgroundType="none" style={{ width: '100%' }} />
                <Demo backgroundType="solid" style={{ width: '100%' }} />
                <Demo backgroundType="solid" selected style={{ width: '100%' }} />
            </div>,
        );

        matchMockedImageSnapshot(500, 600);
    });

    itSkip('cover & outer content', () => {
        mount(
            <>
                <Demo cover />
                <PadMe />
                <Demo cover={false} />
            </>,
        );

        matchMockedImageSnapshot(500, 600);
    });
});

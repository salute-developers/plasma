import React from 'react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';

import { WithTheme } from '../../../_helpers';
import { Image } from '../Image/Image';
import { Flow } from '../Flow/Flow';
import { Badge } from '../Badge/Badge';
// import { CardImage } from '../../../../components/Card/Card';
import { CardInnerContent, CardContent } from '../../../../components/Card/Card.styles';

import { Card } from './Card';
import { config } from './Card.config';
import type { ImageProps } from './Image';

const bases = ['div', 'img'];

const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'];

const { views, sizes } = getConfigVariations(config);

const GridDot = styled.div`
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--plasma-colors-warning);
`;

const Content = styled.div`
    display: flex;
    flex: 1;

    padding: 1rem;
    box-sizing: border-box;

    align-items: center;
    justify-content: center;
`;

const SvgImageOld = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 672 504" preserveAspectRatio="xMinYMin slice" {...props}>
        <path fill="#131313" d="M0 0h672v504H0z" />
        <path fill="silver" d="M0 0h96v336H0z" />
        <path fill="#c0c000" d="M96 0h96v336H96z" />
        <path fill="#00c0c0" d="M192 0h96v336h-96z" />
        <path fill="#00c000" d="M288 0h96v336h-96z" />
        <path fill="#c000c0" d="M384 0h96v336h-96z" />
        <path fill="#c00000" d="M480 0h96v336h-96z" />
        <path fill="#0000c0" d="M576 0h96v336h-96zM0 336h96v42H0z" />
        <path fill="#c000c0" d="M192 336h96v42h-96z" />
        <path fill="#00c0c0" d="M384 336h96v42h-96z" />
        <path fill="silver" d="M576 336h96v42h-96z" />
        <path fill="#00214c" d="M0 378h120v126H0z" />
        <path fill="#fff" d="M120 378h120v126H120z" />
        <path fill="#32006a" d="M240 378h120v126H240z" />
        <path fill="#090909" d="M480 378h32v126h-32z" />
        <path fill="#1d1d1d" d="M544 378h32v126h-32z" />
    </svg>
);

const SvgImage = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="1 0.5 8 8"
        {...props}
        style={{ ...props.style, background: 'var(--text-tertiary)' }}
    >
        <path stroke="#fff" strokeDasharray={1} d="M1 1h7M2 2h7M1 3h7M2 4h7M1 5h7M2 6h7M1 7h7M2 8h7" />
    </svg>
);

const chessBackgroundImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MTAiIGhlaWdodD0iODEwIiB2aWV3Qm94PSIwLjk1IDAuNDUgOC4xIDguMSI+PGNpcmNsZSByPSI5OSIvPjxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iMSIgZD0iTTEgMWg3TTIgMmg3TTEgM2g3TTIgNGg3TTEgNWg3TTIgNmg3TTEgN2g3TTIgOGg3Ii8+PC9zdmc+';

const meta: Meta<typeof Card> = {
    title: 'b2c/Navigation/Card',
    decorators: [WithTheme],
    component: Card,
    argTypes: {
        width: {
            control: {
                type: 'text',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        orientation: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'inline-radio',
            },
        },
        backgroundType: {
            options: ['none', 'solid', 'color'],
            control: {
                type: 'inline-radio',
            },
        },
        textPosition: {
            options: ['inner', 'outer'],
            control: {
                type: 'inline-radio',
            },
        },
        contentPosition: {
            options: ['inner', 'outer'],
            control: {
                type: 'inline-radio',
            },
        },
        textAlign: {
            options: ['left', 'center', 'right'],
            control: {
                type: 'inline-radio',
            },
        },
        contentAlign: {
            options: ['left', 'center', 'right'],
            control: {
                type: 'inline-radio',
            },
        },
        quantity: {
            options: [1, 2, 4],
            control: {
                type: 'inline-radio',
            },
        },
        aspectRatio: {
            control: {
                type: 'text',
            },
        },
        hasText: {
            control: {
                type: 'boolean',
            },
        },
        hasContent: {
            control: {
                type: 'boolean',
            },
        },
        hasImage: {
            control: {
                type: 'boolean',
            },
            // description: "`hasImage: false` только для `textPosition: 'outer'` и `contentPosition: 'outer'`",
        },
        ...disableProps(['view']),
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

const render: React.FC = ({
    hasContent,
    hasImage,
    hasText,
    text,
    quantity,
    width,
    orientation,
    textPosition,
    contentPosition,
    textAlign,
    contentAlign,
    aspectRatio,
    ...rest
}: StoryProps) => {
    const itemsPerLineMap = {
        1: 1,
        2: 2,
        3: 3,
        4: 2,
    };

    const orderMap = {
        left: 0,
        top: 0,
        center: 1,
        right: 2,
        bottom: 2,
    };

    const alignContentValue = {
        left: 'flex-start',
        top: 'flex-start',
        center: 'center',
        right: 'flex-end',
        bottom: 'flex-end',
    };

    const onlyInnerText = Boolean(
        (!hasContent || contentPosition === 'outer') && hasText && text && textPosition === 'inner',
    );
    const onlyInnerContent = (!hasText || textPosition === 'outer') && hasContent && contentPosition === 'inner';

    const alignProp = orientation === 'vertical' ? 'alignItems' : 'justifyContent';

    const cardTitleNode = (
        <Content
            style={{
                order: orderMap[textAlign],
                [alignProp]: onlyInnerText ? alignContentValue[textAlign] : 'center',
            }}
        >
            {text}
        </Content>
    );

    const cardContentNode = (
        <Content
            style={{
                order: orderMap[contentAlign],
                [alignProp]: onlyInnerContent ? alignContentValue[contentAlign] : 'center',
            }}
        >
            <Flow
                itemsPerLine={itemsPerLineMap[quantity]}
                itemsCount={quantity}
                orientation={orientation}
                arrangement={orientation === 'vertical' ? 'center' : 'spaceAround'}
                alignment={orientation === 'vertical' ? 'center' : 'center'}
                style={{
                    // width: onlyInnerContent ? '10rem' : '100%',
                    height: orientation === 'vertical' ? '10rem' : '100%',
                }}
            >
                {new Array(quantity).fill(null).map((_, i) => (
                    <GridDot key={i}>{i + 1}</GridDot>
                ))}
            </Flow>
        </Content>
    );

    return (
        <Card {...rest} orientation={orientation} style={{ width }}>
            {hasText && textPosition === 'outer' && cardTitleNode}
            {hasContent && contentPosition === 'outer' && cardContentNode}
            <CardContent orientation={orientation} aspectRatio={aspectRatio}>
                <CardInnerContent orientation={orientation}>
                    {hasText && textPosition === 'inner' && cardTitleNode}
                    {hasContent && contentPosition === 'inner' && cardContentNode}
                </CardInnerContent>
                {hasImage && <SvgImage width="100%" height="100%" style={{ width: '100%', height: '100%' }} />}
            </CardContent>
        </Card>
    );
};

export const Default: Story = {
    args: {
        width: '500px',
        text: 'Title',
        view: 'default',
        size: 'm',
        orientation: 'horizontal',

        selected: true,
        backgroundType: 'none',
        textPosition: 'inner',
        contentPosition: 'inner',
        textAlign: 'left',
        contentAlign: 'left',
        hasText: true,
        hasContent: true,
        hasImage: true,
        quantity: 2,
        aspectRatio: '4 / 3',
    },
    render,
};

export const Vertical: Story = {
    args: {
        ...Default.args,
        width: '450px',
        orientation: 'vertical',
        textAlign: 'top',
        contentAlign: 'top',
    },
    argTypes: {
        textAlign: {
            options: ['top', 'center', 'bottom'],
            control: {
                type: 'inline-radio',
            },
        },
        contentAlign: {
            options: ['top', 'center', 'bottom'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    render,
};

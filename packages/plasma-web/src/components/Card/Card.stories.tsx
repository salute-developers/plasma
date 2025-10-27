import React from 'react';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Flow } from '../Flow/Flow';

import { Card, CardInnerContent, CardContent } from './Card';
import { config } from './Card.config';

const { views, sizes } = getConfigVariations(config);

const GridDot = styled.div`
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--plasma-colors-accent);
`;

const Content = styled.div`
    display: flex;
    flex: 1;

    padding: 1rem;
    box-sizing: border-box;

    align-items: center;
    justify-content: center;
`;

const SvgBackground = (props) => (
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

const meta: Meta<typeof Card> = {
    title: 'Data Display/Card',
    decorators: [InSpacingDecorator],
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
                type: 'inline-radio',
            },
        },
        orientation: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'inline-radio',
            },
        },
        backgroundType: {
            options: ['none', 'solid'],
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
        },
        ...disableProps(['view']),
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

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
                {hasImage && <SvgBackground width="100%" height="100%" style={{ width: '100%', height: '100%' }} />}
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

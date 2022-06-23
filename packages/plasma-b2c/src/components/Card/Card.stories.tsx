import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { blackPrimary, whitePrimary, whiteSecondary } from '@salutejs/plasma-tokens-b2c';
import { IconStarFill } from '@salutejs/plasma-icons';
import { additional } from '@salutejs/plasma-colors';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { BodyM, H4 } from '../Typography';

import { Card, CardProps, CardBody, CardBadge, CardContent, CardMedia } from '.';

const roundList = [250, 32, 28, 24, 20, 18, 16, 14, 12, 8, 0] as const;
const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'] as const;

export default {
    title: 'Content/Card',
    decorators: [InSpacingDecorator],
    argTypes: {
        ratio: {
            control: {
                type: 'select',
                options: ratios,
            },
        },
        roundness: {
            control: {
                type: 'select',
                options: roundList,
            },
        },
    },
} as Meta;

interface DefaultProps extends CardProps {
    label: string;
    title: string;
    rating: string;
    description: string;
    ratio: typeof ratios[number];
}

const StyledCardBadge = styled(CardBadge)`
    border-radius: 1rem;
    background-color: ${whitePrimary};
    color: ${blackPrimary};

    left: 1rem;
    top: 1rem;
`;

const StyledBodyM = styled(BodyM)`
    color: ${whiteSecondary};
`;

const StyledH4 = styled(H4)`
    margin: 0.25rem 0;

    color: ${whitePrimary};
`;

const StyledDescription = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconStarFill = styled(IconStarFill)`
    transform: scale(0.75);
`;

const StyledRating = styled.div`
    display: flex;
    align-items: center;

    color: ${additional.h40[300]};

    svg {
        color: ${additional.h40[300]};
    }

    margin-right: 0.75rem;
`;

export const Default: Story<DefaultProps> = ({
    outlined,
    scaleOnFocus,
    label,
    title,
    description,
    rating,
    ratio,
    roundness,
}) => {
    return (
        <Card
            style={{ width: '22.5rem' }}
            tabIndex={0}
            outlined={outlined}
            scaleOnFocus={scaleOnFocus}
            roundness={roundness}
        >
            <CardBody>
                <CardMedia src="./images/320_320_0.jpg" placeholder="./images/320_320_1.jpg" ratio={ratio} />
                <StyledCardBadge size="l" text="60 минут" />
                <CardContent>
                    <StyledBodyM>{label}</StyledBodyM>
                    <StyledH4>{title}</StyledH4>
                    <StyledDescription>
                        <StyledRating>
                            <StyledIconStarFill />
                            <StyledBodyM bold>{rating}</StyledBodyM>
                        </StyledRating>
                        <StyledBodyM>{description}</StyledBodyM>
                    </StyledDescription>
                </CardContent>
            </CardBody>
        </Card>
    );
};

Default.args = {
    ratio: '1/1',
    roundness: 20,
    outlined: true,
    scaleOnFocus: true,
    label: 'Потребительский кредит',
    rating: '4.7',
    title: 'до 230 000 ₽',
    description: 'На 18 месяцев, ставка 13,9%',
};

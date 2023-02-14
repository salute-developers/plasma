import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { blackPrimary, whitePrimary, whiteSecondary, secondary, surfaceCard } from '@salutejs/plasma-tokens-web';
import { IconStarFill } from '@salutejs/plasma-icons';
import { additional } from '@salutejs/plasma-colors';

import { InSpacingDecorator } from '../../helpers';
import { BodyM, H4 } from '../Typography';
import { Cell } from '../Cell';

import { Card, CardProps } from './Card';
import { CardBody } from './CardBody';
import { CardBadge } from './CardBadge';
import { CardContent } from './CardContent';
import { CardMedia } from './CardMedia';

const roundList = [250, 32, 28, 24, 20, 18, 16, 14, 12, 8, 0] as const;
const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'] as const;

export default {
    title: 'Content/Card',
    decorators: [InSpacingDecorator],
    argTypes: {
        ratio: {
            options: ratios,
            control: {
                type: 'select',
            },
        },
        roundness: {
            options: roundList,
            control: {
                type: 'select',
            },
        },
    },
} as Meta;

interface DefaultProps extends CardProps {
    label: string;
    coverGradient: boolean;
    title: string;
    rating: string;
    description: string;
    ratio: typeof ratios[number];
}

const StyledCardBadge = styled(CardBadge)`
    border-radius: 1rem;
    background-color: ${whitePrimary};
    color: ${blackPrimary};

    left: 1.25rem;
    top: 1rem;
`;

const StyledBodyM = styled(BodyM)`
    color: ${whiteSecondary};
`;

const Styled2BodyM = styled(BodyM)`
    color: ${secondary};
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

const StyledCellRating = styled(Cell)`
    color: ${additional.h40[300]};
    margin-right: 0.75rem;
`;

export const Default: Story<DefaultProps> = ({
    outlined,
    scaleOnFocus,
    roundness,
    label,
    title,
    description,
    rating,
    ratio,
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
                    <Styled2BodyM>{label}</Styled2BodyM>
                    <H4>{title}</H4>
                    <StyledDescription>
                        <StyledCellRating
                            content={<StyledIconStarFill color={additional.h40[300]} />}
                            description={rating}
                        />
                        <Styled2BodyM>{description}</Styled2BodyM>
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

export const WithBackground: Story<DefaultProps> = ({
    outlined,
    scaleOnFocus,
    roundness,
    label,
    title,
    description,
    rating,
    ratio,
}) => {
    return (
        <Card
            style={{ width: '22.5rem' }}
            tabIndex={0}
            outlined={outlined}
            scaleOnFocus={scaleOnFocus}
            roundness={roundness}
            background={surfaceCard}
        >
            <CardBody>
                <CardMedia src="./images/320_320_0.jpg" placeholder="./images/320_320_1.jpg" ratio={ratio} />
                <StyledCardBadge size="l" text="60 минут" />
                <CardContent>
                    <Styled2BodyM>{label}</Styled2BodyM>
                    <H4>{title}</H4>
                    <StyledDescription>
                        <StyledCellRating
                            content={<StyledIconStarFill color={additional.h40[300]} />}
                            description={rating}
                        />
                        <Styled2BodyM>{description}</Styled2BodyM>
                    </StyledDescription>
                </CardContent>
            </CardBody>
        </Card>
    );
};

WithBackground.args = {
    ratio: '1/1',
    roundness: 20,
    outlined: true,
    scaleOnFocus: true,
    label: 'Потребительский кредит',
    rating: '4.7',
    title: 'до 230 000 ₽',
    description: 'На 18 месяцев, ставка 13,9%',
};

export const WithCover: Story<DefaultProps> = ({
    outlined,
    scaleOnFocus,
    label,
    title,
    description,
    rating,
    ratio,
    roundness,
    coverGradient,
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
                <CardContent cover coverGradient={coverGradient}>
                    <StyledBodyM>{label}</StyledBodyM>
                    <StyledH4>{title}</StyledH4>
                    <StyledDescription>
                        <StyledCellRating
                            content={<StyledIconStarFill color={additional.h40[300]} />}
                            description={rating}
                        />
                        <StyledBodyM>{description}</StyledBodyM>
                    </StyledDescription>
                </CardContent>
            </CardBody>
        </Card>
    );
};

WithCover.args = {
    ratio: '1/1',
    coverGradient: true,
    roundness: 20,
    outlined: true,
    scaleOnFocus: true,
    label: 'Потребительский кредит',
    rating: '4.7',
    title: 'до 230 000 ₽',
    description: 'На 18 месяцев, ставка 13,9%',
};

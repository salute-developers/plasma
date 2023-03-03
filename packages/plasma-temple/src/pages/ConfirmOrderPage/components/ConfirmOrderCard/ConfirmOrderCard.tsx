import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Body1, Caption, Card, CardBody, CardContent, Footnote1, Price, detectDevice } from '@salutejs/plasma-ui';
import { IconChevronRight } from '@salutejs/plasma-icons';
import { secondary } from '@salutejs/plasma-tokens';

import { DeviceFamily } from '../../../../types';

interface ConfirmOrderCardProps {
    title: string;
    content: string;
    price?: number;
    caption?: string;
    onClick?: () => void;
}

const StyledCard = styled(Card)`
    margin-bottom: 1rem;
`;

const StyledCardContent = styled(CardContent)`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const StyledCaption = styled(Caption)`
    color: ${secondary};
`;

const mapDeviceToContent: Record<DeviceFamily, React.FC<PropsWithChildren<{}>>> = {
    sberBox: Body1,
    sberPortal: Footnote1,
    mobile: Footnote1,
};

const Content = mapDeviceToContent[detectDevice()];

const StyledContentContainer = styled.div`
    margin-right: auto;
`;

export const ConfirmOrderCard: React.FC<ConfirmOrderCardProps> = ({ title, content, caption, price = 0, onClick }) => {
    return (
        <StyledCard onClick={onClick} outlined tabIndex={0} data-cy="confirm-order-card">
            <CardBody>
                <StyledCardContent>
                    <StyledContentContainer>
                        <StyledCaption>{title}</StyledCaption>
                        <Content>{content}</Content>
                        {caption && <StyledCaption>{caption}</StyledCaption>}
                    </StyledContentContainer>
                    {price > 0 && <Price>{price}</Price>}
                    <IconChevronRight />
                </StyledCardContent>
            </CardBody>
        </StyledCard>
    );
};

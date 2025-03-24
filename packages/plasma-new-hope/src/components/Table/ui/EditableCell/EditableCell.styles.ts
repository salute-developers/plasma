import { styled } from '@linaria/react';

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & .editIcon {
        display: none;
    }

    &:hover .editIcon {
        display: block;
    }
`;

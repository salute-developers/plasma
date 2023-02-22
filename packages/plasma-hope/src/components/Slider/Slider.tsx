import styled from 'styled-components';
import { ThumbBase } from '@salutejs/plasma-core';

export const SliderThumb = styled(ThumbBase)`
    width: 1.25rem;
    height: 1.25rem;

    border: 0.125rem solid transparent;

    &:hover {
        transform: scale(1.08);
    }

    &:active {
        transform: scale(0.92);
    }
`;

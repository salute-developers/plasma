import styled from 'styled-components';
import { whiteTertiary, footnote1 } from '@salutejs/plasma-tokens';

import { DEFAULT_PICKER_SIZE, PickerSize } from '../types';
import { SimpleTimePicker } from '../SimpleTimePicker';
import { PickerDots } from '../PickerDots';

export const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
    align-items: stretch;
`;

export const labelFontSize: Record<PickerSize, string> = {
    l: '0.875rem',
    s: '0.75rem',
    xs: '0.625rem',
};

export const StyledSimpleTimePicker = styled(SimpleTimePicker)`
    &[data-label] {
        margin-top: 2rem;
    }

    &[data-label]::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        margin-top: ${({ controls }) => (controls ? '-2.5rem' : '-1.5rem')};
        width: 100%;
        color: ${whiteTertiary};
        ${footnote1};
        font-weight: normal;
        font-size: ${({ size = DEFAULT_PICKER_SIZE }) => labelFontSize[size]};
    }

    &[data-label] + ${PickerDots} {
        &::before,
        &::after {
            top: calc(50% + 1rem);
        }
    }
`;

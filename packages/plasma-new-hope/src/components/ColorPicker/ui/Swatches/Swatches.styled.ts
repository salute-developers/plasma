import styled from 'styled-components';

import { IconDisclosureDownCentered } from '../../../_Icon';
import { Group } from '../../ColorPicker.styles';

export const SwatchesAccordionRoot = styled(Group)`
    all: unset;
    appearance: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    span {
        font-weight: 600;
        font-size: 0.875rem;
    }
`;

export const Chevron = styled(IconDisclosureDownCentered)<{ $active: boolean }>`
    rotate: ${(props) => (props.$active ? '180deg' : 0)};
`;

export const SwatchesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 2.25rem) 2.25rem;
    width: 100%;
    gap: 0.5px;
`;

export const SwatchRoot = styled.button`
    all: unset;
    appearance: none;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const SwatchColor = styled.div<{ $selected?: boolean; $bg?: string; $outlineColor?: string; $border?: string }>`
    box-sizing: border-box;
    border-radius: 62.5rem;
    width: ${(props) => (props.$selected ? '1.75rem' : '2rem')};
    height: ${(props) => (props.$selected ? '1.75rem' : '2rem')};
    background: ${(props) => (props.$bg ? props.$bg : 'transparent')};
    outline: ${(props) => (props.$selected ? `2px solid ${props.$outlineColor}` : 'transparent')};
    outline-offset: 0.0625rem;
    border: ${(props) => (props.$border ? props.$border : 'none')};
`;

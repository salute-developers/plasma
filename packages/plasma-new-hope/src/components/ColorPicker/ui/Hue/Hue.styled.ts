import styled from 'styled-components';

import { ColorPickerHandleStyled } from '../ColorPickerHandle/ColorPickerHandle.styled';

export const StyledRoot = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: ew-resize;
`;

export const StyledPicker = styled(ColorPickerHandleStyled)`
    top: 2px;
    margin-left: 2px;
    cursor: ew-resize;
`;

import styled from 'styled-components';

export const ColorPickerHandleStyled = styled.div`
    position: absolute;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    width: 0.75rem;
    height: 0.75rem;
    z-index: 1000;
    box-sizing: border-box;
    will-change: transform;
    outline: none;
    cursor: ew-resize;
`;

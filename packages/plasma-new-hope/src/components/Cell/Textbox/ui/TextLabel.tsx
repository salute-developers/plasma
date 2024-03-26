import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { cellTextboxLabel } from '../../Cell.styles';

const StyledTextLabel = styled.div``;

type TextLabelProps = {
    text?: string;
};

export const TextLabel: React.FC<HTMLAttributes<HTMLDivElement> & TextLabelProps> = (props) => {
    return <StyledTextLabel className={cellTextboxLabel}>{props.children}</StyledTextLabel>;
};

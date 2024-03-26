import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { cellTextboxTitle } from '../../Cell.styles';

const StyledTextTitle = styled.div``;

type TextTitleProps = {
    text?: string;
};

export const TextTitle: React.FC<HTMLAttributes<HTMLDivElement> & TextTitleProps> = (props) => {
    return <StyledTextTitle className={cellTextboxTitle}>{props.children}</StyledTextTitle>;
};

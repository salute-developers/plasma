import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { cellTextboxSubtitle } from '../../Cell.styles';

const StyledTextSubtitle = styled.div``;

type TextSubtitleProps = {
    text?: string;
};

export const TextSubtitle: React.FC<HTMLAttributes<HTMLDivElement> & TextSubtitleProps> = (props) => {
    return <StyledTextSubtitle className={cellTextboxSubtitle}>{props.children}</StyledTextSubtitle>;
};

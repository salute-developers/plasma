import React, { HTMLAttributes } from 'react';

import { cx } from '../../../../utils';

import { StyledTextboxTitle } from './CellTextboxTitle.styles';

export const CellTextboxTitle: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    // TODO: #1548
    return (
        <StyledTextboxTitle className={cx('cell-textbox-title', className)} {...rest}>
            {children}
        </StyledTextboxTitle>
    );
};

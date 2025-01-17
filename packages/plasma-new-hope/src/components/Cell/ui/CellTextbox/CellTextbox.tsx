import React, { HTMLAttributes } from 'react';

import { CellTextboxLabel } from '../CellTextboxLabel/CellTextboxLabel';
import { CellTextboxTitle } from '../CellTextboxTitle/CellTextboxTitle';
import { CellTextboxSubtitle } from '../CellTextboxSubtitle/CellTextboxSubtitle';
import { cx } from '../../../../utils';

import { CellTextboxStyled } from './CellTextbox.styles';
import type { CellTextboxProps } from './CellTextbox.types';

export const CellTextbox: React.FC<HTMLAttributes<HTMLDivElement> & CellTextboxProps> = ({
    label,
    title,
    subtitle,
    children,
    className,
    ...rest
}) => {
    return (
        // TODO: #1548
        <CellTextboxStyled className={cx('cell-textbox', className)} {...rest}>
            {label || title || subtitle ? (
                <>
                    {label && <CellTextboxLabel>{label}</CellTextboxLabel>}
                    {title && <CellTextboxTitle>{title}</CellTextboxTitle>}
                    {subtitle && <CellTextboxSubtitle>{subtitle}</CellTextboxSubtitle>}
                </>
            ) : (
                children
            )}
        </CellTextboxStyled>
    );
};

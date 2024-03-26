import React, { HTMLAttributes } from 'react';

import { cellTextbox } from '../Cell.styles';

import type { TextboxProps } from './Textbox.types';
import { TextboxStyled } from './Textbox.styles';
import { TextLabel } from './ui/TextLabel';
import { TextTitle } from './ui/TextTitle';
import { TextSubtitle } from './ui/TextSubtitle';

export const Textbox: React.FC<HTMLAttributes<HTMLDivElement> & TextboxProps> = (props) => {
    const { label, title, subtitle, children } = props;
    return (
        <TextboxStyled className={cellTextbox}>
            {label || title || subtitle ? (
                <>
                    {label && <TextLabel>{label}</TextLabel>}
                    {title && <TextTitle>{title}</TextTitle>}
                    {subtitle && <TextSubtitle>{subtitle}</TextSubtitle>}
                </>
            ) : (
                children
            )}
        </TextboxStyled>
    );
};

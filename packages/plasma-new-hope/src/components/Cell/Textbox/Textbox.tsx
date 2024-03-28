import React, { HTMLAttributes } from 'react';

import type { TextboxProps } from './Textbox.types';
import { TextboxStyled } from './Textbox.styles';
import { TextLabel } from './ui/TextLabel';
import { TextTitle } from './ui/TextTitle';
import { TextSubtitle } from './ui/TextSubtitle';

export const Textbox: React.FC<HTMLAttributes<HTMLDivElement> & TextboxProps> = ({
    label,
    title,
    subtitle,
    children,
}) => {
    return (
        <TextboxStyled>
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

import React, { useEffect, useRef } from 'react';

import { classes } from '../../../../../../SelectNew.tokens';

import { StyledChip } from './Chip.styles';

export const Chip: React.FC<{
    text: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    focused?: boolean;
}> = ({ text, onClick, focused }) => {
    const ref = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (focused && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focused]);

    return (
        <StyledChip
            contentClearButton={<div />}
            tabIndex={-1}
            onClick={onClick}
            text={`${text}`}
            className={focused ? classes.selectChipIsFocused : undefined}
            ref={ref}
        />
    );
};

import React, { FC, useEffect, useRef } from 'react';

import { classes } from '../../Autocomplete.tokens';

import { StyledText, Wrapper } from './SuggestionItem.styles';
import type { SuggestionItemProps } from './SuggestionItem.type';

export const SuggestionItem: FC<SuggestionItemProps> = ({ item, id, onClick, focused }) => {
    const ref = useRef<HTMLLIElement | null>(null);

    const focusedClass = focused ? classes.suggestionItemIsFocused : undefined;

    const handleClick = () => {
        if (onClick) {
            onClick(item);
        }
    };

    useEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    return (
        <Wrapper id={id} role="option" aria-selected={focused} onClick={handleClick} ref={ref} className={focusedClass}>
            {item.contentLeft}
            <StyledText>{item.label}</StyledText>
            {item.contentRight}
        </Wrapper>
    );
};

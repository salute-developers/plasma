import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { IconBellFill } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return <IconComponent size={iconSize} color="inherit" />;
};

const StyledHeader = styled.div`
    padding: 0.5rem 0.75rem;
    border-bottom: 0.063rem solid var(--surface-transparent-tertiary);
    font-family: var(--plasma-textarea-input-font-family);
    font-size: var(--plasma-textarea-input-font-size);
    font-style: var(--plasma-textarea-input-font-style);
    font-weight: var(--plasma-textarea-input-font-weight);
    letter-spacing: var(--plasma-textarea-input-letter-spacing);
    line-height: var(--plasma-textarea-input-line-height);
`;

export const createDefaultStory = (
    TextArea: any,
    customIcon?: (size: string, type?: 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element,
) => {
    return ({ enableContentRight, enableHeader, view, readOnly, ...rest }: any) => {
        const [text, setText] = useState('Значение поля');
        const innerGetIcon = (type: 'right') => {
            return customIcon ? customIcon(rest.size, type, rest.disabled, readOnly) : getIcon(IconBellFill, rest.size);
        };

        const contentRight = enableContentRight || readOnly ? innerGetIcon('right') : undefined;
        const headerSlot = enableHeader ? <StyledHeader>Дополнительный контент</StyledHeader> : undefined;

        return (
            <TextArea
                {...rest}
                value={text}
                readOnly={readOnly}
                contentRight={contentRight}
                headerSlot={headerSlot}
                view={view}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setText(e.target.value);
                    onChange(e.target.value);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                style={{
                    width: '70%',
                    margin: '0 auto',
                }}
            />
        );
    };
};

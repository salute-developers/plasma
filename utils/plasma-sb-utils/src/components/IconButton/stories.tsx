import React from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import type { IconSize } from '@salutejs/plasma-icons';

const getIconSize = (size?: string): IconSize => (size === 'xs' ? 'xs' : 's');

export const createDefaultStory = (IconButton: any, Icon?: (size: string) => React.ReactNode, hasOutline = false) => {
    return ({ size, view, viewOutline, appearance, ...rest }: any) => {
        const buttonSize = size ?? 'm';
        const resolvedView = hasOutline && appearance !== 'default' ? viewOutline : view;

        return (
            <IconButton {...rest} {...(hasOutline ? { appearance } : {})} view={resolvedView} size={size}>
                {Icon ? Icon(buttonSize) : <IconClose color="inherit" size={getIconSize(size)} />}
            </IconButton>
        );
    };
};

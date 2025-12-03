import React from 'react';
import { IconPlasma, IconClose, IconRefresh } from '@salutejs/plasma-icons';

export const createDefaultStory = (FileComponent: any) => ({ contentType, ...props }: any) => {
    const iconSize = props.size === 'xs' || (props.isLoading && props.loaderType === 'circular') ? 'xs' : 's';
    const extraSmallIcon = props.size === 'xs' && props.isLoading && props.loaderType === 'circular';

    const extraSmallIconStyle = {
        width: '0.75rem',
        height: '0.75rem',
        flex: '0 0 0.75rem',
    };

    const getActionIcon = () => {
        if (props.view === 'negative' && props.isLoading) {
            return <IconRefresh size={iconSize} color="inherit" style={extraSmallIcon && extraSmallIconStyle} />;
        }

        if ((props.view === 'negative' && !props.isLoading) || props.isLoading) {
            return <IconClose size={iconSize} color="inherit" style={extraSmallIcon && extraSmallIconStyle} />;
        }

        return <IconPlasma size={iconSize} color="inherit" />;
    };

    const thumbProps = {
        ...(contentType === 'icon' && { fileUrl: props.filename }),
        ...(contentType === 'image' && { thumbUrl: './images/320_320_9.jpg' }),
    };

    return <FileComponent {...props} {...thumbProps} actionContent={getActionIcon()} />;
};

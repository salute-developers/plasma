import React from 'react';
import { IconPlasma, IconClose, IconRefresh } from '@salutejs/plasma-icons';

export const createDefaultStory = (FileComponent: any) => ({ thumbContent, ...props }: any) => {
    const iconSize = props.size === 'xs' || props.isLoading ? 'xs' : 's';

    const getActionIcon = () => {
        if (props.view === 'negative' && props.loaderValue !== 100) {
            return <IconRefresh size={iconSize} color="inherit" />;
        }

        if (props.isLoading) {
            return <IconClose size={iconSize} color="inherit" />;
        }

        return <IconPlasma size={iconSize} color="inherit" />;
    };

    const thumbProps = {
        ...(thumbContent === 'extention icon' && { fileUrl: props.filename }),
        ...(thumbContent === 'image' && { thumbUrl: './images/320_320_9.jpg' }),
    };

    return <FileComponent {...props} {...thumbProps} actionContent={getActionIcon()} />;
};

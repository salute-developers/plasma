import React, { forwardRef } from 'react';

import { AttachButtonProps } from '../../Attach.types';
import { StyledIconButton } from '../../ui/IconButton/IconButton';
import { StyledButton } from '../../ui/Button/Button';
import { IconPlus } from '../../../_Icon';

const getDefaultIcon = (size?: string) => {
    let iconSize: 'xs' | 's' | 'm';
    switch (size) {
        case 'xs':
            iconSize = 'xs';
            break;
        case 's':
            iconSize = 's';
            break;
        default:
            iconSize = 'm';
    }
    return <IconPlus size={iconSize} color="inherit" />;
};

export const AttachButton = forwardRef<HTMLButtonElement, AttachButtonProps>((props, ref) => {
    if (props.buttonType === 'iconButton') {
        const { size, icon, ...rest } = props;

        return (
            <StyledIconButton ref={ref} {...rest}>
                {icon || getDefaultIcon(size)}
            </StyledIconButton>
        );
    }

    const { text = 'Загрузить файл', ...rest } = props;
    return <StyledButton ref={ref} text={text} {...rest} />;
});

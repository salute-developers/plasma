import React, { forwardRef } from 'react';

import { AttachButtonProps } from '../../Attach.types';
import { StyledIconButton, StyledButton } from '../../ui';
import { IconPlus } from '../../../_Icon';

const getDefaultIcon = (size?: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
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

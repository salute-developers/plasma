import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import { PopupBase } from '../PopupBase/PopupBase';

import { ModalBaseProps } from './types';

const NoScroll = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`;

/**
 * ModalBase.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const ModalBase: FC<ModalBaseProps> = ({
    id,
    hookInfo,
    children,
    ...rest
}) => {
    return (
        <PopupBase
            hookInfo={hookInfo}
            {...rest}
        >
            <NoScroll />
            {children}
        </PopupBase>
    );
};

import React, { FC } from 'react';

import { useFocusTrap } from '../../hooks';
import { PopupBaseRoot } from '../PopupBase';
import { ModalBaseRootProps } from './types';

/**
 * ModalBase.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const ModalBaseRoot: FC<ModalBaseRootProps> = ({
    initialFocusRef,
    focusAfterRef,
    hookInfo,
    children,
    ...rest
}) => {
    const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);

    return (
        <PopupBaseRoot ref={trapRef} hookInfo={hookInfo} {...rest}>
            {children}
        </PopupBaseRoot>
    );
};

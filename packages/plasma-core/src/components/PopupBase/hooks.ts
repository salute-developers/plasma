import { useEffect, useState } from 'react';

import { PopupAnimationInfo, UsePopupArgs } from './types';
import { usePopupBaseContext } from './PopupBaseContext';

// Хук для поключения анимации
export const usePopupAnimation = (): PopupAnimationInfo => {
    const [endAnimation, setEndAnimation] = useState<boolean>(false);
    const [endTransition, setEndTransition] = useState<boolean>(false);

    return { endAnimation, endTransition, setEndTransition, setEndAnimation };
};

// Хук для внутреннего состояния, необходимого для правильного отображения вложенных окон, а также для анимации
export const usePopup = ({ isOpen, id, withAnimation = false, popupInfo, animationInfo }: UsePopupArgs) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const popupController = usePopupBaseContext();

    // для использования transition в качестве анимации
    useEffect(() => {
        animationInfo?.setEndTransition(withAnimation && (!isVisible || animationInfo?.endAnimation));
    }, [animationInfo?.endAnimation, isVisible]);

    useEffect(() => {
        // сначала добавление/удаление из контекста, и только после этого отображение/скрытие
        if (isOpen) {
            popupController.register({ id, ...popupInfo });
            setVisible(true);
            animationInfo?.setEndAnimation(false);
        } else if (isVisible && withAnimation) {
            animationInfo?.setEndAnimation(true);
        } else {
            popupController.unregister(id);
            setVisible(false);
        }
    }, [isOpen]);

    return { isVisible, setVisible };
};

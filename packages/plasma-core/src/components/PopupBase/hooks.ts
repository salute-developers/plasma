import { useEffect, useState } from 'react';

import { PopupAnimationInfo, PopupHookArgs } from './types';
import { usePopupBaseContext } from './PopupBaseContext';

// Хук для поключения анимации
export const usePopupAnimation = (): PopupAnimationInfo => {
    const [endAnimation, setEndAnimation] = useState<boolean>(false);
    const [endTransition, setEndTransition] = useState<boolean>(false);

    return { endAnimation, endTransition, setEndTransition, setEndAnimation };
};

// Хук для внутреннего состояния, необходимого для правильного отображения вложенных окон, а также для анимации
export const usePopup = ({ isOpen, id, popupInfo, animationInfo }: PopupHookArgs) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const popupController = usePopupBaseContext();

    // для использования transition в качестве анимации
    useEffect(() => {
        animationInfo?.setEndTransition(animationInfo && (!isVisible || animationInfo?.endAnimation));
    }, [animationInfo?.endAnimation, isVisible]);

    // сначала добавление/удаление из контекста, и только после этого отображение/скрытие
    useEffect(() => {
        // при первом открытии
        if (isOpen && !isVisible) {
            popupController.register({ id, ...popupInfo });
            setVisible(true);
            animationInfo?.setEndAnimation(false);
            return;
        }

        if (isOpen || !isVisible) {
            return;
        }

        // если есть анимация - закрытие по окончании анимации
        if (animationInfo) {
            animationInfo?.setEndAnimation(true);
            return;
        }

        // иначе обычное закрытие
        popupController.unregister(id);
        setVisible(false);
    }, [isOpen, isVisible, animationInfo]);

    return { isVisible, setVisible };
};

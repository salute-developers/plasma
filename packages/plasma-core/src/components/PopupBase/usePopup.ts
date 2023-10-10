import { useEffect, useState } from 'react';
import { useUniqId } from '../../hooks';
import { usePopupBaseContext } from './PopupBaseContext';
import { PopupAnimationInfo, usePopupProps } from './types';

export const usePopup = (
    { isOpen, id, offset, placement, withAnimation = false, frame = 'document', popupInfo }: usePopupProps
): PopupAnimationInfo => {
    // Внутренее состояние, необходимое для правильного отображения вложенных окон, а также для анимации
    const [isVisible, setVisible] = useState(false);
    const uniqId = useUniqId();
    const innerId = id || uniqId;

    const [endAnimation, setEndAnimation] = useState(false);

    const popupController = usePopupBaseContext();

    useEffect(() => {
        // сначала добавление/удаление из контекста
        if (isOpen) {
            popupController.register({ id: innerId, ...popupInfo });
            setVisible(true);
            setEndAnimation(false);
        } else {
            if (isVisible && withAnimation) {
                setEndAnimation(true);
            } else {
                popupController.unregister(innerId);
                setVisible(false);
            }
        }
    }, [isOpen]);

    return { isOpen, frame, offset, placement, id: innerId, isVisible, setVisible, endAnimation, withAnimation, setEndAnimation };
};

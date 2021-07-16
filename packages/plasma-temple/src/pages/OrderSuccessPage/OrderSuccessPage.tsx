import React from 'react';
import { Button } from '@salutejs/plasma-ui';
import { HeaderProps } from '@salutejs/plasma-ui/components/Header/Header';
import { isSberBox } from '@salutejs/plasma-ui/utils';

import { useFocusOnMount } from '../../hooks/useFocusOnMount';
import { THROTTLE_WAIT } from '../../hooks/useThrottledCallback';
import { useRegistry } from '../../hooks/useRegistry';
import { ComponentPropsWithHeader } from '../../components/Header/types';

interface OrderSuccessProps extends ComponentPropsWithHeader {
    header?: HeaderProps;
    imageSrc?: string;
    onGoBack: () => void;
}

export const OrderSuccessPage: React.FC<OrderSuccessProps> = ({ header, imageSrc = '', onGoBack }) => {
    const { StateLayout } = useRegistry();
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    useFocusOnMount<HTMLButtonElement>(buttonRef, {
        delay: THROTTLE_WAIT,
        prevent: !isSberBox(),
    });

    return (
        <StateLayout
            header={header}
            title="Заказ успешно оформлен! Статус заказа будет отправлен на E-mail"
            image={imageSrc}
            button={
                <Button view="primary" onClick={onGoBack} ref={buttonRef}>
                    Вернуться в магазин
                </Button>
            }
        />
    );
};

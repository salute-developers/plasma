import React from 'react';

import { last } from '../../../utils/last';
import { useScreens } from '../hooks/useScreens';

interface ScreenProps {
    /** Имя экрана */
    name: string;
    /** Контент экрана */
    component?: React.ReactNode;
}

/** Компонент, отвечающий за отображение активного экрана, используется вместе со `ScreensProvider` */
export function Screen({ name, component, children }: React.PropsWithChildren<ScreenProps>) {
    const { history } = useScreens();

    if (last(history)?.name === name) {
        return <>{children ?? component}</>;
    }

    return null;
}

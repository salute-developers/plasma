import React, { MouseEventHandler } from 'react';

import { useAssistant } from '../AssistantProvider';
import { ScreensProviderContext } from '../ScreensProvider/ScreensProviderContext';

import { HeaderProps, NewHeaderProps, OldHeaderProps } from './types';

const isOldHeaderProps = (props: HeaderProps): props is OldHeaderProps =>
    'subtitle' in props || 'back' in props || 'minimize' in props;

const hasOldSubtitleProps = (props: HeaderProps): props is OldHeaderProps => 'subtitle' in props;

const omitProps = <T extends HeaderProps, K extends keyof T>(props: T, keys: K[]): Omit<T, K> => {
    const copy = { ...props };

    for (const k of keys) {
        delete copy[k];
    }

    return copy;
};

/** Работает только с компонентом PlasmaApp */
export const useNewHeaderProps = (props: HeaderProps): NewHeaderProps => {
    const {
        state: { history },
        popScreen,
    } = React.useContext(ScreensProviderContext);

    const { assistant } = useAssistant();
    const historyLen = history.length;

    const subtitle = hasOldSubtitleProps(props) ? props.subtitle : props.subTitle;

    const onArrowClick = React.useCallback<MouseEventHandler<HTMLButtonElement>>(
        (event) => {
            if (!isOldHeaderProps(props)) {
                if (props.onArrowClick) {
                    props.onArrowClick(event);
                    return;
                }
            }

            if (isOldHeaderProps(props)) {
                if (props.onBackClick) {
                    props.onBackClick(event);
                    return;
                }

                if (props.onMinimizeClick) {
                    props.onMinimizeClick(event);
                    return;
                }
            }

            if (historyLen > 1) {
                popScreen();
            } else {
                assistant?.close();
            }
        },
        [historyLen, assistant],
    );

    const arrow = React.useMemo(() => {
        if (!isOldHeaderProps(props)) {
            if (props.arrow) {
                return props.arrow;
            }

            return historyLen > 1 ? 'back' : 'minimize';
        }

        return props.back ? 'back' : 'minimize';
    }, [props]);

    if (isOldHeaderProps(props)) {
        return {
            ...omitProps(props, ['minimize', 'back', 'onMinimizeClick', 'onBackClick', 'subtitle']),
            subTitle: subtitle,
            arrow,
            onArrowClick,
        } as NewHeaderProps;
    }

    return {
        ...props,
        arrow,
        onArrowClick,
    };
};

export const useHeaderProps = (props: OldHeaderProps): OldHeaderProps => {
    const { minimize, back } = props;

    const {
        state: { history },
        popScreen,
    } = React.useContext(ScreensProviderContext);

    if (back !== undefined || minimize !== undefined) {
        return props;
    }

    if (history.length === 1) {
        return {
            ...props,
            minimize: true,
            onMinimizeClick: popScreen,
        } as HeaderProps;
    }

    return {
        ...props,
        back: true,
        onBackClick: popScreen,
    } as HeaderProps;
};

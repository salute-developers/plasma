import React from 'react';
import { CharacterId } from '@salutejs/client';

import { AppStateContext } from '../PlasmaApp/AppStateContext';
import { AnyObject, AssistantInstance } from '../../types';
import { last } from '../../utils/last';
import { INNER_ASSISTANT_ACTION } from '../../constants';
import { Layout } from '../../components/Layout/Layout';
import { PageSpinner } from '../PageSpinner/PageSpinner';
import { useMount } from '../../hooks';
import { HeaderProps } from '../Header/types';
import { useAssistant, useAssistantCharacter } from '../AssistantProvider';
import { useScreens } from '../ScreensProvider';
import { ScreensProviderContext } from '../ScreensProvider/ScreensProviderContext';
import { Screen } from '../ScreensProvider/Screen/Screen';
import { replaceHistory } from '../ScreensProvider/store/actions';
import { History } from '../ScreensProvider/store/types';

import { PageComponent as PageComp } from './types';

export interface PageProps<Name extends string> {
    name: Name;
    component: PageComp<AnyObject, Name>;
    fallbackComponent?: React.ReactNode;
    header?: HeaderProps;
    ignoreInsets?: boolean;
}

export type GetInitialProps<P, R> =
    | {
          (context: P): Promise<R>;
      }
    | {
          (context: P): R;
      };

interface InitialPropsGetter<P, S> {
    getInitialProps?: GetInitialProps<P, S>;
}

interface PageLazyParams<
    C extends PageComp<AnyObject, string>,
    P extends React.ComponentProps<C> = React.ComponentProps<C>,
    Pp = Pick<P, 'params'> & { character: CharacterId },
    Ss = P['state']
> extends InitialPropsGetter<Pp, Ss> {
    default: C & InitialPropsGetter<Pp, Ss>;
}

interface PageLazy {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazy<T extends PageLazyParams<PageComp<AnyObject, any>>>(
        factory: () => Promise<T>,
    ): React.LazyExoticComponent<React.MemoExoticComponent<T['default']>>;
}

interface PageFunctionComponent extends PageLazy {
    <N extends keyof AnyObject>(props: PageProps<N>): React.ReactElement;
}

export const Page: PageFunctionComponent = ({
    name,
    component: Component,
    fallbackComponent = <PageSpinner />,
    header,
    ignoreInsets,
}) => {
    const { assistant, setAssistantState } = useAssistant();
    const { state, history, params, changeState, pushHistory, pushScreen, popScreen, goToScreen } = useScreens();
    const { dispatch } = React.useContext(ScreensProviderContext);

    const { header: appHeader } = React.useContext(AppStateContext);

    const sendData = React.useCallback<AssistantInstance['sendData']>(
        (params) => {
            /**
             * перехват кастомного экшена для обработки на клиенте
             * параметры экшена будут переданы в AssistantClient.onData в виде `smart_app_data` экшена
             */
            if (params.name !== INNER_ASSISTANT_ACTION) {
                assistant?.sendData(params);
            } else {
                const { action } = params;

                if (window.AssistantClient?.onData) {
                    const smartAppData = {
                        type: 'type' in action ? action.type : action.action_id,
                        payload: ('type' in action ? action.payload : action.parameters) ?? {},
                    };

                    window.AssistantClient.onData({
                        type: 'smart_app_data',
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        smart_app_data: smartAppData,
                        // Для обратной совместимости
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        action: smartAppData,
                    });
                }
            }

            return () => {};
        },
        [assistant],
    );

    const activeScreen = last(history);

    // TODO: выглядит как хак
    const replacePreviousScreens = React.useCallback(
        (screens: Array<{ name: string; params?: AnyObject }>) => {
            if (!activeScreen) {
                return;
            }

            screens.forEach((screen) => {
                window.history.pushState({ params: screen.params, name: screen.name }, '');
            });
            window.history.pushState({ name: activeScreen.name, params: activeScreen.params }, '');

            const newHistory = (screens.map((screen) => ({
                name: screen.name,
                data: null,
                params: screen.params ?? null,
            })) as History[]).concat(activeScreen);

            dispatch(replaceHistory(newHistory));
        },
        [activeScreen],
    );

    return (
        <Screen name={name}>
            <Layout ignoreInsets={ignoreInsets}>
                <React.Suspense fallback={fallbackComponent}>
                    <Component
                        name={name}
                        params={params}
                        state={state}
                        assistant={assistant}
                        setAssistantState={setAssistantState}
                        changeState={changeState}
                        pushHistory={pushHistory}
                        pushScreen={pushScreen}
                        replacePreviousScreens={replacePreviousScreens}
                        popScreen={popScreen}
                        goToScreen={goToScreen}
                        sendData={sendData}
                        fallbackComponent={fallbackComponent}
                        header={header ?? appHeader}
                    />
                </React.Suspense>
            </Layout>
        </Screen>
    );
};

Page.lazy = (factory) => {
    return React.lazy(async () => {
        const { default: Component, getInitialProps } = await factory();
        const promiseGetter = Component.getInitialProps ?? getInitialProps;

        const Wrapper = (props: React.ComponentProps<typeof Component>) => {
            const { state, changeState, params } = props;
            const character = useAssistantCharacter();

            useMount(() => {
                if (!promiseGetter || state) {
                    return;
                }

                const promise = promiseGetter({ params, character });

                if (typeof promise.then === 'function') {
                    promise.then(changeState);
                } else {
                    changeState(promise);
                }
            });

            if (promiseGetter && !state) {
                return <PageSpinner />;
            }

            return <Component {...props} />;
        };

        return {
            default: React.memo(Wrapper),
        };
    });
};

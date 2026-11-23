import { Overlay, buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const FallbackButton = component(mergeConfig(buttonConfig as any, {}));

const OverlayDefault = {
    name: 'Default',
    args: [
        {
            name: 'backgroundColorProperty',
            value: 'var(--overlay-soft, rgba(0, 0, 0, 0.56))',
        },
        {
            name: 'withBlur',
            value: false,
        },
        {
            name: 'transparent',
            value: false,
        },
        {
            name: 'isClickable',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Button = relatedComponents?.Button ?? FallbackButton;
        const [isVisible, setIsVisible] = useState(false);
        const { backgroundColorProperty, withBlur, transparent, isClickable } = args;

        return (
            <div
                style={{
                    position: 'relative',
                    isolation: 'isolate', // z-index подложки не выходит за пределы сцены
                    width: '100%',
                    height: '100%',
                    minHeight: '24rem',
                    overflow: 'hidden',
                }}
            >
                <Button
                    text="Показать overlay"
                    onClick={() => setIsVisible(true)}
                    style={{
                        margin: '3.25rem 1rem 1rem',
                        width: '15rem',
                    }} /* отступ сверху: под ним переключатель историй сцены */
                />
                {isVisible && (
                    <>
                        <Overlay
                            zIndex="100"
                            backgroundColorProperty={backgroundColorProperty}
                            withBlur={withBlur}
                            transparent={transparent}
                            isClickable={isClickable}
                            onOverlayClick={() => setIsVisible(false)}
                            style={{ position: 'absolute' }}
                        />
                        <Button
                            view="primary"
                            text="Скрыть overlay"
                            onClick={() => setIsVisible(false)}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                zIndex: 101,
                                transform: 'translate(-50%, -50%)',
                                width: '15rem',
                            }}
                        />
                    </>
                )}
            </div>
        );
    },
};

export const OverlayStories = [OverlayDefault];

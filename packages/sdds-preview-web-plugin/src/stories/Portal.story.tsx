import { Portal, buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useRef, useState } from 'react';

const FallbackButton = component(mergeConfig(buttonConfig as any, {}));

const wrapperStyle = {
    padding: '1.25rem',
    marginTop: '0.625rem',
    marginBottom: '0.625rem',
    border: '1px solid',
};

const PortalDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Button = relatedComponents?.Button ?? FallbackButton;
        const [show, setShow] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);
        const { disabled } = args;

        return (
            <div style={{ width: '100%', padding: '3.25rem 1rem 1rem', boxSizing: 'border-box' }}>
                <Button text={show ? 'Скрыть' : 'Показать'} onClick={() => setShow(!show)} />
                <div style={wrapperStyle}>
                    <div style={{ marginBottom: '1.25rem' }}>Содержимое портала появится в нижнем блоке.</div>
                    <div style={{ marginBottom: '1.25rem' }}>
                        Если портал выключен (disabled), то содержимое появится в данном блоке.
                    </div>
                    {show && containerRef.current && (
                        <Portal disabled={disabled} container={containerRef.current}>
                            <div style={{ fontWeight: 600 }}>Содержимое портала</div>
                        </Portal>
                    )}
                </div>
                <div ref={containerRef} style={wrapperStyle} />
            </div>
        );
    },
};

export const PortalStories = [PortalDefault];

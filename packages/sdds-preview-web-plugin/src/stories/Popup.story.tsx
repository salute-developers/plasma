import { PopupProvider, component, mergeConfig, popupConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useRef, useState } from 'react';

const Popup = component(mergeConfig(popupConfig as any));

const placements = ['center', 'top', 'bottom', 'right', 'left', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];
const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const PopupDefault = {
    name: 'Default',
    args: [
        {
            name: 'placement',
            value: 'center',
            items: toItems(placements),
        },
        {
            name: 'offsetX',
            value: 0,
        },
        {
            name: 'offsetY',
            value: 0,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const frame = useRef<HTMLDivElement>(null);
        const [isOpen, setIsOpen] = useState(false);
        const { placement, offsetX, offsetY, ...rest } = args;

        return (
            <PopupProvider>
                <div
                    ref={frame}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        minHeight: '24rem',
                        overflow: 'hidden',
                    }}
                >
                    <Button
                        text="Открыть во Frame"
                        onClick={() => setIsOpen(true)}
                        style={{ margin: '3.25rem 1rem 1rem' }}
                    />
                    <Popup
                        {...rest}
                        frame={frame}
                        opened={isOpen}
                        placement={placement}
                        offset={[Number(offsetX) || 0, Number(offsetY) || 0]}
                    >
                        <div
                            style={{
                                background: 'var(--surface-solid-secondary)',
                                padding: '1rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}
                        >
                            <span>Content</span>
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </div>
                    </Popup>
                </div>
            </PopupProvider>
        );
    },
};

export const PopupStories = [PopupDefault];

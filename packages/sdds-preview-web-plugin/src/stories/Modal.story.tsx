import { PopupProvider, component, mergeConfig, modalConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useRef, useState } from 'react';

const Modal = component(mergeConfig(modalConfig as any, {}));

const placements = ['center', 'top', 'bottom', 'right', 'left', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];
const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ModalDefault = {
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
        {
            name: 'hasClose',
            value: true,
        },
        {
            name: 'closeOnEsc',
            value: true,
        },
        {
            name: 'closeOnOverlayClick',
            value: true,
        },
        {
            name: 'withBlur',
            value: false,
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
                        text="Открыть"
                        onClick={() => setIsOpen(true)}
                        style={{ margin: '3.25rem 1rem 1rem' }} /* отступ сверху: под ним переключатель историй сцены */
                    />
                    <Modal
                        {...rest}
                        frame={frame}
                        opened={isOpen}
                        onClose={() => setIsOpen(false)}
                        placement={placement}
                        offset={[Number(offsetX) || 0, Number(offsetY) || 0]}
                        hasBody
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span>Content</span>
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </div>
                    </Modal>
                </div>
            </PopupProvider>
        );
    },
};

export const ModalStories = [ModalDefault];

import {
    PopupProvider,
    component,
    drawerConfig,
    drawerContentConfig,
    drawerFooterConfig,
    drawerHeaderConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useRef, useState } from 'react';

const Drawer = component(mergeConfig(drawerConfig as any, {}));
const DrawerContent = component(mergeConfig(drawerContentConfig as any));
const DrawerHeader = component(mergeConfig(drawerHeaderConfig as any));
const DrawerFooter = component(mergeConfig(drawerFooterConfig as any));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const DrawerDefault = {
    name: 'Default',
    args: [
        {
            name: 'placement',
            value: 'right',
            items: toItems(['left', 'right', 'top', 'bottom']),
        },
        {
            name: 'width',
            value: '20rem',
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
        const [isOpen, setIsOpen] = useState(true);
        const { width, ...rest } = args;
        const vertical = rest.placement === 'top' || rest.placement === 'bottom';

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
                    <Drawer
                        {...rest}
                        frame={frame}
                        opened={isOpen}
                        onClose={() => setIsOpen(false)}
                        width={vertical ? undefined : width}
                        height={vertical ? width : undefined}
                    >
                        <DrawerHeader onClose={() => setIsOpen(false)}>
                            <h3 style={{ margin: 0 }}>Header</h3>
                        </DrawerHeader>
                        <DrawerContent>
                            <p style={{ margin: 0 }}>Content</p>
                        </DrawerContent>
                        <DrawerFooter>
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </DrawerFooter>
                    </Drawer>
                </div>
            </PopupProvider>
        );
    },
};

export const DrawerStories = [DrawerDefault];

import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { WithTheme } from '../../_helpers';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Drawer, DrawerContent } from '../Drawer/Drawer';
import { useToast } from '../Toast/Toast';
import { useNotifications } from '../../../components/Notification';

import { WithOverlayProvider } from './OverlayProvider';

const meta: Meta = {
    title: 'Overlay/OverlayProvider',
    decorators: [WithTheme, WithOverlayProvider],
    parameters: {
        docs: { story: { inline: false, iframeHeight: '30rem' } },
    },
};

export default meta;

const Messages = () => {
    const { showToast } = useToast();
    const { addNotification } = useNotifications();

    return (
        <>
            <Button text="Показать Toast" onClick={() => showToast({ text: 'Изменения сохранены' })} />
            <Button
                text="Показать Notification"
                onClick={() => addNotification({ title: 'Оповещение', children: 'Текст оповещения' }, 5000)}
            />
        </>
    );
};

const NestedLayers = () => {
    const [modal, setModal] = useState(false);
    const [nested, setNested] = useState(false);
    const [drawer, setDrawer] = useState(false);

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button text="Открыть Modal" onClick={() => setModal(true)} />
            <Button text="Открыть Drawer" onClick={() => setDrawer(true)} />
            <Messages />

            <Modal opened={modal} onClose={() => setModal(false)} hasBody>
                <p>Escape и клик по подложке закрывают только верхний слой.</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button text="Открыть вложенный Modal" onClick={() => setNested(true)} />
                    <Messages />
                </div>
                <Modal
                    opened={nested}
                    onClose={() => setNested(false)}
                    onCloseRequest={(reason) => reason !== 'outside'}
                    hasBody
                >
                    <p>Клик по подложке не закрывает это окно.</p>
                </Modal>
            </Modal>

            <Drawer opened={drawer} onClose={() => setDrawer(false)} asModal={false} placement="right">
                <DrawerContent>
                    <p>Немодальная панель: страница остаётся доступной, Escape закрывает панель.</p>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export const Default: StoryObj = {
    render: () => <NestedLayers />,
};

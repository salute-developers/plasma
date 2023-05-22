import React from 'react';

import { Button } from '../Button';

import { ModalsProvider, Modal } from '.';

const liveDemoProps = {
    withBlur: false,
};
const func = () => {};

export const LiveDemo = () => {
    const { withBlur } = liveDemoProps;
    return (
        <ModalsProvider>
            <Modal id="modalA" isOpen onClose={func} withBlur={withBlur}>
                <Button text="Close" onClick={func} />
            </Modal>
        </ModalsProvider>
    );
};

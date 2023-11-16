import React, { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { Headline3 } from '../Typography';

import { ModalsProvider, Modal } from '.';
import type { ModalProps } from '.';

const meta: Meta<ModalProps> = {
    title: 'Controls/Modal',
    component: Modal,
    decorators: [InSpacingDecorator],
    argTypes: {
        withBlur: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export default meta;

type StoryModalProps = ModalProps & { withBlur: boolean };

const StyledWrapper = styled.div`
    height: 1200px;
`;

const StyledHeadline3 = styled(Headline3)`
    padding-bottom: 1rem;
`;

const StyledButton = styled(Button)`
    margin-right: 1rem;
`;

const StoryLiveDemo = ({ withBlur, ...rest }: StoryModalProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    const onCloseA = useCallback(() => setIsOpenA(false), []);
    const onCloseB = useCallback(() => setIsOpenB(false), []);
    const onCloseC = useCallback(() => setIsOpenC(false), []);

    return (
        <StyledWrapper>
            <ModalsProvider>
                <Button text="Open modal" onClick={() => setIsOpenA(true)} />

                <Modal id="modalA" isOpen={isOpenA} onClose={onCloseA} withBlur={withBlur} {...rest}>
                    <StyledHeadline3>Modal A</StyledHeadline3>
                    <StyledButton view="primary" text="Open modal B" onClick={() => setIsOpenB(true)} />
                    <Button text="Close" onClick={onCloseA} />
                </Modal>

                <Modal id="modalB" isOpen={isOpenB} onClose={onCloseB} {...rest}>
                    <StyledHeadline3>Modal B</StyledHeadline3>
                    <StyledButton view="primary" text="Open modal C" onClick={() => setIsOpenC(true)} />
                    <Button text="Close" onClick={onCloseB} />

                    <Modal id="modalC" isOpen={isOpenC} onClose={onCloseC} {...rest}>
                        <StyledHeadline3>Modal C</StyledHeadline3>
                        <Button text="Close" onClick={onCloseC} />
                    </Modal>
                </Modal>
            </ModalsProvider>
        </StyledWrapper>
    );
};

export const LiveDemo: StoryObj<StoryModalProps> = {
    args: {
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        showCloseButton: true,
    },
    render: (args) => <StoryLiveDemo {...args} />,
};

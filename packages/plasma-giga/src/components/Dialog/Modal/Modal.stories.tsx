import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Button } from '../../Button';
import { ButtonGroup } from '../../ButtonGroup';
import { SSRProvider } from '../../SSRProvider';
import { popupClasses, PopupProvider } from '../../Popup';

import { config } from './Modal.config';

import { DialogModal, dialogModalClasses } from '.';
import type { DialogModalProps } from '.';

const SecondaryText = styled.span`
    color: var(--text-secondary);
`;

const { sizes } = getConfigVariations(config);

const meta: Meta<DialogModalProps> = {
    title: 'Overlay/Dialog/Modal',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: { type: 'select' },
        },
        hasImage: {
            control: { type: 'boolean' },
            if: { arg: 'size', eq: 'm' },
        },
        hasClose: {
            control: { type: 'boolean' },
        },
        closeOnEsc: {
            control: { type: 'boolean' },
        },
        closeOnOverlayClick: {
            control: { type: 'boolean' },
        },
        withBlur: {
            control: { type: 'boolean' },
        },
        ...disableProps(['onClose', 'opened', 'children', 'actions', 'frame', 'title', 'imageUrl', 'imageAlt']),
    },
} as Meta;

export default meta;

type StoryDialogModalProps = ComponentProps<typeof DialogModal> & {
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    withBlur: boolean;
    hasImage: boolean;
};

const StyledDialogModal = styled(DialogModal)`
    && > .${popupClasses.root}, .${dialogModalClasses.overlay} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${popupClasses.root} {
        animation: fadeOut 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${dialogModalClasses.overlay} {
        animation: fadeOut 1s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
`;

const Actions = ({ size, onClick }: { size: 'm' | 's'; onClick: () => void }) => {
    if (size === 'm') {
        return <Button size={size} stretching="filled" view="secondary" text="Закрыть" onClick={onClick} />;
    }

    return (
        <ButtonGroup isCommonButtonStyles={false} gap="wide">
            <Button size={size} stretching="filled" view="critical" text="Удалить" onClick={onClick} />
            <Button size={size} stretching="filled" view="secondary" text="Отменить" onClick={onClick} />
        </ButtonGroup>
    );
};

const contentBySize = {
    s: {
        title: 'Удалить все факты?',
        children: <SecondaryText>ГигаЧат забудет их и не сможет использовать в новых чатах</SecondaryText>,
    },
    m: {
        title: 'Встречайте — Ультра',
        children:
            'Мы улучшили модель — теперь она точнее понимает задачи, быстрее отвечает и лучше работает со сложными запросами.',
    },
};

const StoryDemo = ({ imageUrl, imageAlt, hasClose, size, hasImage, ...rest }: StoryDialogModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentSize = (size || 'm') as 'm' | 's';
    const { title, children } = contentBySize[currentSize];

    return (
        <SSRProvider>
            <PopupProvider>
                <Button text="Открыть диалог" onClick={() => setIsOpen(true)} />
                <StyledDialogModal
                    frame="theme-root"
                    opened={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={title}
                    imageUrl={hasImage && size !== 's' ? imageUrl : undefined}
                    imageAlt={imageAlt}
                    hasClose={hasClose}
                    size={size}
                    actions={<Actions size={currentSize} onClick={() => setIsOpen(false)} />}
                    {...rest}
                >
                    {children}
                </StyledDialogModal>
            </PopupProvider>
        </SSRProvider>
    );
};

export const Default: StoryObj<StoryDialogModalProps> = {
    args: {
        size: 'm',
        hasImage: true,
        hasClose: true,
        closeOnEsc: true,
        imageUrl:
            'https://i.redd.it/flag-for-gender-apathy-v0-ets56c4j4cxd1.png?width=2500&format=png&auto=webp&s=1f66fffc3cc214f9b5cd8547ee1ae13ff7d16795',
        closeOnOverlayClick: true,
        withBlur: false,
        withAnimation: true,
    },
    render: (args) => <StoryDemo {...args} />,
};

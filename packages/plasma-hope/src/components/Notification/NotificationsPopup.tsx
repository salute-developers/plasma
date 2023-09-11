import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useStoreon } from 'storeon/react';
import { Popup } from '@salutejs/plasma-core';

import { Notification } from './Notification';
import type { NotificationsState, NotificationsEvents } from './NotificationsStore';

const showAnimation = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const hideAnimation = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;

    padding: 0 1.5rem 1.5rem;
    max-height: 100%;
`;

const StyledItemWrapper = styled.div<{ isHiding: boolean }>`
    margin-top: 1rem;
    opacity: 1;

    ${({ isHiding }) => css`
        animation: 0.4s ${isHiding ? hideAnimation : showAnimation} ease-out;
    `}
`;

/**
 * Обертка для визуального представления уведомлений.
 */
export const NotificationsPopup: React.FC = () => {
    const { notifications } = useStoreon<NotificationsState, NotificationsEvents>('notifications');

    return (
        <>
            {notifications.length > 0 && (
                <Popup isOpen position="bottom-right" zIndex="9100">
                    <StyledRoot>
                        {notifications.map(({ id, ...rest }) => (
                            <Notification key={id} as={StyledItemWrapper} id={id} {...rest} />
                        ))}
                    </StyledRoot>
                </Popup>
            )}
        </>
    );
};

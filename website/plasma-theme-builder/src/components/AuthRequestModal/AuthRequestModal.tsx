import React from 'react';
import styled from 'styled-components';
import { Button, H3, BodyM, Modal } from '@salutejs/plasma-b2c';

const StyledTokenForm = styled(Modal)`
    width: 40rem;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const Description = styled(BodyM)`
    padding: 1rem 0;
`;

interface AuthRequestProps {
    isOpen: boolean;
    onClose: () => void;
    onGetAuth: () => void;
}

export const AuthRequestModal = ({ isOpen, onClose, onGetAuth }: AuthRequestProps) => {
    return (
        <StyledTokenForm isOpen={isOpen} onClose={onClose}>
            <H3>Запрос учетной записи</H3>
            <Description>
                Для продолжения необходима авторизация в GitHub. Вы будете перенаправлены на страницу логина
            </Description>
            <StyledButtons>
                <Button type="button" text="Отмена" onClick={onClose} />
                <Button type="button" text="Продолжить" view="primary" onClick={onGetAuth} />
            </StyledButtons>
        </StyledTokenForm>
    );
};

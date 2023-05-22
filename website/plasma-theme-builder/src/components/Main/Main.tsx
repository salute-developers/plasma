import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, DsplM, Link } from '@salutejs/plasma-b2c';
import { accent } from '@salutejs/plasma-tokens-b2c';
import { useGithubAuth } from '../../hooks';
import { AuthRequestModal } from '../AuthRequestModal/AuthRequestModal';

const StyledMain = styled.div``;

const Display = styled(DsplM)``;

const Paragraph = styled.p``;

const AccentHeader = styled.span`
    color: ${accent};
`;

const Description = styled.div`
    margin-top: 2rem;
`;

const StyledButton = styled(Button)`
    display: block;
    margin: 2rem 0;
    margin-left: auto;
`;

interface MainProps {
    onGenerateTheme: () => void;
    onSetToken: (value: string) => void;
}

export const Main = ({ onGenerateTheme, onSetToken }: MainProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, getToken, getAuth] = useGithubAuth();

    useEffect(() => {
        getToken();
    }, [getToken]);

    useEffect(() => {
        if (token) {
            onSetToken(token);
        }
    }, [token, onSetToken]);

    const onAuthRequestModalOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onAuthRequestModalClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <StyledMain>
            <AuthRequestModal isOpen={isOpen} onClose={onAuthRequestModalClose} onGetAuth={getAuth} />
            <Display>
                Генератор <AccentHeader>пользовательской</AccentHeader> темы
            </Display>
            <Description>
                <Paragraph>
                    Web-сервис предназначенный для автоматической генерации пользовательской темы, которую можно
                    использовать в своих проекта. В результате получится схема с набором токенов, которая будет доступна
                    для web-сервисов (будут сгенерированы css-стили), а также iOS, Kotlin и React-Native платформ.
                </Paragraph>
                <Paragraph>
                    В качестве значения токенов можно выбрать цвета из{' '}
                    <Link
                        target="_blank"
                        href="https://plasma.sberdevices.ru/web-storybook/?path=/story/colors--general"
                    >
                        основной
                    </Link>{' '}
                    или{' '}
                    <Link
                        target="_blank"
                        href="https://plasma.sberdevices.ru/web-storybook/?path=/story/colors--additional"
                    >
                        дополнительной
                    </Link>{' '}
                    палитры.
                </Paragraph>
                <Paragraph>
                    Для доступа к уже созданной теме необходимо сформировать ссылку в формате:
                    https://plasma.sberdevices.ru/plasma-theme-builder/?theme=название_темы
                </Paragraph>
            </Description>
            {token ? (
                <StyledButton view="primary" text="Начать генерацию темы" onClick={onGenerateTheme} />
            ) : (
                <StyledButton view="primary" text="Авторизация" onClick={onAuthRequestModalOpen} />
            )}
        </StyledMain>
    );
};

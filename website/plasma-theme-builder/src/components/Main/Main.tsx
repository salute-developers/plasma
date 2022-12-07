import React from 'react';
import styled from 'styled-components';
import { Button, DsplM, Link } from '@salutejs/plasma-b2c';
import { accent } from '@salutejs/plasma-tokens-b2c';

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
    onClick: () => void;
}

export const Main = ({ onClick }: MainProps) => {
    return (
        <StyledMain>
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
                    https://plasma.sberdevices.ru/theme-builder/название_темы
                </Paragraph>
            </Description>
            <StyledButton view="primary" text="Начать генерацию темы" onClick={onClick} />
        </StyledMain>
    );
};

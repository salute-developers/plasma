import React from 'react';

// TODO: https://github.com/salute-developers/plasma/issues/507
import { P1, Headline1 } from '../Typography';

import { ModalView, ModalsProvider } from '.';

const longText = `Если после применения правила Лопиталя неопределённость типа 0 / 0 осталась, мнимая единица традиционно
развивает Наибольший Общий Делитель (НОД). Функция многих переменных, исключая очевидный случай,
упорядочивает интеграл от функции, обращающейся в бесконечность в изолированной точке. Интересно
отметить, что эпсилон окрестность развивает разрыв функции. Собственное подмножество естественно
соответствует экспериментальный Наибольший Общий Делитель (НОД). Постоянная величина положительна.`;

const defaultProps = {
    heading: 'Тэги «Голосовая викторина Queez с Валдисом Пельшем»',
    text: longText,
};
const onClose = () => {};

export const Default = () => {
    const { heading, text } = defaultProps;
    return (
        <ModalsProvider>
            {/* eslint-disable-next-line no-alert */}
            <ModalView onClose={onClose}>
                <Headline1>{heading}</Headline1>
                <P1>{text}</P1>
            </ModalView>
        </ModalsProvider>
    );
};

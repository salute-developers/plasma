import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';

import { SSRProvider } from '../SSRProvider';
import { disableProps, InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { P1, Headline1, Headline3 } from '../Typography';

import { ModalView } from './ModalView';

import { ModalsProvider, Modal } from '.';

const longText = `Если после применения правила Лопиталя неопределённость типа 0 / 0 осталась, мнимая единица традиционно
развивает Наибольший Общий Делитель (НОД). Функция многих переменных, исключая очевидный случай,
упорядочивает интеграл от функции, обращающейся в бесконечность в изолированной точке. Интересно
отметить, что эпсилон окрестность развивает разрыв функции. Собственное подмножество естественно
соответствует экспериментальный Наибольший Общий Делитель (НОД). Постоянная величина положительна.`;

export default {
    title: 'Controls/Modal',
    decorators: [InSpacingDecorator],
} as Meta;

export const Default: Story<{ heading: string; text: string }> = ({ heading, text }) => (
    <div style={{ margin: '-1rem', padding: '1rem', background: 'rgba(8, 8, 8, 0.2)' }}>
        <ModalView onClose={() => alert('Close!')}>
            <Headline1>{heading}</Headline1>
            <P1>{text}</P1>
        </ModalView>
    </div>
);

const propsToDisable = ['isOpen', 'children', 'onClose'];

Default.args = {
    heading: 'Тэги «Голосовая викторина Queez с Валдисом Пельшем»',
    text: longText,
};

Default.argTypes = {
    ...disableProps(propsToDisable),
};

const StyledModalFullHeight = styled(Modal)`
    height: 100%;
`;

const StyledWrapper = styled.div`
    height: 1200px;
`;

export const LiveDemo = () => {
    const root = React.useRef<HTMLElement | null>(null);
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);
    const [isOpenC, setIsOpenC] = React.useState(false);

    const [isOpenFullHeightA, setIsOpenFullHeightA] = React.useState(false);
    const [isOpenFullHeightB, setIsOpenFullHeightB] = React.useState(false);
    const [isOpenFullHeightC, setIsOpenFullHeightC] = React.useState(false);

    const onCloseA = React.useCallback(() => setIsOpenA(false), []);
    const onCloseB = React.useCallback(() => setIsOpenB(false), []);
    const onCloseC = React.useCallback(() => setIsOpenC(false), []);

    const onCloseFullHeightA = React.useCallback(() => setIsOpenFullHeightA(false), []);
    const onCloseFullHeightB = React.useCallback(() => setIsOpenFullHeightB(false), []);
    const onCloseFullHeightC = React.useCallback(() => setIsOpenFullHeightC(false), []);

    useEffect(() => {
        if (!root.current) {
            root.current = document.getElementById('root');
        }
        if (isOpenA || isOpenB || isOpenC) {
            root.current?.setAttribute('role', 'presentation');
            root.current?.setAttribute('aria-hidden', 'true');
        } else {
            root.current?.removeAttribute('role');
            root.current?.removeAttribute('aria-hidden');
        }
    }, [isOpenA, isOpenB, isOpenC]);

    return (
        <SSRProvider>
            <StyledWrapper>
                <ModalsProvider>
                    <Button text="Открыть окно A" onClick={() => setIsOpenA(true)} />
                    <Button text="Открыть окно A на всю высоту" onClick={() => setIsOpenFullHeightA(true)} />

                    <h1>БОЖЕСТВЕННАЯ КОМЕДИЯ. ДАНТЕ АЛИГЬЕРИ</h1>

                    <p>Земную жизнь пройдя до половины,</p>
                    <p>Я очутился в сумрачном лесу,</p>
                    <p>Утратив правый путь во тьме долины.</p>

                    <br />
                    <p>Каков он был, о, как произнесу,</p>
                    <p>Тот дикий лес, дремучий и грозящий,</p>
                    <p>Чей давний ужас в памяти несу!</p>

                    <br />
                    <p>Так горек он, что смерть едва ль не слаще.</p>
                    <p>Но, благо в нем обретши навсегда,</p>
                    <p>Скажу про все, что видел в этой чаще.</p>

                    <Modal
                        id="modalA"
                        isOpen={isOpenA}
                        onClose={onCloseA}
                        aria-labelledby="example-modalA-title"
                        closeButtonAriaLabel="Закрыть (кнока-крестик)"
                    >
                        <Headline3 id="example-modalA-title" mb="8x">
                            Модальное окно A
                        </Headline3>
                        <Button view="primary" text="Открыть окно B" onClick={() => setIsOpenB(true)} />
                        <Button text="Закрыть" onClick={onCloseA} />
                    </Modal>

                    <Modal
                        id="modalB"
                        isOpen={isOpenB}
                        onClose={onCloseB}
                        aria-labelledby="example-modalB-title"
                        closeButtonAriaLabel="Закрыть (кнока-крестик)"
                    >
                        <Headline3 id="example-modalB-title" mb="8x">
                            Модальное окно B
                        </Headline3>
                        <Button view="primary" text="Открыть окно C" onClick={() => setIsOpenC(true)} />
                        <Button text="Закрыть" onClick={onCloseB} />

                        <Modal
                            id="modalC"
                            isOpen={isOpenC}
                            onClose={onCloseC}
                            aria-labelledby="example-modalC-title"
                            closeButtonAriaLabel="Закрыть (кнока-крестик)"
                        >
                            <Headline3 id="example-modalC-title" mb="8x">
                                Модальное окно C (вложенное)
                            </Headline3>
                            <P1>
                                Подмножество, исключая очевидный случай, реально стабилизирует предел
                                последовательности. Нечетная функция решительно создает коллинеарный интеграл
                                Гамильтона. Доказательство развивает неопровержимый постулат.
                            </P1>
                        </Modal>
                    </Modal>

                    <StyledModalFullHeight
                        id="modalFullHeightA"
                        isOpen={isOpenFullHeightA}
                        onClose={onCloseFullHeightA}
                        aria-labelledby="example-modalFullHeightA-title"
                        closeButtonAriaLabel="Закрыть (кнока-крестик)"
                    >
                        <Headline3 id="example-modalFullHeightA-title" mb="8x">
                            Модальное окно на всю высоту
                        </Headline3>
                        <Button
                            view="primary"
                            text="Открыть окно B на всю высоту"
                            onClick={() => setIsOpenFullHeightB(true)}
                        />
                        <Button text="Закрыть" onClick={onCloseFullHeightA} />
                    </StyledModalFullHeight>

                    <StyledModalFullHeight
                        id="modalFullHeightB"
                        isOpen={isOpenFullHeightB}
                        onClose={onCloseFullHeightB}
                        aria-labelledby="example-modalFullHeightB-title"
                        closeButtonAriaLabel="Закрыть (кнока-крестик)"
                    >
                        <Headline3 id="example-modalFullHeightB-title" mb="8x">
                            Модальное окно B
                        </Headline3>
                        <Button
                            view="primary"
                            text="Открыть окно C на всю высоту"
                            onClick={() => setIsOpenFullHeightC(true)}
                        />
                        <Button text="Закрыть" onClick={onCloseFullHeightB} />

                        <StyledModalFullHeight
                            id="modalFullHeightC"
                            isOpen={isOpenFullHeightC}
                            onClose={onCloseFullHeightC}
                            aria-labelledby="example-modalFullHeightC-title"
                            closeButtonAriaLabel="Закрыть (кнока-крестик)"
                        >
                            <Headline3 id="example-modalFullHeightC-title" mb="8x">
                                Модальное окно C на всю высоту (вложенное)
                            </Headline3>
                            <P1>
                                Подмножество, исключая очевидный случай, реально стабилизирует предел
                                последовательности. Нечетная функция решительно создает коллинеарный интеграл
                                Гамильтона. Доказательство развивает неопровержимый постулат.
                            </P1>
                        </StyledModalFullHeight>
                    </StyledModalFullHeight>
                </ModalsProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

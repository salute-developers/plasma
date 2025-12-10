/**
 * NOTE:
 * общие тесты (клики, клавиатурная навигация, тд.)
 */

// ПРИМЕР:
// import React, { useState } from 'react';
// import {
//     mount,
//     getComponent,
//     getBaseVisualTests,
// } from '@salutejs/plasma-cy-utils';
// import { mount, getComponent } from '@salutejs/plasma-cy-utils';

// import { ButtonProps } from './Button.types';
// import { config } from './Button.config';

/**
 * NOTE:
 * пример вызова базовых тестов с помощью генерации матрицы пропсов (импорт нужных частей закоменчен)
 * getBaseVisualTests({ config, component: 'Button', children: 'Hello Plasma', configPropsForMatrix: ['view', 'size'] })
 */

// describe('plasma-new-hope: Button', () => {
//     const Button = getComponent<ButtonProps>('Button');

//     const ButtonClick = () => {
//         const [clickedTimes, setClickedTimes] = useState(0);

//         return (
//             <>
//                 <Button
//                     text="Button_view_default_size_l"
//                     view="default"
//                     size="l"
//                     onClick={() => setClickedTimes((prevClicked) => prevClicked++)}
//                 >
//                     Hello Plasma
//                 </Button>
//                 <span id="result">{clickedTimes}</span>
//             </>
//         );
//     };

//     it('click', () => {
//         mount(<ButtonClick />);

//         cy.get('#result').contains('0');
//         cy.get('button').click();
//         cy.get('#result').contains('1');
//     });
// });

import { css } from 'styled-components';

import { tokens } from '../../../../Modal.tokens';

export const base = css`
    width: 100%;
    overflow: hidden;

    img,
    picture,
    video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /*
     * Картинка непрозрачная и рисуется поверх скругления ModalBody, поэтому радиус
     * карточки нужен ей самой. Какие края обнулить, решает ModalContent: селектор
     * соседа нельзя писать здесь, stylis приклеит :not() к классу картинки.
     */
    border-radius: var(${tokens.modalBodyBorderRadius});
`;

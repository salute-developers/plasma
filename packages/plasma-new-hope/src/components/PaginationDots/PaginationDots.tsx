import { styled } from '@linaria/react';

/**
 * Оборачивающий компонент для пагинации точками.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 */
export const DotsBase = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

/**
 * Оборачивающий компонент для пагинации точками.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 * @deprecated
 */
export const PaginationDots = styled(DotsBase)``;

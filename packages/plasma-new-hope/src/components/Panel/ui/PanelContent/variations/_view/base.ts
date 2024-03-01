import { css } from '@linaria/core';

export const base = css`
    overflow-y: scroll;

    /* TODO заменить на кастомный скроллбар */
    /* stylelint-disable-next-line selector-max-empty-lines, selector-nested-pattern, selector-type-no-unknown */
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    flex-grow: 1;

    padding-right: 20px;
    box-sizing: border-box;
`;

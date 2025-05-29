import { styled } from '@linaria/react';

export interface PaginationDotProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /**
     * Элемент активен
     */
    isActive: boolean;
}

/**
 * Элемент пагинации точками.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 */
export const DotBase = styled.li<PaginationDotProps>`
    width: ${({ isActive }) => (isActive ? '1.75rem' : '0.375rem')};
    height: 0.375rem;
    border-radius: 1rem;
    background: ${({ isActive }) => (isActive ? 'var(--text-primary)' : 'var(--surface-transparent-tertiary)')};
    transition: width 0.1s ease-in-out, background 0.3s ease-in-out;
    font-size: 0.5rem;

    & + & {
        margin-left: 0.375rem;
    }

    &:focus {
        outline: 0 none;
    }
`;

/**
 * Элемент пагинации точками.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 * @deprecated
 */
export const PaginationDot = styled(DotBase)<PaginationDotProps>`
    cursor: pointer;

    background: ${({ isActive }) => (isActive ? 'var(--text-accent)' : 'var(--surface-transparent-tertiary)')};

    &:hover {
        background: var(--text-accent);
    }
`;

import type { HTMLAttributes, ReactNode } from 'react';
import type { Marked, MarkedExtension, Token } from 'marked';

export type MarkdownMarkedOptions = MarkedExtension;
export type MarkedEngine = Pick<Marked, 'defaults' | 'lexer' | 'Parser'>;
export type MarkdownTokenRenderer = (token: Token, children?: ReactNode) => ReactNode | undefined;
export type MarkdownTokenRendererMap = MarkdownTokenRenderer;
export type MarkdownComponentMap = MarkdownTokenRenderer;
export type MarkdownRendererMap = MarkdownTokenRenderer;

export type MarkdownProps = {
    /**
     * Markdown контент.
     */
    content?: string;
    /**
     * Кастомный renderer для token type из `marked`.
     */
    tokenRenderer?: MarkdownTokenRenderer;
    /**
     * Рендер незавершённого markdown-синтаксиса.
     */
    shouldParseIncompleteMarkdown?: boolean;
    /**
     * Настройки `marked`.
     */
    markedOptions?: MarkdownMarkedOptions;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'size'>;

export type MarkdownRootProps = Pick<MarkdownProps, 'view' | 'size'> &
    Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'size'>;

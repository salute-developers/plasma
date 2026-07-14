import type { HTMLAttributes, ReactNode } from 'react';
import type { Marked, MarkedExtension, Token } from 'marked';

export type MarkdownMarkedOptions = MarkedExtension;
export type MarkedEngine = Pick<Marked, 'defaults' | 'lexer' | 'Parser'>;
export type TokenRenderer = ((token: Token, children?: ReactNode) => ReactNode | undefined) | undefined;

export interface RenderContext {
    keyPrefix: string;
    inTightListItem?: boolean;
}

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * Markdown контент.
     */
    content?: string;
    /**
     * Кастомный renderer для token type из `marked`.
     */
    tokenRenderer?: TokenRenderer;
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
}

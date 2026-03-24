import type { Tokens } from 'marked';

import type { MarkedEngine, TokenRenderer } from '../Markdown.types';

import { TableRenderer } from './renderers';
import { renderInlineTokens } from './renderInlineTokens';
import { renderElement, resolveTokenNode } from './renderUtils';

export const renderTable = (
    markedEngine: MarkedEngine,
    tokenRenderer: TokenRenderer,
    token: Tokens.Table,
    key: string,
) => {
    const headerCells = token.header.map((cell, index) =>
        renderElement(
            `${key}-th-${index}`,
            'th',
            {
                style: {
                    textAlign: cell.align || undefined,
                },
            },
            renderInlineTokens(markedEngine, tokenRenderer, cell.tokens, `${key}-th-${index}-content`),
        ),
    );

    const bodyRows = token.rows.map((row, rowIndex) =>
        renderElement(
            `${key}-tr-${rowIndex}`,
            'tr',
            undefined,
            row.map((cell, cellIndex) =>
                renderElement(
                    `${key}-td-${rowIndex}-${cellIndex}`,
                    'td',
                    {
                        style: {
                            textAlign: cell.align || undefined,
                        },
                    },
                    renderInlineTokens(
                        markedEngine,
                        tokenRenderer,
                        cell.tokens,
                        `${key}-td-${rowIndex}-${cellIndex}-content`,
                    ),
                ),
            ),
        ),
    );

    const children = [
        renderElement(
            `${key}-thead`,
            'thead',
            undefined,
            renderElement(`${key}-thead-row`, 'tr', undefined, headerCells),
        ),
        renderElement(`${key}-tbody`, 'tbody', undefined, bodyRows),
    ];
    const defaultNode = renderElement(key, TableRenderer, undefined, children);

    return resolveTokenNode(tokenRenderer, token, defaultNode, children);
};

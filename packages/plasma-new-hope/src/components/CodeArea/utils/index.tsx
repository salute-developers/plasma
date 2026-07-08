import React from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { createElement as createSyntaxElement } from 'react-syntax-highlighter';

import { classes } from '../CodeArea.tokens';

type SyntaxRendererProps = Parameters<NonNullable<SyntaxHighlighterProps['renderer']>>[0];
type SyntaxRendererNode = SyntaxRendererProps['rows'][number];

const isLineNumberNode = (node?: SyntaxRendererNode) =>
    Array.isArray(node?.properties?.className) && node?.properties?.className.includes('linenumber');

export const renderCodeRows = ({ rows, stylesheet, useInlineStyles }: SyntaxRendererProps) =>
    rows.map((row, rowIndex) => {
        const children = row.children || [];
        const [firstChild, ...restChildren] = children;
        const hasLineNumber = isLineNumberNode(firstChild);
        const codeChildren = hasLineNumber ? restChildren : children;
        const lineClassName = hasLineNumber ? classes.line : `${classes.line} ${classes.lineWithoutNumber}`;

        return (
            <span key={`code-line-${rowIndex}`} className={lineClassName}>
                {hasLineNumber &&
                    createSyntaxElement({
                        node: firstChild,
                        stylesheet,
                        useInlineStyles,
                        key: `line-number-${rowIndex}`,
                    })}

                <span className={classes.lineContent}>
                    {codeChildren.map((node, nodeIndex) =>
                        createSyntaxElement({
                            node,
                            stylesheet,
                            useInlineStyles,
                            key: `line-${rowIndex}-segment-${nodeIndex}`,
                        }),
                    )}
                </span>
            </span>
        );
    });

import React, { forwardRef } from 'react';
import cls from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import type { RootProps } from 'src/engines';

import { renderCodeRows } from './utils';
import type { CodeAreaProps } from './CodeArea.types';
import { base, Code, Content, Field, Header, Overlay, syntaxTheme, Outer, Action } from './CodeArea.styles';
import { classes, tokens } from './CodeArea.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';

export const codeAreaRoot = (Root: RootProps<HTMLDivElement, Omit<CodeAreaProps, 'children'>>) =>
    forwardRef<HTMLDivElement, CodeAreaProps>(
        (
            {
                children,
                language = 'text',
                showLineNumbers = false,
                contentHeader,
                hasDivider = false,
                contentAction,
                contentOuter,
                style,
                view,
                size,
                ...rest
            },
            ref,
        ) => {
            const code = children ?? '';
            const lineCount = String(code).split('\n').length;
            const lineNumberWidth = `${String(lineCount).length}ch`;
            const rootStyle = {
                ...style,
                [tokens.lineNumberMinWidth]: lineNumberWidth,
            } as React.CSSProperties;

            return (
                <Root ref={ref} style={rootStyle} view={view} size={size} {...rest}>
                    {contentOuter && <Outer className={classes.contentOuter}>{contentOuter}</Outer>}

                    <Field>
                        <Overlay>
                            {contentHeader && (
                                <Header
                                    className={cls(
                                        classes.contentHeader,
                                        hasDivider ? classes.contentHeaderDivider : undefined,
                                    )}
                                >
                                    {contentHeader}
                                </Header>
                            )}

                            <Content>
                                <Code>
                                    <SyntaxHighlighter
                                        language={language}
                                        renderer={renderCodeRows}
                                        showLineNumbers={showLineNumbers}
                                        showInlineLineNumbers
                                        style={syntaxTheme as never}
                                        wrapLines
                                        wrapLongLines
                                    >
                                        {code}
                                    </SyntaxHighlighter>
                                </Code>

                                {contentAction && <Action className={classes.contentAction}>{contentAction}</Action>}
                            </Content>
                        </Overlay>
                    </Field>
                </Root>
            );
        },
    );

export const codeAreaConfig = {
    name: 'CodeArea',
    tag: 'div',
    layout: codeAreaRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};

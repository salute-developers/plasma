import * as React from 'react';
import type { AriaRole, ComponentProps, CSSProperties, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { CodeArea } from '@salutejs/plasma-b2c';

type CodeAreaProps = ComponentProps<typeof CodeArea>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<CodeAreaProps>().toHaveProperty('children').toEqualTypeOf<string | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('language').toEqualTypeOf<string | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('showLineNumbers').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('hasWrapper').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('contentOuter').toEqualTypeOf<ReactNode>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('contentHeader').toEqualTypeOf<ReactNode>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('contentAction').toEqualTypeOf<ReactNode>();
    });

    it('Variations', () => {
        type View = NonNullable<CodeAreaProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<CodeAreaProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<CodeAreaProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<CodeAreaProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<CodeAreaProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<CodeAreaProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<CodeAreaProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            return <CodeArea language="json">{'{"status":"ok"}'}</CodeArea>;
        };
    });

    it('With line numbers', () => {
        () => {
            return (
                <CodeArea language="javascript" showLineNumbers>
                    const status = true;
                </CodeArea>
            );
        };
    });

    it('With slots and wrapper', () => {
        () => {
            return (
                <CodeArea
                    contentAction={<button type="button">Copy</button>}
                    contentHeader={<div>Header</div>}
                    contentOuter={<div>Outer</div>}
                    hasWrapper
                    language="text"
                >
                    Text
                </CodeArea>
            );
        };
    });
});

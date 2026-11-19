import { component, mergeConfig, sheetConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Sheet = component(mergeConfig(sheetConfig as any, {}));

const SheetDefault = {
    name: 'Default',
    args: [
        {
            name: 'withOverlay',
            value: true,
        },
        {
            name: 'withBlur',
            value: false,
        },
        {
            name: 'withTransition',
            value: true,
        },
        {
            name: 'hasHandle',
            value: true,
        },
        {
            name: 'hasHeader',
            value: true,
        },
        {
            name: 'hasFooter',
            value: true,
        },
        {
            name: 'isHeaderFixed',
            value: false,
        },
        {
            name: 'isFooterFixed',
            value: false,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { hasHeader, hasFooter, ...rest } = args;
        const [opened, setOpened] = useState(false);

        return (
            <div style={{ minHeight: '24rem' }}>
                <Button text="Открыть" onClick={() => setOpened(true)} />
                <Sheet
                    {...rest}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    contentHeader={hasHeader ? <h4 style={{ margin: 0 }}>header</h4> : undefined}
                    contentFooter={hasFooter ? <p style={{ margin: 0 }}>footer</p> : undefined}
                >
                    <div style={{ padding: '1rem 1rem 8rem' }}>body</div>
                </Sheet>
            </div>
        );
    },
};

const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt ullam, dolorem labore quaerat vero maxime ab ipsa nihil.';

const frameArgs = SheetDefault.args.filter((arg) => arg.name !== 'withOverlay');

const SheetWithoutOverlay = {
    name: 'WithoutOverlay',
    args: [],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { ...rest } = args;
        const [opened, setOpened] = useState(true);

        return (
            <div style={{ minHeight: '24rem' }}>
                <Button text="Открыть" onClick={() => setOpened(true)} />
                <Sheet {...rest} opened={opened} withOverlay={false} onClose={() => setOpened(false)}>
                    <div style={{ padding: '1rem 1rem 8rem' }}>{lorem}</div>
                </Sheet>
            </div>
        );
    },
};

const renderScrollBody = (Button: any, setOpened: (v: boolean) => void, withInside: boolean, withText: boolean) => (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button text="Закрыть" onClick={() => setOpened(false)} />
        {withInside && (
            <>
                <p style={{ margin: 0 }}>Вложенные кнопки</p>
                <div
                    style={{
                        height: '150px',
                        overflowY: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {Array.from({ length: 8 }, (_, i) => (
                        <Button key={i} text={`Кнопка ${i + 1}`} />
                    ))}
                </div>
            </>
        )}
        {withText && (
            <>
                <p style={{ margin: 0 }}>{lorem}</p>
                <Button text="Закрыть" onClick={() => setOpened(false)} />
                <p style={{ margin: 0 }}>{lorem}</p>
            </>
        )}
    </div>
);

const makeScrollStory = (name: string, withInside: boolean, withText: boolean) => ({
    name,
    args: frameArgs,
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { hasHeader, hasFooter, ...rest } = args;
        const [opened, setOpened] = useState(false);

        return (
            <div style={{ minHeight: '24rem' }}>
                <Button text="Открыть" onClick={() => setOpened(true)} />
                <Sheet
                    {...rest}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    contentHeader={hasHeader ? <h4 style={{ margin: 0 }}>header</h4> : undefined}
                    contentFooter={hasFooter ? <p style={{ margin: 0 }}>footer</p> : undefined}
                >
                    {renderScrollBody(Button, setOpened, withInside, withText)}
                </Sheet>
            </div>
        );
    },
});

const SheetWithScroll = makeScrollStory('WithScroll', false, true);
const SheetWithInsideScroll = makeScrollStory('WithInsideScroll', true, false);
const SheetWithDoubleScroll = makeScrollStory('WithDoubleScroll', true, true);

export const SheetStories = [
    SheetDefault,
    SheetWithoutOverlay,
    SheetWithScroll,
    SheetWithInsideScroll,
    SheetWithDoubleScroll,
];

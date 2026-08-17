import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import {
    DsplL,
    DsplM,
    DsplS,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyL,
    BodyM,
    BodyS,
    BodyXS,
    BodyXXS,
    TextL,
    TextM,
    TextS,
    TextXS,
} from '.';

const meta: Meta = {
    title: 'Data Display/Typography',
    component: DsplL,
    argTypes: {
        ...disableProps(['size', 'bold', 'medium', 'as', 'forwardedAs', 'isNumeric']),
        color: {
            control: {
                type: 'color',
            },
        },
    },
    args: {
        noWrap: false,
        breakWord: true,
    },
    decorators: [InSpacingDecorator],
};

export default meta;

type Story = StoryObj;

type TypographStoryProps = {
    children?: string;
    noWrap?: boolean;
    breakWord?: boolean;
    color?: string;
};

export const Dspl: Story = {
    render: (props) => (
        <>
            <DsplL bold={false} {...props}>
                DsplL
            </DsplL>
            <DsplL {...props}>DsplL Bold</DsplL>
            <DsplL medium {...props}>
                DsplL Medium
            </DsplL>
            <DsplL bold={false} isNumeric {...props}>
                1234567890
            </DsplL>
            <DsplM bold={false} {...props}>
                DsplM
            </DsplM>
            <DsplM {...props}>DsplM Bold</DsplM>
            <DsplM medium {...props}>
                DsplM Medium
            </DsplM>
            <DsplM bold={false} isNumeric {...props}>
                1234567890
            </DsplM>
            <DsplS bold={false} {...props}>
                DsplS
            </DsplS>
            <DsplS {...props}>DsplS Bold</DsplS>
            <DsplS medium {...props}>
                DsplS Medium
            </DsplS>
            <DsplS bold={false} isNumeric {...props}>
                1234567890
            </DsplS>
        </>
    ),
};

export const H: Story = {
    render: (props) => (
        <>
            <H1 bold={false} {...props}>
                H1
            </H1>
            <H1 {...props}>H1 Bold</H1>
            <H1 medium {...props}>
                H1 Medium
            </H1>
            <H1 bold={false} isNumeric {...props}>
                1234567890
            </H1>
            <H2 bold={false} {...props}>
                H2
            </H2>
            <H2 {...props}>H2 Bold</H2>
            <H2 medium {...props}>
                H2 Medium
            </H2>
            <H2 bold={false} isNumeric {...props}>
                1234567890
            </H2>
            <H3 bold={false} {...props}>
                H3
            </H3>
            <H3 {...props}>H3 Bold</H3>
            <H3 medium {...props}>
                H3 Medium
            </H3>
            <H3 bold={false} isNumeric {...props}>
                1234567890
            </H3>
            <H4 bold={false} {...props}>
                H4
            </H4>
            <H4 {...props}>H4 Bold</H4>
            <H4 medium {...props}>
                H4 Medium
            </H4>
            <H4 bold={false} isNumeric {...props}>
                1234567890
            </H4>
            <H5 bold={false} {...props}>
                H5
            </H5>
            <H5 {...props}>H5 Bold</H5>
            <H5 medium {...props}>
                H5 Medium
            </H5>
            <H5 bold={false} isNumeric {...props}>
                1234567890
            </H5>
            <H6 bold={false} {...props}>
                H6
            </H6>
            <H6 {...props}>H6 Bold</H6>
            <H6 medium {...props}>
                H6 Medium
            </H6>
            <H6 bold={false} isNumeric {...props}>
                1234567890
            </H6>
        </>
    ),
};

export const Body: Story = {
    render: (props) => (
        <>
            <BodyL {...props}>BodyL</BodyL>
            <BodyL bold {...props}>
                BodyL Bold
            </BodyL>
            <BodyL medium {...props}>
                BodyL Medium
            </BodyL>
            <BodyL isNumeric {...props}>
                1234567890
            </BodyL>
            <BodyM {...props}>BodyM</BodyM>
            <BodyM bold {...props}>
                BodyM Bold
            </BodyM>
            <BodyM medium {...props}>
                BodyM Medium
            </BodyM>
            <BodyM isNumeric {...props}>
                1234567890
            </BodyM>
            <BodyS {...props}>BodyS</BodyS>
            <BodyS bold {...props}>
                BodyS Bold
            </BodyS>
            <BodyS medium {...props}>
                BodyS Medium
            </BodyS>
            <BodyS isNumeric {...props}>
                1234567890
            </BodyS>
            <BodyXS {...props}>BodyXS</BodyXS>
            <BodyXS bold {...props}>
                BodyXS Bold
            </BodyXS>
            <BodyXS medium {...props}>
                BodyXS Medium
            </BodyXS>
            <BodyXS isNumeric {...props}>
                1234567890
            </BodyXS>
            <BodyXXS {...props}>BodyXXS</BodyXXS>
            <BodyXXS bold {...props}>
                BodyXXS Bold
            </BodyXXS>
            <BodyXXS medium {...props}>
                BodyXXS Medium
            </BodyXXS>
            <BodyXXS isNumeric {...props}>
                1234567890
            </BodyXXS>
        </>
    ),
};

export const Text: Story = {
    args: {
        typograph: false,
    },
    render: (props) => (
        <>
            <TextL {...props}>TextL</TextL>
            <TextL bold {...props}>
                TextL Bold
            </TextL>
            <TextL medium {...props}>
                TextL Medium
            </TextL>
            <TextL isNumeric {...props}>
                1234567890
            </TextL>
            <TextM {...props}>TextM</TextM>
            <TextM bold {...props}>
                TextM Bold
            </TextM>
            <TextM medium {...props}>
                TextM Medium
            </TextM>
            <TextM isNumeric {...props}>
                1234567890
            </TextM>
            <TextS {...props}>TextS</TextS>
            <TextS bold {...props}>
                TextS Bold
            </TextS>
            <TextS medium {...props}>
                TextS Medium
            </TextS>
            <TextS isNumeric {...props}>
                1234567890
            </TextS>
            <TextXS {...props}>TextXS</TextXS>
            <TextXS bold {...props}>
                TextXS Bold
            </TextXS>
            <TextXS medium {...props}>
                TextXS Medium
            </TextXS>
            <TextXS isNumeric {...props}>
                1234567890
            </TextXS>
        </>
    ),
};

const typographCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    borderRadius: 16,
    background: 'var(--surface-solid-secondary)',
};

const typographCaptionStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
};

const TypographRuleCard = ({ title, hint, example }: { title: string; hint: string; example: string }) => (
    <div style={typographCardStyle}>
        <H6 bold={false}>{title}</H6>
        <BodyXS style={typographCaptionStyle}>{hint}</BodyXS>
        <TextS typograph style={{ maxWidth: 160 }}>
            {example}
        </TextS>
    </div>
);

export const Typograph: StoryObj<TypographStoryProps> = {
    args: {
        children: 'он сказал "привет" в лесу — и ушёл',
    },
    argTypes: {
        children: {
            control: { type: 'text' },
        },
    },
    render: ({ children, ...props }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 720 }}>
            <div>
                <H4>Дефолтные правила</H4>
                <BodyS style={typographCaptionStyle}>
                    При typograph=true к строке применяются три правила. Узкая колонка показывает, как ведут себя
                    переносы.
                </BodyS>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
                <TypographRuleCard
                    title="Кавычки"
                    hint={'"цитата" → «ёлочки» и „лапки“'}
                    example={'журнал "Вестник "Науки""'}
                />
                <TypographRuleCard
                    title="Предлоги"
                    hint="Слова из 1–2 букв не висят в конце строки"
                    example="в лесу стоял я у избушки"
                />
                <TypographRuleCard
                    title="Тире"
                    hint="Тире не уезжает на новую строку"
                    example="Наш ГигаЧат — помощник"
                />
            </div>

            <div>
                <H4>Песочница</H4>
                <BodyS style={{ ...typographCaptionStyle, marginBottom: 12 }}>
                    Слева исходная строка, справа — с typograph. Текст можно менять в Controls.
                </BodyS>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={typographCardStyle}>
                        <BodyXS style={typographCaptionStyle}>без typograph</BodyXS>
                        <TextM {...props} typograph={false} style={{ maxWidth: 200 }}>
                            {children}
                        </TextM>
                    </div>
                    <div style={typographCardStyle}>
                        <BodyXS style={typographCaptionStyle}>typograph=true</BodyXS>
                        <TextM {...props} typograph style={{ maxWidth: 200 }}>
                            {children}
                        </TextM>
                    </div>
                </div>
            </div>
        </div>
    ),
};

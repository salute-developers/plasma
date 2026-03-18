import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { DsplS, H1, H2, H3, H4, BodyL, BodyM, BodyS, BodyXS, BodyXXS } from '.';

const meta: Meta = {
    title: 'Data Display/Typography',
    component: DsplS,
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
        enableFontStyleItalic: false,
    },
    decorators: [InSpacingDecorator],
};

export default meta;

type Story = StoryObj;

export const Dspl: Story = {
    render: ({ enableFontStyleItalic, ...rest }) => (
        <>
            <DsplS isItalic={enableFontStyleItalic} bold={false} {...rest}>
                DsplS
            </DsplS>
            <DsplS isItalic={enableFontStyleItalic} medium {...rest}>
                DsplS Medium
            </DsplS>
            <DsplS isItalic={enableFontStyleItalic} {...rest}>
                DsplS Bold
            </DsplS>
            <DsplS isItalic={enableFontStyleItalic} extraBold {...rest}>
                DsplS Extra Bold
            </DsplS>
            <DsplS isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </DsplS>
        </>
    ),
};

export const H: Story = {
    render: ({ enableFontStyleItalic, ...rest }) => (
        <>
            <H1 isItalic={enableFontStyleItalic} bold={false} {...rest}>
                H1
            </H1>
            <H1 isItalic={enableFontStyleItalic} medium {...rest}>
                H1 Medium
            </H1>
            <H1 isItalic={enableFontStyleItalic} {...rest}>
                H1 Bold
            </H1>
            <H1 isItalic={enableFontStyleItalic} extraBold {...rest}>
                H1 Extra Bold
            </H1>
            <H1 isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </H1>
            <H2 isItalic={enableFontStyleItalic} bold={false} {...rest}>
                H2
            </H2>
            <H2 isItalic={enableFontStyleItalic} medium {...rest}>
                H2 Medium
            </H2>
            <H2 isItalic={enableFontStyleItalic} {...rest}>
                H2 Bold
            </H2>
            <H2 isItalic={enableFontStyleItalic} extraBold {...rest}>
                H2 Extra Bold
            </H2>
            <H2 isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </H2>
            <H3 isItalic={enableFontStyleItalic} bold={false} {...rest}>
                H3
            </H3>
            <H3 isItalic={enableFontStyleItalic} medium {...rest}>
                H3 Medium
            </H3>
            <H3 isItalic={enableFontStyleItalic} {...rest}>
                H3 Bold
            </H3>
            <H3 isItalic={enableFontStyleItalic} extraBold {...rest}>
                H3 Extra Bold
            </H3>
            <H3 isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </H3>
            <H4 isItalic={enableFontStyleItalic} bold={false} {...rest}>
                H4
            </H4>
            <H4 isItalic={enableFontStyleItalic} medium {...rest}>
                H4 Medium
            </H4>
            <H4 isItalic={enableFontStyleItalic} {...rest}>
                H4 Bold
            </H4>
            <H4 isItalic={enableFontStyleItalic} extraBold {...rest}>
                H4 Extra Bold
            </H4>
            <H4 isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </H4>
        </>
    ),
};

export const Body: Story = {
    render: ({ enableFontStyleItalic, ...rest }) => (
        <>
            <BodyL isItalic={enableFontStyleItalic} {...rest}>
                BodyL
            </BodyL>
            <BodyL isItalic={enableFontStyleItalic} medium {...rest}>
                BodyL Medium
            </BodyL>
            <BodyL isItalic={enableFontStyleItalic} bold {...rest}>
                BodyL Bold
            </BodyL>
            <BodyL isItalic={enableFontStyleItalic} extraBold {...rest}>
                BodyL Extra Bold
            </BodyL>
            <BodyL isItalic={enableFontStyleItalic} isNumeric {...rest}>
                1234567890
            </BodyL>
            <BodyM isItalic={enableFontStyleItalic} {...rest}>
                BodyM
            </BodyM>
            <BodyM isItalic={enableFontStyleItalic} medium {...rest}>
                BodyM Medium
            </BodyM>
            <BodyM isItalic={enableFontStyleItalic} bold {...rest}>
                BodyM Bold
            </BodyM>
            <BodyM isItalic={enableFontStyleItalic} extraBold bold {...rest}>
                BodyM Extra Bold
            </BodyM>
            <BodyM isItalic={enableFontStyleItalic} isNumeric {...rest}>
                1234567890
            </BodyM>
            <BodyS isItalic={enableFontStyleItalic} {...rest}>
                BodyS
            </BodyS>
            <BodyS isItalic={enableFontStyleItalic} medium {...rest}>
                BodyS Medium
            </BodyS>
            <BodyS isItalic={enableFontStyleItalic} bold {...rest}>
                BodyS Bold
            </BodyS>
            <BodyS isItalic={enableFontStyleItalic} extraBold {...rest}>
                BodyS Extra Bold
            </BodyS>
            <BodyS isItalic={enableFontStyleItalic} isNumeric {...rest}>
                1234567890
            </BodyS>
            <BodyXS isItalic={enableFontStyleItalic} {...rest}>
                BodyXS
            </BodyXS>
            <BodyXS isItalic={enableFontStyleItalic} medium {...rest}>
                BodyXS Medium
            </BodyXS>
            <BodyXS isItalic={enableFontStyleItalic} bold {...rest}>
                BodyXS Bold
            </BodyXS>
            <BodyXS isItalic={enableFontStyleItalic} extraBold {...rest}>
                BodyXS Extra Bold
            </BodyXS>
            <BodyXS isItalic={enableFontStyleItalic} isNumeric {...rest}>
                1234567890
            </BodyXS>
            <BodyXXS isItalic={enableFontStyleItalic} {...rest}>
                BodyXXS
            </BodyXXS>
            <BodyXXS isItalic={enableFontStyleItalic} medium {...rest}>
                BodyXXS Medium
            </BodyXXS>
            <BodyXXS isItalic={enableFontStyleItalic} bold {...rest}>
                BodyXXS Bold
            </BodyXXS>
            <BodyXXS isItalic={enableFontStyleItalic} extraBold {...rest}>
                BodyXXS Extra Bold
            </BodyXXS>
            <BodyXXS isItalic={enableFontStyleItalic} isNumeric {...rest}>
                1234567890
            </BodyXXS>
        </>
    ),
};

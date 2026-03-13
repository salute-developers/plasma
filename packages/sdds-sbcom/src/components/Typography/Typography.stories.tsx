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
            <DsplS isItalic={enableFontStyleItalic}>DsplS Extra Bold</DsplS>
            <DsplS isItalic={enableFontStyleItalic} bold={false} isNumeric {...rest}>
                1234567890
            </DsplS>
        </>
    ),
};

export const H: Story = {
    render: ({ enableFontStyleItalic, ...rest }) => (
        <>
            <H1 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} {...rest}>
                H1
            </H1>
            <H1 style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                H1 Bold
            </H1>
            <H1 style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                H1 Medium
            </H1>
            <H1 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} isNumeric {...rest}>
                1234567890
            </H1>
            <H2 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} {...rest}>
                H2
            </H2>
            <H2 style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                H2 Bold
            </H2>
            <H2 style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                H2 Medium
            </H2>
            <H2 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} isNumeric {...rest}>
                1234567890
            </H2>
            <H3 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} {...rest}>
                H3
            </H3>
            <H3 style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                H3 Bold
            </H3>
            <H3 style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                H3 Medium
            </H3>
            <H3 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} isNumeric {...rest}>
                1234567890
            </H3>
            <H4 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} {...rest}>
                H4
            </H4>
            <H4 style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                H4 Bold
            </H4>
            <H4 style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                H4 Medium
            </H4>
            <H4 style={enableFontStyleItalic && { 'font-style': 'italic' }} bold={false} isNumeric {...rest}>
                1234567890
            </H4>
        </>
    ),
};

export const Body: Story = {
    render: ({ enableFontStyleItalic, ...rest }) => (
        <>
            <BodyL style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                BodyL
            </BodyL>
            <BodyL style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                BodyL Medium
            </BodyL>
            <BodyL style={enableFontStyleItalic && { 'font-style': 'italic' }} bold {...rest}>
                BodyL Bold
            </BodyL>
            <BodyL style={enableFontStyleItalic && { 'font-style': 'italic' }} isNumeric {...rest}>
                1234567890
            </BodyL>
            <BodyM style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                BodyM
            </BodyM>
            <BodyM style={enableFontStyleItalic && { 'font-style': 'italic' }} bold {...rest}>
                BodyM Bold
            </BodyM>
            <BodyM style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                BodyM Medium
            </BodyM>
            <BodyM style={enableFontStyleItalic && { 'font-style': 'italic' }} isNumeric {...rest}>
                1234567890
            </BodyM>
            <BodyS style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                BodyS
            </BodyS>
            <BodyS style={enableFontStyleItalic && { 'font-style': 'italic' }} bold {...rest}>
                BodyS Bold
            </BodyS>
            <BodyS style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                BodyS Medium
            </BodyS>
            <BodyS style={enableFontStyleItalic && { 'font-style': 'italic' }} isNumeric {...rest}>
                1234567890
            </BodyS>
            <BodyXS style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                BodyXS
            </BodyXS>
            <BodyXS style={enableFontStyleItalic && { 'font-style': 'italic' }} bold {...rest}>
                BodyXS Bold
            </BodyXS>
            <BodyXS style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                BodyXS Medium
            </BodyXS>
            <BodyXS style={enableFontStyleItalic && { 'font-style': 'italic' }} isNumeric {...rest}>
                1234567890
            </BodyXS>
            <BodyXXS style={enableFontStyleItalic && { 'font-style': 'italic' }} {...rest}>
                BodyXXS
            </BodyXXS>
            <BodyXXS style={enableFontStyleItalic && { 'font-style': 'italic' }} bold {...rest}>
                BodyXXS Bold
            </BodyXXS>
            <BodyXXS style={enableFontStyleItalic && { 'font-style': 'italic' }} medium {...rest}>
                BodyXXS Medium
            </BodyXXS>
            <BodyXXS style={enableFontStyleItalic && { 'font-style': 'italic' }} isNumeric {...rest}>
                1234567890
            </BodyXXS>
        </>
    ),
};

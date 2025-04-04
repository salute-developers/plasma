import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { secondary } from '@salutejs/plasma-core';

import type { SpacingProps } from '../../mixins';

import {
    DsplL,
    DsplM,
    DsplS,
    H1,
    H2,
    H3,
    H4,
    H5,
    BodyL,
    BodyM,
    BodyS,
    BodyXS,
    BodyXXS,
    TextL,
    TextM,
    TextS,
    TextXS,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Subtitle,
    Headline5,
    Body1,
    P1,
    Footnote1,
    Footnote2,
    Button1,
    Button2,
    Caption,
    Underline,
} from '.';

const meta: Meta = {
    title: 'Data Display/Typography',
    component: DsplL,
    argTypes: {
        ...disableProps(['size']),
        color: {
            control: {
                type: 'color',
            },
        },
        bold: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'medium', truthy: false },
        },
        medium: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'bold', truthy: false },
        },
    },
    args: {
        noWrap: false,
        breakWord: true,
        bold: false,
        medium: false,
    },
    decorators: [InSpacingDecorator],
};

export default meta;

export const Dspl: StoryObj<SpacingProps> = {
    render: (props) => (
        <>
            <DsplL bold={false} {...props}>
                DsplL
            </DsplL>
            <DsplL {...props}>DsplL Bold</DsplL>
            <DsplM bold={false} {...props}>
                DsplM
            </DsplM>
            <DsplM {...props}>DsplM Bold</DsplM>
            <DsplS bold={false} {...props}>
                DsplS
            </DsplS>
            <DsplS {...props}>DsplS Bold</DsplS>
        </>
    ),
};

export const H: StoryObj<SpacingProps> = {
    render: (props) => (
        <>
            <H1 bold={false} {...props}>
                H1
            </H1>
            <H1 {...props}>H1 Bold</H1>
            <H2 bold={false} {...props}>
                H2
            </H2>
            <H2 {...props}>H2 Bold</H2>
            <H3 bold={false} {...props}>
                H3
            </H3>
            <H3 {...props}>H3 Bold</H3>
            <H4 bold={false} {...props}>
                H4
            </H4>
            <H4 {...props}>H4 Bold</H4>
            <H5 bold={false} {...props}>
                H5
            </H5>
            <H5 {...props}>H5 Bold</H5>
        </>
    ),
};

export const Body: StoryObj<SpacingProps> = {
    render: (props) => (
        <>
            <BodyL {...props}>BodyL</BodyL>
            <BodyL bold {...props}>
                BodyL Bold
            </BodyL>
            <BodyM {...props}>BodyM</BodyM>
            <BodyM bold {...props}>
                BodyM Bold
            </BodyM>
            <BodyS {...props}>BodyS</BodyS>
            <BodyS bold {...props}>
                BodyS Bold
            </BodyS>
            <BodyXS {...props}>BodyXS</BodyXS>
            <BodyXS bold {...props}>
                BodyXS Bold
            </BodyXS>
            <BodyXXS {...props}>BodyXXS</BodyXXS>
            <BodyXXS bold {...props}>
                BodyXXS Bold
            </BodyXXS>
        </>
    ),
};

export const Text: StoryObj<SpacingProps> = {
    render: (props) => (
        <>
            <TextL {...props}>TextL</TextL>
            <TextL bold {...props}>
                TextL Bold
            </TextL>
            <TextM {...props}>TextM</TextM>
            <TextM bold {...props}>
                TextM Bold
            </TextM>
            <TextS {...props}>TextS</TextS>
            <TextS bold {...props}>
                TextS Bold
            </TextS>
            <TextXS {...props}>TextXS</TextXS>
            <TextXS bold {...props}>
                TextXS Bold
            </TextXS>
        </>
    ),
};

const Section = styled.section`
    margin-bottom: 2.625rem;

    &:nth-child(n + 4) {
        margin-bottom: 1.375rem;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const Note = styled(Footnote1)`
    font-weight: normal;
    color: ${secondary};
`;

export const Old: StoryObj = {
    render: () => (
        <>
            <Section>
                <Headline1>Headline 1</Headline1>
                <Note>40/44 · Bold · LS 2</Note>
            </Section>
            <Section>
                <Headline2>Headline 2</Headline2>
                <Note>32/36 · Semibold · LS -1.1</Note>
            </Section>
            <Section>
                <Headline3>Headline 3</Headline3>
                <Note>24/28 · Semiblod · LS -2.2</Note>
            </Section>
            <Section>
                <Headline4>Headline 4</Headline4>
                <Note>20/24 · Semiblod · LS -2.5</Note>
            </Section>
            <Section>
                <Subtitle>Subtitle</Subtitle>
                <Note>20/24 · Regular · LS -2.2</Note>
            </Section>
            <Section>
                <Headline5>Headline 5</Headline5>
                <Note>16/20 · Semibold · LS -1.9</Note>
            </Section>

            <Section>
                <Body1>Body 1</Body1>
                <Note>16/20 · Regular · LS -1.9</Note>
            </Section>

            <Section>
                <P1>Paragraph Text 1</P1>
                <Note>16/24 · Regular · LS -1.9</Note>
            </Section>

            <Section>
                <Footnote1>Footnote 1</Footnote1>
                <Note>14/18 · Regular · LS -1.9</Note>
            </Section>
            <Section>
                <Footnote2>Footnote 2</Footnote2>
                <Note>14/18 · Semiblod · LS -1.9</Note>
            </Section>

            <Section>
                <Button1>Button 1</Button1>
                <Note>16/20 · Semiblod · LS 0</Note>
            </Section>
            <Section>
                <Button2>Button 2</Button2>
                <Note>24/28 · Semiblod · LS -2.2</Note>
            </Section>

            <Section>
                <Caption>Caption</Caption>
                <Note>12/16 · Regular · LS -2.2</Note>
            </Section>
            <Section>
                <Underline>Underline</Underline>
                <Note>10/12 · Medium · LS 1.25s</Note>
            </Section>
        </>
    ),
};

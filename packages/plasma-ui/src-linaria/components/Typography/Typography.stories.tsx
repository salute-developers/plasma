import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { secondary } from '@salutejs/plasma-core';

import { InSpacingDecorator, disableProps } from '../../../src/helpers';

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
    Body1,
    Body2,
    ParagraphText1,
    ParagraphText2,
    Footnote1,
    Footnote2,
    Button1,
    Button2,
    Caption,
    Underline,
} from '.';

const meta: Meta = {
    title: 'Linaria/Typography',
    component: DsplL,
    argTypes: {
        ...disableProps(['ref', 'theme', 'as', 'forwardedAs']),
    },
    decorators: [InSpacingDecorator],
};

export default meta;

export const Dspl: StoryObj<any> = {
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

export const H: StoryObj<any> = {
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

export const Body: StoryObj<any> = {
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

export const Text: StoryObj<any> = {
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

export const Legacy: StoryObj = {
    render: () => (
        <>
            <Section>
                <Headline1>Headline1</Headline1>
                <Note>32/36 · Bold · LS -1.1</Note>
            </Section>
            <Section>
                <Headline2>Headline2</Headline2>
                <Note>24/28 · Semiblod · LS -2.2</Note>
            </Section>
            <Section>
                <Headline3>Headline3</Headline3>
                <Note>20/24 · Semiblod · LS -2.5</Note>
            </Section>
            <Section>
                <Headline4>Headline4</Headline4>
                <Note>20/24 · Bold · LS -2.5</Note>
            </Section>

            <Section>
                <Body1>Body1</Body1>
                <Note>16/20 · Medium · LS -1.9</Note>
            </Section>
            <Section>
                <Body2>Body2</Body2>
                <Note>16/20 · Semiblod · LS -1.9</Note>
            </Section>

            <Section>
                <ParagraphText1>Paragraph Text 1</ParagraphText1>
                <Note>16/22 · Regular · LS -1.9</Note>
            </Section>
            <Section>
                <ParagraphText2>Paragraph Text 2</ParagraphText2>
                <Note>16/22 · Semiblod · LS -1.9</Note>
            </Section>

            <Section>
                <Footnote1>Footnote1</Footnote1>
                <Note>14/18 · Medium · LS -1.9</Note>
            </Section>
            <Section>
                <Footnote2>Footnote2</Footnote2>
                <Note>14/18 · Semiblod · LS -1.9</Note>
            </Section>

            <Section>
                <Button1>Button1</Button1>
                <Note>16/20 · Semiblod · LS 0</Note>
            </Section>
            <Section>
                <Button2>Button2</Button2>
                <Note>14/16 · Semiblod · LS 0</Note>
            </Section>

            <Section>
                <Caption>Caption</Caption>
                <Note>12/16 · Medium · LS -2.2</Note>
            </Section>
            <Section>
                <Underline>Underline</Underline>
                <Note>10/12 · Medium · LS 1.25</Note>
            </Section>
        </>
    ),
};

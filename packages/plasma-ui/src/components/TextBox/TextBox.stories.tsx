import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { accent, footnote1 } from '@salutejs/plasma-tokens';

import { Footnote1 } from '../Typography';
import { Container, Row, Col } from '../Grid';

import { TextBox, Title, BigTitle, SubTitle, Label, Caption } from './TextBox';
import type { TextPttrnProps } from './TextBox';

const meta: Meta<TextPttrnProps> = {
    title: 'Content/TextBox',
    component: TextBox,
};

export default meta;

export const Default: StoryObj<TextPttrnProps> = {
    args: {
        title: 'Title',
        subTitle: 'Subtitle',
    },
    render: (args) => <TextBox {...args} />,
};

const Variation = styled(Footnote1)`
    position: absolute;
    top: -1.5em;
    left: 0;

    color: ${accent};
`;

const Example = styled.div`
    position: relative;
    border: 1px dotted ${accent};

    font-size: ${footnote1.fontSize};
    padding: 1em;
    margin: 1.5em 0;
`;

export const Variations: StoryObj<TextPttrnProps> = {
    render: () => {
        const titleText = 'Title';
        const subTitleText = 'SubTitle';
        const labelText = 'Label';
        const captionText = 'Caption';
        const bigTitleText = 'BigTitle';

        return (
            <Container>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Title+Subtitle</Variation>
                            <TextBox>
                                <Title>{titleText}</Title>
                                <SubTitle>{subTitleText}</SubTitle>
                            </TextBox>
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Title+Subtitle+Caption</Variation>
                            <TextBox>
                                <Title>{titleText}</Title>
                                <SubTitle>{subTitleText}</SubTitle>
                                <Caption>{captionText}</Caption>
                            </TextBox>
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Label+Title</Variation>
                            <TextBox label={labelText} title={titleText} />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Label+BigTitle</Variation>
                            <TextBox>
                                <Label>{labelText}</Label>
                                <BigTitle>{bigTitleText}</BigTitle>
                            </TextBox>
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Caption+Title</Variation>
                            <TextBox>
                                <Caption>{captionText}</Caption>
                                <Title>{titleText}</Title>
                            </TextBox>
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>BigTitle+Subtitle</Variation>
                            <TextBox size="l" title={bigTitleText} subTitle={subTitleText} />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={3}>
                        <Example>
                            <Variation>Label+Title+Subtitle</Variation>
                            <TextBox label={labelText} title={titleText} subTitle={subTitleText} />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

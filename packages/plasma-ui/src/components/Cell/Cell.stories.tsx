import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { accent, footnote1 } from '@salutejs/plasma-tokens';

import { Footnote1, Headline1 } from '../Typography';
import { StoryCustomAssembly as Stepper } from '../Stepper/Stepper.stories';
import { Container, Row, Col } from '../Grid';
import { TextBox, TextBoxTitle, TextBoxSubTitle, TextBoxLabel, TextBoxCaption } from '../TextBox';
import type { TextPttrnProps } from '../TextBox';

import { Cell, CellIcon } from './Cell';
import type { CellProps, CellSize } from './Cell';
import { Disclosure } from './CellDisclosure';
import { CellListItem as ListItem } from './CellListItem';

const meta: Meta<CellProps> = {
    title: 'Content/Cell',
    component: Cell,
};

export default meta;

type IconSizeProps = {
    size: CellSize;
    title: string;
    subTitle: string;
};

const Example = styled.div`
    position: relative;
    border: 1px dotted ${({ color }) => color || accent};

    font-size: ${footnote1.fontSize};

    margin: 1.5em 0;
`;

export const Default: StoryObj<TextPttrnProps> = {
    args: {
        title: 'Hello World of Plasma',
        subTitle: 'Use with wisdom',
    },
    render: ({ title, subTitle }) => {
        return (
            <Container>
                <Row>
                    <Col size={4}>
                        <Example>
                            <Cell
                                contentLeft={<CellIcon as="img" src="./images/avocado.png" alt="avocado" />}
                                content={<TextBox title={title} subTitle={subTitle} />}
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

const Variation = styled(Footnote1)`
    position: absolute;
    top: -1.5em;
    left: 0;

    color: ${accent};
`;

export const IconSize: StoryObj<IconSizeProps> = {
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'] as Array<CellSize>,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        ...Default.args,
        size: 'm',
    },
    render: ({ size, title, subTitle }) => {
        return (
            <Container>
                <Row>
                    <Col size={4}>
                        <Example>
                            <Variation>{`CellIcon Size:${size}`}</Variation>
                            <Cell
                                contentLeft={<CellIcon size={size} as="img" src="./images/avocado.png" alt="avocado" />}
                                content={
                                    <TextBox>
                                        <TextBoxTitle>{title}</TextBoxTitle>
                                        <TextBoxSubTitle>{subTitle}</TextBoxSubTitle>
                                    </TextBox>
                                }
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

export const Content: StoryObj<{ size: CellSize }> = {
    argTypes: {
        ...IconSize.argTypes,
    },
    args: {
        size: 'm',
    },
    render: ({ size }) => {
        const left = <CellIcon size={size} as="img" src="./images/avocado.png" alt="avocado" />;
        const right = <TextBox title="Details" />;

        return (
            <Container>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Content: Title + SubTitle</Variation>
                            <Cell
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                                        <TextBoxSubTitle>+7 (495) 500-55-50</TextBoxSubTitle>
                                    </TextBox>
                                }
                                contentRight={right}
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Content: Header</Variation>
                            <Cell
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <Headline1>Very much</Headline1>
                                    </TextBox>
                                }
                                contentRight={right}
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

export const Right: StoryObj<IconSizeProps> = {
    argTypes: {
        ...IconSize.argTypes,
    },
    args: {
        title: 'Details',
        subTitle: 'info',
        size: 'm',
    },
    render: ({ size, title, subTitle }) => {
        const left = <CellIcon size={size} as="img" src="./images/avocado.png" alt="avocado" />;
        const content = (
            <TextBox>
                <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                <TextBoxSubTitle>Use with wisdom</TextBoxSubTitle>
            </TextBox>
        );

        return (
            <Container>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Right: Title</Variation>
                            <Cell contentLeft={left} content={content} contentRight={<TextBox title={title} />} />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Right: Title + SubTitle</Variation>
                            <Cell
                                contentLeft={left}
                                content={content}
                                contentRight={<TextBox title={title} subTitle={subTitle} />}
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Right: Title + SubTitle + Icon</Variation>
                            <Cell
                                contentLeft={left}
                                content={content}
                                contentRight={
                                    <>
                                        <TextBox title={title} subTitle={subTitle} />
                                        <CellIcon size="s" as="img" src="./images/avocado.png" alt="avocado" />
                                    </>
                                }
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Right: Stepper</Variation>
                            <Cell
                                contentLeft={left}
                                content={content}
                                contentRight={
                                    <Stepper step={1} min={1} max={10} disabled={false} showWarning={false} />
                                }
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

export const Align: StoryObj<CellProps & IconSizeProps> = {
    argTypes: {
        ...IconSize.argTypes,
        alignLeft: {
            options: ['top', 'center', 'bottom'],
            control: {
                type: 'inline-radio',
            },
        },
        alignRight: {
            options: ['top', 'center'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        ...Right.args,
        alignLeft: 'center',
        alignRight: 'center',
    },
    render: ({ alignLeft, alignRight, size, title, subTitle }) => {
        const left = <CellIcon size={size} as="img" src="./images/avocado.png" alt="avocado" />;
        const content = (
            <TextBox>
                <TextBoxLabel>Label</TextBoxLabel>
                <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                <TextBoxSubTitle>Use with wisdom</TextBoxSubTitle>
                <TextBoxCaption color={accent}>Скидка 42%</TextBoxCaption>
            </TextBox>
        );

        return (
            <Container>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Align: Title</Variation>
                            <Cell
                                alignLeft={alignLeft}
                                alignRight={alignRight}
                                contentLeft={left}
                                content={content}
                                contentRight={<TextBox title={title} />}
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Align: Title + SubTitle</Variation>
                            <Cell
                                alignLeft={alignLeft}
                                alignRight={alignRight}
                                contentLeft={left}
                                content={content}
                                contentRight={<TextBox title={title} subTitle={subTitle} />}
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>Align: Title + SubTitle + Icon</Variation>
                            <Cell
                                alignLeft={alignLeft}
                                alignRight={alignRight}
                                contentLeft={left}
                                content={content}
                                contentRight={
                                    <TextBox>
                                        <CellIcon size="xs" as="img" src="./images/avocado.png" alt="avocado" />
                                        <TextBoxTitle>{title}</TextBoxTitle>
                                        <TextBoxSubTitle>{subTitle}</TextBoxSubTitle>
                                    </TextBox>
                                }
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

export const CellListItem: StoryObj<CellProps & IconSizeProps> = {
    argTypes: {
        ...IconSize.argTypes,
    },
    args: {
        size: 'm',
        outlined: true,
    },
    render: ({ size, outlined }) => {
        const left = <CellIcon size={size} as="img" src="./images/avocado.png" alt="avocado" />;

        return (
            <Container>
                <Row>
                    <Col size={6}>
                        <Example color="rgba(0,0,0,0)">
                            <Variation>With Disclosure</Variation>
                            <ListItem
                                onClick={action('onClick')}
                                outlined={outlined}
                                tabIndex={0}
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                                        <TextBoxSubTitle>+7 (495) 500-55-50</TextBoxSubTitle>
                                    </TextBox>
                                }
                                contentRight={<Disclosure tabIndex={-1} />}
                            />
                            <ListItem
                                onClick={action('onClick')}
                                outlined={outlined}
                                tabIndex={0}
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                                        <TextBoxSubTitle>+7 (495) 500-55-50</TextBoxSubTitle>
                                    </TextBox>
                                }
                                contentRight={<Disclosure tabIndex={-1} />}
                            />
                            <ListItem
                                onClick={action('onClick')}
                                outlined={outlined}
                                tabIndex={0}
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <TextBoxTitle>Hello World of Plasma</TextBoxTitle>
                                        <TextBoxSubTitle>+7 (495) 500-55-50</TextBoxSubTitle>
                                    </TextBox>
                                }
                                contentRight={<Disclosure tabIndex={-1} />}
                            />
                        </Example>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <Example>
                            <Variation>With Disclosure + Title</Variation>
                            <ListItem
                                onClick={action('onClick')}
                                outlined={outlined}
                                tabIndex={0}
                                contentLeft={left}
                                content={
                                    <TextBox>
                                        <Headline1>Very much</Headline1>
                                    </TextBox>
                                }
                                contentRight={
                                    <>
                                        <TextBox title="Details" />
                                        <Disclosure tabIndex={-1} />
                                    </>
                                }
                            />
                        </Example>
                    </Col>
                </Row>
            </Container>
        );
    },
};

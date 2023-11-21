import React, { useMemo } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacingDecorator, IconPlaceholder } from '../../helpers';
import { Button } from '../Button';
import { Cell, CellIcon, CellListItem, CellDisclosure } from '../Cell';
import { TextBox, TextBoxTitle, TextBoxSubTitle, TextBoxBiggerTitle, TextBoxBigTitle } from '../TextBox';

import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardContent } from './CardContent';
import { CardMedia } from './CardMedia';

import type { CardProps } from '.';
import { CardParagraph1 } from '.';

const meta: Meta<CardProps> = {
    title: 'Content/Card',
    decorators: [InSpacingDecorator],
    parameters: {
        performance: {
            disable: false,
        },
    },
};

export default meta;

const longText = `Канадский актёр, кинопродюсер, и музыкант. Наиболее известен своими ролями в киносериях «Матрица» и
«Джон Уик», а также в фильмах «На гребне волны», «Мой личный штат Айдахо», «Дракула», «Скорость»,
«Джонни-мнемоник», «Адвокат дьявола», «Константин: Повелитель тьмы» и «Короли улиц».`;

type BasicValueProps = CardProps & {
    cover: boolean;
    coverGradient: boolean;
    subTitle: string;
    title: string;
    description: string;
};

type BasicPropsDefault = {
    cover: boolean;
    title: string;
    footer1: string;
    footer2: string;
    description: string;
};

type ListCardProps = {
    title: string;
    subtitle: string;
};

type ListAndHeaderProps = {
    listItems: number;
    header: string;
    details: string;
    title: string;
    subtitle: string;
};

type FastAnswerProps = {
    header: string;
    details: string;
    value: string;
    description: string;
};

const basicCardStyle = { width: '22.5rem' };

const basicButtonStyle = { marginTop: '1em' };

export const BasicValue: StoryObj<BasicValueProps> = {
    args: {
        cover: false,
        coverGradient: true,
        outlined: true,
        scaleOnFocus: true,
        subTitle: 'Потребительский кредит',
        title: 'до 230 000 ₽',
        description: 'На 18 месяцев, ставка 13,9%',
    },
    render: ({ outlined, coverGradient, scaleOnFocus, cover, subTitle, title, description }) => {
        return (
            <Card style={basicCardStyle} tabIndex={0} outlined={outlined} scaleOnFocus={scaleOnFocus}>
                <CardBody>
                    <CardMedia
                        src="./images/320_320_0.jpg"
                        placeholder="./images/320_320_1.jpg"
                        ratio={cover ? '1 / 1' : '16 / 9'}
                    />
                    <CardContent cover={cover as true} coverGradient={cover && coverGradient}>
                        <TextBox>
                            <TextBoxBigTitle>{subTitle}</TextBoxBigTitle>
                            <TextBoxBiggerTitle>{title}</TextBoxBiggerTitle>
                            <TextBoxSubTitle>{description}</TextBoxSubTitle>
                        </TextBox>
                        <Button
                            text="Label"
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            stretch
                            style={basicButtonStyle}
                            tabIndex={-1}
                        />
                    </CardContent>
                </CardBody>
            </Card>
        );
    },
};

const defaultCardStyle = { width: '20rem' };

const defaultParagraphStyle = { marginTop: '0.75rem' };

export const BasicDefault: StoryObj<BasicPropsDefault> = {
    args: {
        cover: false,
        title: 'Киану Ривз',
        footer1: 'Актёр',
        footer2: 'ru.wikipedia.org',
        description: longText,
    },
    render: ({ cover, title, footer1, footer2, description }) => {
        return (
            <Card style={defaultCardStyle}>
                <CardBody>
                    <CardMedia
                        src="./images/320_320_2.jpg"
                        placeholder="./images/320_320_3.jpg"
                        ratio={cover ? '1 / 1' : '16 / 9'}
                    />
                    <CardContent cover={cover}>
                        <TextBox>
                            <TextBoxBigTitle>{title}</TextBoxBigTitle>
                            <TextBoxSubTitle>{footer1}</TextBoxSubTitle>
                            <CardParagraph1 style={defaultParagraphStyle} lines={4}>
                                {description}
                            </CardParagraph1>
                            <TextBoxSubTitle>{footer2}</TextBoxSubTitle>
                        </TextBox>
                    </CardContent>
                </CardBody>
            </Card>
        );
    },
};

const listCardStyle = { width: '20rem' };

const StoryListCard = ({ title, subtitle }: ListCardProps) => {
    const [contentLeft, content, contentRight] = useMemo(
        () => [
            <CellIcon>
                <IconPlaceholder size={2.25} />
            </CellIcon>,
            <TextBox>
                <TextBoxTitle>{title}</TextBoxTitle>
                <TextBoxSubTitle>{subtitle}</TextBoxSubTitle>
            </TextBox>,
            <CellDisclosure />,
        ],
        [title, subtitle],
    );

    return (
        <Card style={listCardStyle}>
            <CardContent compact>
                <Cell contentLeft={contentLeft} content={content} contentRight={contentRight} />
            </CardContent>
        </Card>
    );
};

export const ListCard: StoryObj<ListCardProps> = {
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
    },
    render: (args) => <StoryListCard {...args} />,
};

const listAndHeaderCardStyle = { width: '20rem' };

const StoryListAndHeader = ({ listItems, header, details, title, subtitle }: ListAndHeaderProps) => {
    const cellList = useMemo(() => {
        const items = Array(listItems).fill(0);
        return items.map((_, i) => (
            <CellListItem
                key={`item:${i}`}
                contentLeft={
                    <CellIcon>
                        <IconPlaceholder size={2.25} />
                    </CellIcon>
                }
                content={
                    <TextBox>
                        <TextBoxTitle>{title}</TextBoxTitle>
                        <TextBoxSubTitle>{subtitle}</TextBoxSubTitle>
                    </TextBox>
                }
                contentRight={<CellDisclosure />}
            />
        ));
    }, [listItems, title, subtitle]);

    const cell = useMemo(
        () => (
            <Cell
                content={<TextBoxBigTitle>{header}</TextBoxBigTitle>}
                contentRight={<span style={{ marginTop: 5 }}>{details}</span>}
            />
        ),
        [header, details],
    );

    return (
        <Card style={listAndHeaderCardStyle}>
            <CardContent compact>
                {cell}
                {cellList}
            </CardContent>
        </Card>
    );
};

export const ListAndHeader: StoryObj<ListAndHeaderProps> = {
    args: {
        listItems: 3,
        header: 'Название раздела',
        details: 'Detail',
        title: 'Title',
        subtitle: 'Subtitle',
    },
    render: (args) => <StoryListAndHeader {...args} />,
};

const fastAnswerCardStyle = { width: '20rem' };

const StoryFastAnswer = ({ header, details, value, description }: FastAnswerProps) => {
    const cardContent = useMemo(
        () => (
            <CardContent compact>
                <Cell
                    content={<TextBoxBigTitle>{header}</TextBoxBigTitle>}
                    contentRight={<span style={{ marginTop: 5 }}>{details}</span>}
                />
                <Cell
                    contentLeft={
                        <CellIcon>
                            <IconPlaceholder size={2.25} />
                        </CellIcon>
                    }
                    content={<TextBoxBiggerTitle>{value}</TextBoxBiggerTitle>}
                    contentRight={
                        <CellIcon>
                            <IconPlaceholder style={{ marginTop: '0.375rem' }} size={1.5} />
                        </CellIcon>
                    }
                    alignRight="center"
                />
                <TextBoxSubTitle>{description}</TextBoxSubTitle>
            </CardContent>
        ),
        [header, details, value, description],
    );

    return <Card style={fastAnswerCardStyle}>{cardContent}</Card>;
};

export const FastAnswer: StoryObj<FastAnswerProps> = {
    args: {
        header: 'Название раздела',
        details: 'Detail',
        value: 'Value',
        description: 'Description',
    },
    render: (args) => <StoryFastAnswer {...args} />,
};

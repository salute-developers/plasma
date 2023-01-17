import React from 'react';

import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardContent } from './CardContent';
import { CardMedia } from './CardMedia';

import { CardParagraph1 } from '.';

const longText = `Канадский актёр, кинопродюсер, и музыкант. Наиболее известен своими ролями в киносериях «Матрица» и
«Джон Уик», а также в фильмах «На гребне волны», «Мой личный штат Айдахо», «Дракула», «Скорость»,
«Джонни-мнемоник», «Адвокат дьявола», «Константин: Повелитель тьмы» и «Короли улиц».`;

const basicCardStyle = { width: '22.5rem' };

const basicValueProps = {
    cover: false,
    coverGradient: true,
    outlined: true,
    scaleOnFocus: true,
    subTitle: 'Потребительский кредит',
    title: 'до 230 000 ₽',
    description: 'На 18 месяцев, ставка 13,9%',
};

export const BasicValue = () => {
    const { outlined, coverGradient, scaleOnFocus, cover, subTitle, title, description } = basicValueProps;

    return (
        <Card style={basicCardStyle} tabIndex={0} outlined={outlined} scaleOnFocus={scaleOnFocus}>
            <CardBody>
                <CardMedia
                    src="./images/320_320_0.jpg"
                    placeholder="./images/320_320_1.jpg"
                    ratio={cover ? '1 / 1' : '16 / 9'}
                />
                <CardContent cover={cover as true} coverGradient={cover && coverGradient}>
                    {subTitle}
                    {title}
                    {description}
                </CardContent>
            </CardBody>
        </Card>
    );
};

const defaultCardStyle = { width: '20rem' };
const defaultParagraphStyle = { marginTop: '0.75rem' };

const basicDefaultProps = {
    cover: false,
    title: 'Киану Ривз',
    footer1: 'Актёр',
    footer2: 'ru.wikipedia.org',
    description: longText,
};

export const BasicDefault = () => {
    const { cover, title, footer1, footer2, description } = basicDefaultProps;

    return (
        <Card style={defaultCardStyle}>
            <CardBody>
                <CardMedia
                    src="./images/320_320_2.jpg"
                    placeholder="./images/320_320_3.jpg"
                    ratio={cover ? '1 / 1' : '16 / 9'}
                />
                <CardContent cover={cover}>
                    {title}
                    {footer1}
                    <CardParagraph1 style={defaultParagraphStyle} lines={4}>
                        {description}
                    </CardParagraph1>
                    {footer2}
                </CardContent>
            </CardBody>
        </Card>
    );
};

const listCardStyle = { width: '20rem' };

const listCardProps = {
    title: 'Title',
    subtitle: 'Subtitle',
};

export const ListCard = () => {
    const { title, subtitle } = listCardProps;

    return (
        <Card style={listCardStyle}>
            <CardContent compact>
                {title}
                {subtitle}
            </CardContent>
        </Card>
    );
};

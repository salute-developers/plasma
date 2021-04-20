import React from 'react';
import { ParagraphText1, TextBox } from '@salutejs/plasma-ui';
import { BiggerTitle } from '@salutejs/plasma-ui/components/TextBox/TextBox';

import { ProductTitleProps } from './types';

export const ProductTitleSberBox: React.FC<ProductTitleProps> = ({ title, subtitle }) => (
    <TextBox>
        <BiggerTitle>{title}</BiggerTitle>
        <ParagraphText1>{subtitle}</ParagraphText1>
    </TextBox>
);

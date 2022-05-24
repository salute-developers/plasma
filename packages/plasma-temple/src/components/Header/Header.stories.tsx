import React from 'react';
import { action } from '@storybook/addon-actions';

import { Header } from './Header';

export default {
    title: 'Header',
};

export const Default = () => {
    return <Header logo="./images/320_320_2.jpg" title="Hello" subTitle="plasma-temple" />;
};

export const WithOneScreenInHistory = () => {
    return <Header logo="./images/320_320_2.jpg" title="Hello" subTitle="plasma-temple" />;
};

export const IfSetOldPropsWithBack = () => {
    return (
        <Header
            logo="./images/320_320_2.jpg"
            title="Hello"
            subTitle="plasma-temple"
            back
            onBackClick={action('back click')}
        />
    );
};

export const IfSetOldPropsWithMinimizeAndLowerCaseSubTitle = () => {
    return (
        <Header
            logo="./images/320_320_2.jpg"
            title="Hello"
            subtitle="plasma-temple"
            minimize
            onMinimizeClick={action('minimize click')}
        />
    );
};

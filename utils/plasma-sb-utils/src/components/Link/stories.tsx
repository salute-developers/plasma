import React from 'react';

export const createDefaultStory = (Link: any) => {
    return ({ text, ...rest }: any) => (
        <p>
            Скачайте{' '}
            <Link target="_blank" {...rest}>
                {text}
            </Link>
            .
        </p>
    );
};

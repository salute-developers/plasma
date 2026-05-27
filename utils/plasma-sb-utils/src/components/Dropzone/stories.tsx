import React from 'react';
import { action } from 'storybook/actions';

const onDragEnter = action('onDragEnter');
const onDragLeave = action('onDragLeave');
const onDrop = action('onDrop');
const onChange = action('onChange');
const onChoseFiles = action('onChoseFiles');

export const createDefaultStory = (Dropzone: any) => {
    return ({ ...rest }: any) => (
        <Dropzone
            {...rest}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onChange={onChange}
            onChoseFiles={onChoseFiles}
        />
    );
};

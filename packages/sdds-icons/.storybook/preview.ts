import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        options: {
            storySort: {
                order: [
                    'Navigation & Movement',
                    ['16', '24', '36'],
                    'Actions & Feedback',
                    ['16', '24', '36'],
                    'People & Communication',
                    ['16', '24', '36'],
                    'Commerce & Finance',
                    ['16', '24', '36'],
                    'Files & Data',
                    ['16', '24', '36'],
                    'Devices & Tech',
                    ['16', '24', '36'],
                    'Media & Brand',
                    ['16', '24', '36'],
                    'World & Lifestyle',
                    ['16', '24', '36'],
                    'Others',
                    ['16', '24', '36'],
                ],
            },
        },
    },
};

export default preview;

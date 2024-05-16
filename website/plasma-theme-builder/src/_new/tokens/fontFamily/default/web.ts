import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { WebFontFamilyToken } from '../types';

export const getWebTokens = (config: ThemeConfig): WebFontFamilyToken => ({
    display: {
        name: 'SB Sans Display',
        fonts: [
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Thin.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Thin.woff') format('woff')",
                ],
                fontWeight: '100',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Bold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Bold.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Regular.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Regular.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Semibold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Semibold.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Medium.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Medium.woff') format('woff')",
                ],
                fontWeight: '500',
                fontStyle: 'normal',
            },
        ],
    },
    header: {
        name: 'SB Sans Display',
        fonts: [
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Thin.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Thin.woff') format('woff')",
                ],
                fontWeight: '100',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Bold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Bold.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Regular.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Regular.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Semibold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Semibold.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Medium.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansDisplay.0.2.0/SBSansDisplay-Medium.woff') format('woff')",
                ],
                fontWeight: '500',
                fontStyle: 'normal',
            },
        ],
    },
    text: {
        name: 'SB Sans Text',
        fonts: [
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Light.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Light.woff') format('woff')",
                ],
                fontWeight: '300',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Italic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Italic.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-SemiboldItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-SemiboldItalic.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Thin.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Thin.woff') format('woff')",
                ],
                fontWeight: '100',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Regular.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Regular.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Semibold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Semibold.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-LightItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-LightItalic.woff') format('woff')",
                ],
                fontWeight: '300',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Bold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Bold.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-BoldItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-BoldItalic.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Medium.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Medium.woff') format('woff')",
                ],
                fontWeight: '500',
                fontStyle: 'normal',
            },
        ],
    },
    body: {
        name: 'SB Sans Text',
        fonts: [
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Light.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Light.woff') format('woff')",
                ],
                fontWeight: '300',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Italic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Italic.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-SemiboldItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-SemiboldItalic.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Thin.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Thin.woff') format('woff')",
                ],
                fontWeight: '100',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Regular.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Regular.woff') format('woff')",
                ],
                fontWeight: '400',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Semibold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Semibold.woff') format('woff')",
                ],
                fontWeight: '600',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-LightItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-LightItalic.woff') format('woff')",
                ],
                fontWeight: '300',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Bold.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Bold.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'normal',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-BoldItalic.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-BoldItalic.woff') format('woff')",
                ],
                fontWeight: '700',
                fontStyle: 'italic',
            },
            {
                src: [
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Medium.woff2') format('woff2')",
                    "url('https://cdn-app.sberdevices.ru/shared-static/0.0.0/fonts/SBSansText.0.2.0/SBSansText-Medium.woff') format('woff')",
                ],
                fontWeight: '500',
                fontStyle: 'normal',
            },
        ],
    },
});

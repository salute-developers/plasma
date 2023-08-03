import StyleDictionaryPackage, { Format, Transform, Config } from 'style-dictionary';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';
import path from 'path';
import glob from 'fast-glob';

import {
    colorIosSwiftCustomFormatter,
    colorKotlinCustomFormatter,
    colorReactNativeCustomFormatter,
    colorXMLCustomFormatter,
    typoReactNativeCustomFormatter,
    typoKotlinCustomFormatter,
    typoIosSwiftCustomFormatter,
    gradientSwiftTransformer,
    gradientKotlinTransformer,
    gradientReactNativeTransformer,
    gradientXMLTransformer,
    shadowReactNativeCustomFormatter,
    borderRadiusReactNativeCustomFormatter,
} from './src/generator';

const getStyleDictionaryColorConfig = (brand: string, filesPath: string): Config => ({
    source: [path.join(filesPath, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/composeColor', 'color/gradientKotlin'],
            buildPath: 'build/',
            files: [
                {
                    format: 'kotlin/custom/color',
                    destination: `color/color_${brand}_kotlin.kt`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/hex8', 'color/gradientReactNative'],
            buildPath: 'build/',
            files: [
                {
                    format: 'react-native/custom/color',
                    destination: `color/color_${brand}_react-native.ts`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'ios-swift': {
            transforms: [
                'attribute/cti',
                'name/ti/camel',
                'color/UIColorSwift',
                'content/swift/literal',
                'asset/swift/literal',
                'size/swift/remToCGFloat',
                'font/swift/literal',
                'color/gradientSwift',
            ],
            buildPath: 'build/',
            files: [
                {
                    format: 'ios-swift/custom/color',
                    destination: `color/color_${brand}_ios-swift.swift`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        xml: {
            transforms: ['attribute/cti', 'name/cti/snake', 'color/hex8android', 'color/gradientXML'],
            buildPath: 'build/',
            files: [
                {
                    format: 'xml/custom/color',
                    destination: `color/color_${brand}_xml.xml`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
    },
});

const getStyleDictionaryTypoConfig = (brand: string, filesPath: string): Config => ({
    source: [path.join(filesPath, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'kotlin/custom/typo',
                    destination: `typo/typo_${brand}_kotlin.kt`,
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'react-native/custom/typo',
                    destination: `typo/typo_${brand}_react-native.ts`,
                },
            ],
        },
        'ios-swift': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'ios-swift/custom/typo',
                    destination: `typo/typo_${brand}_ios-swift.swift`,
                },
            ],
        },
    },
});

const getStyleDictionaryShadowConfig = (brand: string, filesPath: string): Config => ({
    source: [path.join(filesPath, `${brand}.json`)],
    platforms: {
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'react-native/custom/shadow',
                    destination: `shadow/shadow_${brand}_react-native.ts`,
                },
            ],
        },
    },
});

const getStyleDictionaryBorderRadiusConfig = (brand: string, filesPath: string): Config => ({
    source: [path.join(filesPath, `${brand}.json`)],
    platforms: {
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel'],
            buildPath: 'build/',
            files: [
                {
                    format: 'react-native/custom/borderRadius',
                    destination: `borderRadius/borderRadius_${brand}_react-native.ts`,
                },
            ],
        },
    },
});

const getFilesName = (fullPath: string) =>
    glob.sync(path.join(fullPath, '*')).map((filePath) => path.parse(filePath).name);

interface StyleType {
    path: string;
    platforms: string[];
    config: (brand: string, filesPath: string) => Config;
    formatters: Array<Format & { name: string }>;
    transformers?: Array<Transform & { name: string }>;
}

type StyleTypes = Record<string, StyleType>;

const styles: StyleTypes = {
    color: {
        path: 'properties/color/',
        platforms: ['ios-swift', 'react-native', 'kotlin', 'xml'],
        config: getStyleDictionaryColorConfig,
        formatters: [
            {
                name: 'kotlin/custom/color',
                formatter: colorKotlinCustomFormatter,
            },
            {
                name: 'react-native/custom/color',
                formatter: colorReactNativeCustomFormatter,
            },
            {
                name: 'ios-swift/custom/color',
                formatter: colorIosSwiftCustomFormatter,
            },
            {
                name: 'xml/custom/color',
                formatter: colorXMLCustomFormatter,
            },
        ],
        transformers: [
            {
                name: 'color/gradientSwift',
                type: 'value',
                transformer: gradientSwiftTransformer,
            },
            {
                name: 'color/gradientReactNative',
                type: 'value',
                transformer: gradientReactNativeTransformer,
            },
            {
                name: 'color/gradientKotlin',
                type: 'value',
                transformer: gradientKotlinTransformer,
            },
            {
                name: 'color/gradientXML',
                type: 'value',
                transformer: gradientXMLTransformer,
            },
        ],
    },
    typo: {
        path: 'properties/typo/',
        platforms: ['ios-swift', 'react-native', 'kotlin'],
        config: getStyleDictionaryTypoConfig,
        formatters: [
            {
                name: 'kotlin/custom/typo',
                formatter: typoKotlinCustomFormatter,
            },
            {
                name: 'react-native/custom/typo',
                formatter: typoReactNativeCustomFormatter,
            },
            {
                name: 'ios-swift/custom/typo',
                formatter: typoIosSwiftCustomFormatter,
            },
        ],
    },
    shadow: {
        path: 'properties/shadow/',
        platforms: ['react-native'],
        config: getStyleDictionaryShadowConfig,
        formatters: [
            {
                name: 'react-native/custom/shadow',
                formatter: shadowReactNativeCustomFormatter,
            },
        ],
    },
    borderRadius: {
        path: 'properties/borderRadius/',
        platforms: ['react-native'],
        config: getStyleDictionaryBorderRadiusConfig,
        formatters: [
            {
                name: 'react-native/custom/borderRadius',
                formatter: borderRadiusReactNativeCustomFormatter,
            },
        ],
    },
};

Object.values(styles).forEach(({ config, path: filePath, platforms, formatters, transformers = [] }) =>
    getFilesName(filePath).forEach((brand) =>
        platforms.forEach((platform) => {
            const styleDictionary = StyleDictionaryPackage.extend(config(brand, filePath));

            formatters.forEach((formatter) => styleDictionary.registerFormat(formatter));
            transformers.forEach((transformer) => styleDictionary.registerTransform(transformer));

            styleDictionary.buildPlatform(platform);
        }),
    ),
);

import StyleDictionaryPackage from 'style-dictionary';
import glob from 'fast-glob';
import path from 'path';
import { iosSwiftCustomFormatter, kotlinCustomFormatter, reactNativeCustomFormatter } from './lib/generator';

import { upperFirstLetter } from './lib/themeBuilder/utils';

const platforms = ['kotlin', 'react-native', 'ios-swift'];

const tokensPath = `properties/**/brands`;

const fileNames = glob.sync(path.join(tokensPath, '*')).map((filePath) => path.parse(filePath).name);

const getStyleDictionaryConfig = (brand: string) => ({
    source: [path.join(tokensPath, `${brand}.json`)],
    platforms: {
        kotlin: {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/composeColor'],
            buildPath: `build/`,
            files: [
                {
                    format: 'kotlin/custom',
                    destination: `${brand}_kotlin.kt`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'react-native': {
            transforms: ['attribute/cti', 'name/ti/camel', 'color/hex8'],
            buildPath: `build/`,
            files: [
                {
                    format: 'react-native/custom',
                    destination: `${brand}_react-native.ts`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
        'ios-swift': {
            transformGroup: 'ios-swift-separate',
            buildPath: `build/`,
            files: [
                {
                    format: 'ios-swift/custom',
                    destination: `${brand}_ios-swift.swift`,
                    className: upperFirstLetter(brand),
                },
            ],
        },
    },
});

const mapFormatter = [
    {
        name: 'ios-swift/custom',
        formatter: iosSwiftCustomFormatter,
    },
    {
        name: 'react-native/custom',
        formatter: reactNativeCustomFormatter,
    },
    {
        name: 'kotlin/custom',
        formatter: kotlinCustomFormatter,
    },
];

fileNames.forEach((brand) =>
    platforms.forEach((platform) => {
        const styleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand));
        mapFormatter.forEach((formatter) => styleDictionary.registerFormat(formatter));
        styleDictionary.buildPlatform(platform);
    }),
);

const styleDictionaryLegacy = StyleDictionaryPackage.extend('./config.json');
styleDictionaryLegacy.buildAllPlatforms();

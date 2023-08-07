import type { Dictionary, TransformedToken } from 'style-dictionary';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';

const getReactNativeTemplate = (spacingEnumsContent: string) => {
    const spacingEnums = `export enum ESpacing {
  ${spacingEnumsContent}
}
`;

    return [spacingEnums].join('\n');
};

const getSpacingTokens = (tokenItems: TransformedToken[]) =>
    tokenItems
        .map((token) => `spacing${upperFirstLetter(token.attributes?.type || '')} = ${parseInt(token.value, 0)},`)
        .join('\n  ');

export const spacingReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const spacingEnums = getSpacingTokens(dictionary.allTokens);

    return getReactNativeTemplate(spacingEnums);
};

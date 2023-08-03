import type { Dictionary, TransformedToken } from 'style-dictionary';
import { upperFirstLetter } from '@salutejs/plasma-tokens-utils';

const getReactNativeTemplate = (borderRadiusEnumsContent: string) => {
    const borderRadiusEnums = `export enum ERounding {
  ${borderRadiusEnumsContent}
}
`;

    return [borderRadiusEnums].join('\n');
};

const getBorderRadiusTokens = (tokenItems: TransformedToken[]) =>
    tokenItems
        .map((token) => `borderRadius${upperFirstLetter(token.attributes?.type || '')} = ${parseInt(token.value, 0)},`)
        .join('\n  ');

export const borderRadiusReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const borderRadiusEnums = getBorderRadiusTokens(dictionary.allTokens);

    return getReactNativeTemplate(borderRadiusEnums);
};

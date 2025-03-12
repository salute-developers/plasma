import React, { FC } from 'react';
import type { TokenData } from '@salutejs/plasma-sb-utils';

import { cx } from '../../../../../utils';

import { AccordionInfo, ColorCircle, OpacityPart, TokenInfo } from './Colors.styles';

type ColorTokenDataProps = {
    token: string;
    tokenData: Omit<TokenData, 'states'>;
    copyToClipboard: (value: string, opacity?: string | null) => Promise<void>;
    className?: string;
    initialTokenName?: string;
};

export const ColorTokenData: FC<ColorTokenDataProps> = ({
    token,
    tokenData,
    copyToClipboard,
    className,
    initialTokenName,
}) => {
    const { value, opacity, tone, colorName } = tokenData;

    return (
        <AccordionInfo>
            <TokenInfo className={cx('copy', className)} onClick={() => copyToClipboard(initialTokenName || token)}>
                {token}
            </TokenInfo>
            <TokenInfo className="color copy" onClick={() => copyToClipboard(value, opacity?.alpha)}>
                <ColorCircle background={value + (opacity?.alpha || '')} />
                <div>{value.includes('gradient') ? 'Градиент' : colorName || ''}</div>
            </TokenInfo>
            <TokenInfo className="no-interaction">{tone !== 'none' && tone}</TokenInfo>
            <TokenInfo className="no-interaction">{tone && opacity?.parsedAlpha}</TokenInfo>
            <TokenInfo className="color copy" onClick={() => copyToClipboard(value, opacity?.alpha)}>
                <div>
                    {value.includes('gradient') ? '' : value}
                    {opacity && <OpacityPart>{opacity.alpha}</OpacityPart>}
                </div>
            </TokenInfo>
        </AccordionInfo>
    );
};

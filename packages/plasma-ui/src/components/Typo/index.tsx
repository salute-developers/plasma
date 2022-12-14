import React from 'react';
import { sberPortal, sberBox, mobile } from '@salutejs/plasma-tokens';
import { createGlobalStyle } from 'styled-components';

import { DeviceKind, transformStyles } from '../../utils';

/* stylelint-disable */
const transformWithRoot = (typo: typeof sberBox) => `
:root {
    ${transformStyles(typo[':root'])}
}`;

const TypoSberbox = createGlobalStyle`${transformWithRoot(sberBox)}`;
const TypoMobile = createGlobalStyle`${transformWithRoot(mobile)}`;
const TypoPortal = createGlobalStyle`${transformWithRoot(sberPortal)}`;
/* stylelint-enable */

export const Typo = ({ deviceKind }: { deviceKind: DeviceKind }) => {
    if (deviceKind === 'mobile') {
        return <TypoMobile />;
    }

    if (deviceKind === 'sberPortal') {
        return <TypoPortal />;
    }

    return <TypoSberbox />;
};

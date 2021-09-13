import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/plasma-tokens-web';
import * as Web from '@salutejs/plasma-web';
import { Filler } from '@salutejs/plasma-docs-ui';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    Filler,
    ...Icons,
    ...Tokens,
    ...Web,
    ...React,
};

export default ReactLiveScope;

import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/plasma-tokens-web';
import * as Web from '@salutejs/plasma-web';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...Icons,
    ...Tokens,
    ...Web,
    ...React,
};

export default ReactLiveScope;

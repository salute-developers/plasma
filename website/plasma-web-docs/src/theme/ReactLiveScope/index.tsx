import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/plasma-tokens-b2b';
import * as Web from '@salutejs/plasma-web';
import { Filler } from '@salutejs/plasma-docs-ui';
import styled from 'styled-components';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    Filler,
    styled,
    ...Icons,
    ...Tokens,
    ...Web,
    ...React,
};

export default ReactLiveScope;

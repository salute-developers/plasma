import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/sdds-themes/tokens';
import * as Package from '@salutejs/sdds-serv';
import { Filler } from '@salutejs/plasma-docs-ui';
import styled from 'styled-components';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    Filler,
    styled,
    ...Icons,
    ...Tokens,
    ...Package,
    ...React,
};

export default ReactLiveScope;

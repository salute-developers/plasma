import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as SddsIcons from '@salutejs/sdds-icons/24';
import * as Tokens from '@salutejs/plasma-tokens-b2b';
import * as Web from '@salutejs/plasma-web';
import { Filler } from '@salutejs/plasma-docs-ui';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    Filler,
    styled,
    useForm,
    Controller,
    ...Icons,
    ...SddsIcons,
    ...Tokens,
    ...Web,
    ...React,
};

export default ReactLiveScope;

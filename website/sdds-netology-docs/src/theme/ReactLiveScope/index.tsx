import React from 'react';
import * as Icons from '@salutejs/plasma-icons';
import * as Tokens from '@salutejs/plasma-themes/tokens';
import * as Package from '@salutejs/sdds-netology';
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
    ...Tokens,
    ...Package,
    ...React,
};

export default ReactLiveScope;

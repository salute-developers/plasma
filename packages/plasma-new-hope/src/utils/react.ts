import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: для next.js важно, чтобы путь до хука был полный, т.к. есть проблемы с ре-экспортом
import { useUniqId } from '../hooks/useUniqId';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { useId } = React as any;

export const IS_REACT_18 = ReactDOM.version.split('.')[0] === '18';

export const safeUseId: () => string = !IS_REACT_18 ? useUniqId : useId;

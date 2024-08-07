import React, { FC } from 'react';
import { StorybookLink as BaseLink } from '@salutejs/plasma-docs-ui';

// INFO: Список должен совпадать со списком компонентов в библиотеки
const storyLinks = {
    Badge: 'content-badge--default',
    Button: 'controls-button--default',
    Carousel: 'controls-carousel--default',
    Checkbox: 'controls-checkbox--default',
    Dropdown: 'controls-dropdown--default',
    Grid: 'layout-grid--default',
    Image: 'content-image--default',
    Link: 'content-link--default',
    Modal: 'controls-modal--default',
    Notification: 'controls-notification--default',
    Price: 'content-price--default',
    Progress: 'controls-progress--default',
    Radiobox: 'controls-radiobox--default',
    Select: 'controls-select--default',
    Skeleton: 'content-select--line',
    Spinner: 'content-spinner--default',
    Switch: 'controls-switch--default',
    Tabs: 'controls-tabs--default',
    TextArea: 'controls-textarea--default',
    TextField: 'controls-textfield--default',
    Toast: 'controls-toast--default',
    Tooltip: 'controls-tooltip--live',
    Typography: 'content-typography--default',
    Toolbar: 'controls-toolbar--default',
};

// INFO: Временно убираем кнопку
export const StorybookLink: FC<{ name: keyof typeof storyLinks }> = () => {
    // INFO: short links работает с ошибкой
    return <BaseLink link={null} />;
};

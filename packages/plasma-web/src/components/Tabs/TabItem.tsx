import { TabItem as TabItemHope } from '@salutejs/plasma-hope';

const TabItemBase = TabItemHope({ design: 'web' });

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = TabItemBase;

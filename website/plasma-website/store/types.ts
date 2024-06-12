export type Theme = 'light' | 'dark';
export type WizardItemType = 'icon' | 'color';

export interface State {
    theme: Theme;
    wizardItemType?: WizardItemType;
    wizardItemName?: string;
    color: Record<'value' | 'label', string>;
    size: {
        value: 'xs' | 's' | 'm';
        label: '16' | '24' | '36';
    };
}

export interface PageProps {
    onClick: () => void;
}

export interface TokenValueProps {
    value: string | Record<string, unknown>;
    comment: string;
    enabled: boolean;
}

export type ThemeType = 'light' | 'dark';

export type PageType = 'main' | 'theme-builder' | 'edit-theme';

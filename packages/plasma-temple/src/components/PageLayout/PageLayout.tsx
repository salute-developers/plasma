import React from 'react';
import { DeviceThemeProvider } from '@salutejs/ui';
import { Container } from '@salutejs/ui/components/Grid';

export const PageLayout: React.FC = ({ children }) => (
    <DeviceThemeProvider>
        <Container>{children}</Container>
    </DeviceThemeProvider>
);

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: process.env.LANDING_BASE_PATH || '/',
    plugins: [react()],
    build: { outDir: 'dist' },
});

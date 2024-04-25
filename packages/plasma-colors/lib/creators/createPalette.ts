import { writeGeneratedToFS, generateFile } from '../utils';

export const createPalette = (srcDir: string, palette: Record<string, any>) => {
    const paletteTsContent = Object.entries(palette).map(([file, content]) => generateFile(file, content));

    writeGeneratedToFS(srcDir, paletteTsContent);
};

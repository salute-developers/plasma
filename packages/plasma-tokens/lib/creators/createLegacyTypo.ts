import path from 'path';
import {
    generateTypoSystem,
    generateTypography,
    generateTypographyValues,
    writeGeneratedToFS,
} from '@salutejs/plasma-tokens-utils';

import { typoSystem, typo } from '../../data';

export const createLegacyTypo = (srcDir: string) => {
    const typoDir = path.join(srcDir, 'typo');
    const typographyDir = path.join(srcDir, 'typography');
    const typographyValuesDir = path.join(srcDir, 'typographyValues');

    // Типографика по типам устройств для создания глобального стиля
    writeGeneratedToFS(typoDir, generateTypoSystem(typo));
    // Типографика, разложенная по типам компонентов
    writeGeneratedToFS(typographyDir, generateTypography(typoSystem.typoStyles));
    // Параметрическая система (к примеру, все размеры шрифтов / высоты строк)
    writeGeneratedToFS(typographyValuesDir, generateTypographyValues(typoSystem));
};

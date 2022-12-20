import { access } from 'fs/promises';
import { constants } from 'fs';

export default async function checkPath(path?: string, mode = constants.R_OK): Promise<boolean> {
    if (!path) {
        return false;
    }

    try {
        await access(path, mode);

        return true;
    } catch (error) {
        return false;
    }
}

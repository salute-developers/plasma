import type { ApiMeta } from '@sddsjs/design-system-builder-generator/web-mapping';

import bundledMeta from '../../public/api-meta.json';

/**
 * API-мета сборки (`public/api-meta.json`): строится перед `dev`, `build` и `test` командой
 * `dsbuilder-web-generator api-meta` из `@salutejs/plasma-new-hope`, установленного в плагине.
 */
export const apiMeta = bundledMeta as ApiMeta;

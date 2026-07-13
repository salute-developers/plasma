import { addons } from 'storybook/manager-api';
import { registerPackageVersions } from '@salutejs/plasma-sb-utils/managerVersions';

import theme from './theme';
import { version as libVersion } from '../package.json';
import { version as themeVersion } from '../../themes/sdds-themes/package.json';

addons.setConfig({
    theme,
});

registerPackageVersions([
    { name: 'sdds-finai', version: libVersion },
    { name: 'sdds-themes', version: themeVersion },
]);

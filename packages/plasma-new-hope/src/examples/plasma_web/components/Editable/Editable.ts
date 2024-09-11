import { editableConfig } from '../../../../components/Editable';
import { component, mergeConfig } from '../../../../engines';
import { Body } from '../../../typograpy/components/Body/Body';
import { Dspl } from '../../../typograpy/components/Dspl/Dspl';
import { Heading } from '../../../typograpy/components/Heading/Heading';
import { Text } from '../../../typograpy/components/Text/Text';

import { config } from './Editable.config';

export const typographyVariants = { Body, Dspl, Heading, Text };

const finalConfig = editableConfig(typographyVariants);
const mergedConfig = mergeConfig(finalConfig, config);

export const Editable = component(mergedConfig);

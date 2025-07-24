import { editableConfig } from '../../../components/Editable';
import { component, mergeConfig } from '../../../engines';
import { Body } from '../typography/components/Body/Body';
import { Dspl } from '../typography/components/Dspl/Dspl';
import { Heading } from '../typography/components/Heading/Heading';
import { Text } from '../typography/components/Text/Text';

import { config } from './Editable.config';

export const typographyVariants = { Body, Dspl, Heading, Text };

const finalConfig = editableConfig(typographyVariants);
const mergedConfig = mergeConfig(finalConfig, config);

export const Editable = component(mergedConfig);

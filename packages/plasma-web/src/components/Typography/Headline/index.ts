import styled from 'styled-components';
import { headline5 } from '@salutejs/plasma-tokens-web';

export * from '@salutejs/plasma-core/components/Typography/Headline';

export const Headline5 = styled.div({ overflowWrap: 'break-word', hyphens: 'auto', ...headline5 });

export const H5 = styled.h3({ margin: 0, ...headline5 });

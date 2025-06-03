import { tokens } from '../CodeInput.tokens';

type SmallScreen = 'smallXXS' | 'smallXS' | 'smallS' | 'smallM' | 'smallL' | 'smallXL' | 'smallXXL';
type MediumScreen = 'mediumXXS' | 'mediumXS' | 'mediumS' | 'mediumM' | 'mediumL' | 'mediumXL' | 'mediumXXL';
type LargeScreen = 'largeXXS' | 'largeXS' | 'largeS' | 'largeM' | 'largeL' | 'largeXL' | 'largeXXL';
export type ScreenVariant = SmallScreen | MediumScreen | LargeScreen;

export type BreakpointTokens = { [x: string]: string | number };
export type TokensType = keyof typeof tokens;

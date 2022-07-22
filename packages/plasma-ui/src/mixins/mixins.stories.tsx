import React from 'react';
import type {
    FocusProps,
    OutlinedProps,
    BlurProps,
    DisabledProps,
    RoundnessProps,
    ViewProps,
} from '@salutejs/plasma-core';

import { InteractionProps } from '.';

export const OutlinedComponent: React.FC<React.PropsWithChildren<FocusProps & OutlinedProps>> = () => undefined;
export const BlurredComponent: React.FC<React.PropsWithChildren<BlurProps>> = () => undefined;
export const DisabledComponent: React.FC<React.PropsWithChildren<DisabledProps>> = () => undefined;
export const InteractionComponent: React.FC<React.PropsWithChildren<InteractionProps>> = () => undefined;
export const RoundnessComponent: React.FC<React.PropsWithChildren<RoundnessProps>> = () => undefined;
export const ViewComponent: React.FC<React.PropsWithChildren<ViewProps>> = () => undefined;

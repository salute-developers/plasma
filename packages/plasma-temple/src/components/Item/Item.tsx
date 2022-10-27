import React from 'react';

import { DeviceComponent } from '../DeviceComponent/DeviceComponent';

import { ItemComponent } from './Item@common';
import { ItemMobile } from './Item@mobile';
import { ItemSberBox } from './Item@sberbox';
import { ItemSberPortal } from './Item@sberportal';

export const Item: ItemComponent = (props) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <DeviceComponent sberbox={ItemSberBox} sberportal={ItemSberPortal} mobile={ItemMobile} props={props} />
);

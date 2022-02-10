import React from 'react';
import { Headline3 } from '@salutejs/plasma-ui';

import { ProductPriceCommon } from './ProductPrice@common';
import { ProductPriceProps } from './types';

export const ProductPriceSberPortal: React.FC<ProductPriceProps> = (props) => (
    <Headline3>
        <ProductPriceCommon {...props} />
    </Headline3>
);

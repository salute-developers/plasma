import React, { forwardRef } from 'react';

import { cx } from '../../../../utils';
import { getColTokens } from '../../utils';
import { classes } from '../../Grid.tokens';

import type { ColProps } from './Col.types';
import { StyledCol } from './Col.styles';

/**
 * Блок для размещения контента внутри себя.
 * По дефолту доступные пропсы для задания позиционирования:
 * smallM, mediumS, mediumM, largeS, largeM
 */
export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
    const { className, style, size, offset, ...rest } = props;

    const defaultTokens = {
        '--plasma_private-grid-col-default-size': size,
        '--plasma_private-grid-col-default-offset': offset,
    };

    return (
        <StyledCol
            ref={ref}
            style={{
                ...defaultTokens,
                ...getColTokens(rest),
                ...style,
            }}
            className={cx(classes.col, className)}
            {...rest}
        />
    );
});

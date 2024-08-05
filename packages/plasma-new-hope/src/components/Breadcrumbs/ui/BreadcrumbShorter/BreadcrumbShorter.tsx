import React, { HTMLAttributes, ReactNode, useState, KeyboardEvent } from 'react';

import { addSeparator } from '../../utils';

import { StyledHidden, StyledRoot, StyledShorter } from './BreadcrumbShorter.styles';
import { BreadcrumbShorterProps } from './BreadcrumbShorter.types';

export const BreadcrumbShorter: React.FC<HTMLAttributes<HTMLDivElement> & BreadcrumbShorterProps> = ({
    children,
    separator,
}) => {
    const [openShorter, setOpenShorter] = useState(false);

    const renderItems: ReactNode[] = addSeparator(children, separator);

    const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
        event.persist();

        if (event.keyCode === 13) {
            setOpenShorter(true);
        }
    };

    return (
        <StyledRoot>
            {!openShorter && (
                <StyledShorter tabIndex={0} onClick={() => setOpenShorter(true)} onKeyDown={onKeyPress}>
                    ...
                </StyledShorter>
            )}
            {openShorter && <StyledHidden>{renderItems.map((item) => item)}</StyledHidden>}
        </StyledRoot>
    );
};

import React from 'react';

import { Props } from './SelectNotFoundContent.types';
import { Wrapper, StyledButton, ContentWrapper, Description } from './SelectNotFoundContent.styles';

export const SelectNotFoundContent: React.FC<Props> = ({ icon, description, buttonText, buttonAction }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                {icon}

                <Description>{description}</Description>

                {buttonText && (
                    <StyledButton stretching="filled" onClick={buttonAction}>
                        {buttonText}
                    </StyledButton>
                )}
            </ContentWrapper>
        </Wrapper>
    );
};

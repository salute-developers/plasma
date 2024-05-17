import React from 'react';

import { cx } from '../../../../../../utils';
import { classes } from '../../../../SelectNew.tokens';

import { Chip } from './elements/Chip/Chip';
import { StyledButton, StyledArrow, Wrapper, ChipWrapper, TextfieldWrapper } from './Textfield.styles';

const getLabel = (values, targetView) => {
    if (!values.length) {
        return <Chip text="Ничего не выбрано" />;
    }
    switch (targetView) {
        case 'amount': {
            return <Chip text={`Выбрано: ${values.length}`} />;
        }

        case 'secondaryLabel': {
            return values.map(({ secondaryLabel }) => <Chip text={secondaryLabel} />);
        }

        default: {
            return values.map(({ label }) => <Chip text={label} />);
        }
    }
};

export const Textfield: React.FC<any> = ({ opened, values, targetView }) => {
    const withArrowInverse = opened ? classes.arrowInverse : undefined;

    return (
        <TextfieldWrapper opened={opened}>
            <StyledButton stretching="filled" className={classes.textfieldTarget}>
                <Wrapper>
                    <ChipWrapper>{getLabel(values, targetView)}</ChipWrapper>

                    <StyledArrow size="s" color="inherit" className={cx(classes.selectTargetArrow, withArrowInverse)} />
                </Wrapper>
            </StyledButton>
        </TextfieldWrapper>
    );
};

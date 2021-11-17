import { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { TextField, TextFieldProps, Button } from '@salutejs/plasma-b2c';
import { IconSearch } from '@salutejs/plasma-icons';
import { tertiary } from '@salutejs/plasma-tokens-b2c';

interface SearchFormProps {
    onInput: TextFieldProps['onInput'];
}

const StyledForm = styled.form``;
const StyledButton = styled(Button)`
    cursor: text;
`;

export const SearchForm = memo<SearchFormProps>(({ onInput }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onIconClick = useCallback(() => inputRef.current?.focus(), []);

    return (
        <StyledForm>
            <TextField
                ref={inputRef}
                placeholder="Search"
                onInput={onInput}
                contentLeft={
                    <StyledButton
                        type="button"
                        view="clear"
                        shiftLeft
                        contentLeft={<IconSearch color={tertiary} />}
                        onClick={onIconClick}
                    />
                }
            />
        </StyledForm>
    );
});

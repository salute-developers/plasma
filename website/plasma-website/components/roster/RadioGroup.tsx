import { memo } from 'react';
import type { ChangeEvent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Radiobox } from '@salutejs/plasma-b2c';

interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    name: string;
    value: string | number;
    items: Array<{ value: string | number; label: string | number }>;
    onChange: (value: string | number) => void;
    children?: never;
}

const StyledGroup = styled.div`
    display: flex;
`;
const StyledRadiobox = styled(Radiobox)`
    margin-right: 1rem;
`;

export const RadioGroup = memo<RadioGroupProps>(({ name, value, items, onChange, ...rest }) => {
    return (
        <StyledGroup {...rest}>
            {items.map((item) => (
                <StyledRadiobox
                    key={item.value}
                    name={name}
                    value={item.value}
                    label={item.label}
                    checked={value === item.value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.checked && onChange(item.value)}
                />
            ))}
        </StyledGroup>
    );
});

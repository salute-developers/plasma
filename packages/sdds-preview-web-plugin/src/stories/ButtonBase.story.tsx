import { ButtonBase } from '@salutejs/plasma-new-hope/styled-components';

const ButtonBaseDefault = {
    name: 'Default',
    args: [
        {
            name: 'text',
            value: 'Кнопка',
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { text, disabled } = args;

        return (
            <div style={{ width: '15rem' }}>
                <ButtonBase type="button" disabled={disabled} style={{ padding: '0.75rem 1rem', color: 'inherit' }}>
                    {text}
                </ButtonBase>
            </div>
        );
    },
};

export const ButtonBaseStories = [ButtonBaseDefault];

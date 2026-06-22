export const gradientTextClass = 'sdds-core-gradient-text';
export const gradientTextWrapperClass = 'sdds-core-with-text-gradient';

export const gradientTextVars = {
    gradient: '--sdds-core-text-gradient',
    gradientHover: '--sdds-core-text-gradient-hover',
    gradientActive: '--sdds-core-text-gradient-active',
} as const;

export const withTextGradient = () => `
    &.${gradientTextWrapperClass} .${gradientTextClass} {
    background: var(${gradientTextVars.gradient});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
    &.${gradientTextWrapperClass}:hover .${gradientTextClass} {
        background: var(${gradientTextVars.gradientHover}, var(${gradientTextVars.gradient}));
        background-clip: text;
        -webkit-background-clip: text;
    }
}
&.${gradientTextWrapperClass}:active .${gradientTextClass} {
    background: var(${gradientTextVars.gradientActive}, var(${gradientTextVars.gradient}));
    background-clip: text;
    -webkit-background-clip: text;
}
`;

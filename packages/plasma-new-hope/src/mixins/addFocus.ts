export const addFocus = () => `
    position: relative;

    &::before {
        content: '';

        position: absolute;
        top: calc(-1 * var(--add-focus-outline-offset));
        left: calc(-1 * var(--add-focus-outline-offset));
        right: calc(-1 * var(--add-focus-outline-offset));
        bottom: calc(-1 * var(--add-focus-outline-offset));

        display: block;
        box-sizing: content-box;

        border: var(--add-focus-outline-size) solid transparent;
        border-radius: calc(var(--add-focus-outline-radius));

        transition: var(--add-focus-outline-transition);

        pointer-events: none;
    }

    &.focus-visible:focus,
    &[data-focus-visible-added] {
        outline: none;
        z-index: 1;
        
        &::before {
            box-shadow: 0 0 0 var(--add-focus-outline-size) var(--add-focus-outline-color);
        }
    }
`;

// transition: var(--add-focus-outline-transition);
// ${(props) => (props.lowPerformance ? 'unset' : 'box-shadow 0.2s ease-in-out')};

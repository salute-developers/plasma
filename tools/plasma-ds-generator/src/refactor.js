


const $bodyL = ({
    '--plasma-button-font-family': 'var(--plasma-typo-body-l-font-family)',
    '--plasma-button-font-size': 'var(--plasma-typo-body-l-font-size)',
    '--plasma-button-font-style': 'var(--plasma-typo-body-l-font-style)',
    '--plasma-button-font-weight': 'var(--plasma-typo-body-l-font-weight)',
    '--plasma-button-letter-spacing': 'var(--plasma-typo-body-l-letter-spacing)',
    '--plasma-button-line-height': 'var(--plasma-typo-body-l-line-height)',
});

const $bodyLBold = ({
    ...$bodyL,
    '--plasma-button-font-weight': 'var(--plasma-typo-body-l-bold-font-weight)',
});

const $bodyM = ({
    '--plasma-button-font-family': 'var(--plasma-typo-body-m-font-family)',
    '--plasma-button-font-size': 'var(--plasma-typo-body-m-font-size)',
    '--plasma-button-font-style': 'var(--plasma-typo-body-m-font-style)',
    '--plasma-button-font-weight': 'var(--plasma-typo-body-m-font-weight)',
    '--plasma-button-letter-spacing': 'var(--plasma-typo-body-m-letter-spacing)',
    '--plasma-button-line-height': 'var(--plasma-typo-body-m-line-height)',
});

const $bodyMBold = ({
    ...$bodyM,
    '--plasma-button-font-weight': 'var(--plasma-typo-body-m-bold-font-weight)',
});

const $bodyS = ({
    '--plasma-button-font-family': 'var(--plasma-typo-body-s-font-family)',
    '--plasma-button-font-size': 'var(--plasma-typo-body-s-font-size)',
    '--plasma-button-font-style': 'var(--plasma-typo-body-s-font-style)',
    '--plasma-button-font-weight': 'var(--plasma-typo-body-s-font-weight)',
    '--plasma-button-letter-spacing': 'var(--plasma-typo-body-s-letter-spacing)',
    '--plasma-button-line-height': 'var(--plasma-typo-body-s-line-height)',
});

const $bodySBold = ({
    ...$bodyS,
    '--plasma-button-font-weight': 'var(--plasma-typo-body-s-bold-font-weight)',
});

const $bodyXS = ({
    '--plasma-button-font-family': 'var(--plasma-typo-body-xs-font-family)',
    '--plasma-button-font-size': 'var(--plasma-typo-body-xs-font-size)',
    '--plasma-button-font-style': 'var(--plasma-typo-body-xs-font-style)',
    '--plasma-button-font-weight': 'var(--plasma-typo-body-xs-font-weight)',
    '--plasma-button-letter-spacing': 'var(--plasma-typo-body-xs-letter-spacing)',
    '--plasma-button-line-height': 'var(--plasma-typo-body-xs-line-height)',
});

const $bodyXSBold = ({
    ...$bodyXS,
    '--plasma-button-font-weight': 'var(--plasma-typo-body-xs-bold-font-weight)',
});

const $bodyXXS = ({
    '--plasma-button-font-family': 'var(--plasma-typo-body-xxs-font-family)',
    '--plasma-button-font-size': 'var(--plasma-typo-body-xxs-font-size)',
    '--plasma-button-font-style': 'var(--plasma-typo-body-xxs-font-style)',
    '--plasma-button-font-weight': 'var(--plasma-typo-body-xxs-font-weight)',
    '--plasma-button-letter-spacing': 'var(--plasma-typo-body-xxs-letter-spacing)',
    '--plasma-button-line-height': 'var(--plasma-typo-body-xxs-line-height)',
});

const $bodyXXSBold = ({
    ...$bodyXXS,
    '--plasma-button-font-family': 'var(--plasma-typo-body-xxs-bold-font-weight)',
});


const typoPlain = {

    $bodyL,
    $bodyLBold,
    $bodyM,
    $bodyMBold,
    $bodyS,
    $bodySBold,
    $bodyXS,
    $bodyXSBold,
    $bodyXXS,
    $bodyXXSBold,

};

module.exports = {
    typoPlain,
} 


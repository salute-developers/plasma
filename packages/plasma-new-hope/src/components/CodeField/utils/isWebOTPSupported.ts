export const isWebOTPSupported = () => {
    return (
        typeof window !== 'undefined' &&
        'OTPCredential' in window &&
        navigator.credentials &&
        typeof navigator.credentials.get === 'function'
    );
};

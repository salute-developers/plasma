import { useCallback, useEffect, useRef } from 'react';

import { getCodeValue, isWebOTPSupported } from '../utils';

type UseWebOTPProps = {
    codeString: string;
    enableSMSAutoRead: boolean;
    disabled: boolean;
    codeLength: number;
    codeSetter: (newCode: Array<string>) => void;
    onFullCodeEnter?: (code: string) => void;
};

type OTPTransport = 'sms';

interface OTPCredential extends Credential {
    code: string;
}

declare global {
    interface CredentialRequestOptions {
        otp?: {
            transport: OTPTransport[];
        };
        signal?: AbortSignal;
    }
}

const isOTPCredential = (credential: Credential | null): credential is OTPCredential => {
    return credential !== null && 'code' in credential;
};

export const useWebOTP = ({
    codeString,
    enableSMSAutoRead,
    disabled,
    codeLength,
    codeSetter,
    onFullCodeEnter,
}: UseWebOTPProps) => {
    const abortControllerRef = useRef<AbortController | null>(null);

    const startWebOTPListener = useCallback(async () => {
        if (!enableSMSAutoRead || disabled || !isWebOTPSupported()) {
            return;
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        try {
            const otp = await navigator.credentials.get({
                otp: { transport: ['sms'] as OTPTransport[] },
                signal: abortControllerRef.current.signal,
            });

            if (otp && isOTPCredential(otp) && otp.code) {
                const otpCode = otp.code;

                if (otpCode.length === codeLength) {
                    const newCode = getCodeValue(codeLength, otpCode);
                    codeSetter(newCode);

                    if (onFullCodeEnter) {
                        onFullCodeEnter(otpCode);
                    }
                }
            }
        } catch (err) {
            if (err instanceof DOMException) {
                if (err.name !== 'AbortError' && err.name !== 'NotAllowedError') {
                    console.warn('Web OTP API error:', err);
                }
            } else if (err instanceof Error) {
                console.warn('Web OTP API error:', err);
            } else {
                console.warn('Unknown Web OTP API error:', err);
            }
        }
    }, [enableSMSAutoRead, disabled, codeLength, onFullCodeEnter]);

    const stopWebOTPListener = useCallback(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (isWebOTPSupported() && codeString === '' && enableSMSAutoRead && !disabled) {
            startWebOTPListener();
        } else {
            stopWebOTPListener();
        }

        return () => {
            stopWebOTPListener();
        };
    }, [codeString, enableSMSAutoRead, disabled, startWebOTPListener, stopWebOTPListener]);
};

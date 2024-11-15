import { useEffect } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';

import type { EmailValidationOptions, PasswordValidationOptions, UseValidationArgs } from '../TextField.types';
import { constants } from '../../../utils';

const getUniqueKeys = (lengthOptions: string[]) => {
    return lengthOptions.map((option) => option.replace(/min|max|Length/g, ''));
};

const validateLenghtOptions = (options?: PasswordValidationOptions | EmailValidationOptions) => {
    if (!options) {
        return;
    }

    const minHash = Object.keys(options).filter((key) => {
        return key.startsWith('min');
    });
    const maxHash = Object.keys(options).filter((key) => {
        return key.startsWith('max');
    });

    const minMaxUniqueKeys = minHash?.length >= maxHash?.length ? getUniqueKeys(minHash) : getUniqueKeys(maxHash);

    const globalMinValue = Number(options?.minLength?.value);
    const globalMaxValue = Number(options?.maxLength?.value);

    if (globalMinValue <= 0) {
        console.error('minLength must be more than 0');
    }

    if (globalMaxValue <= 0) {
        console.error('maxLength must be more than 0');
    }

    if (globalMaxValue <= globalMinValue) {
        console.error('maxLength must be more than minLength');
    }

    minMaxUniqueKeys.forEach((key) => {
        const optionMinKey = `min${key}Length` as keyof typeof options;
        const optionMaxKey = `max${key}Length` as keyof typeof options;

        const minValue = Number(options?.[optionMinKey]?.value);
        const maxValue = Number(options?.[optionMaxKey]?.value);

        if (!minValue || minValue <= 0) {
            console.error(`${optionMinKey} must be more than 0`);
        }

        if (!maxValue || maxValue <= 0) {
            console.error(`${optionMaxKey} must be more than 0`);
        }

        if (maxValue <= minValue) {
            console.error(`${optionMaxKey} must be more than ${optionMinKey}`);
        }
    });
};

const validateWithLengthOptions = (
    value: string,
    options: PasswordValidationOptions | EmailValidationOptions,
    optionKey: string,
) => {
    const optionMinKey = `min${optionKey}Length` as keyof typeof options;
    const optionMaxKey = `max${optionKey}Length` as keyof typeof options;

    const minValue = Number(options[optionMinKey]?.value);
    const maxValue = Number(options[optionMaxKey]?.value);

    if (minValue && value.length < minValue) {
        return {
            isValid: false,
            errorMessage: options[optionMinKey]?.errorMessage || `${optionMinKey} is too short`,
        };
    }

    if (maxValue && value.length > maxValue) {
        return {
            isValid: false,
            errorMessage: options[optionMaxKey]?.errorMessage || `${optionMaxKey} is too long`,
        };
    }

    return { isValid: true };
};

const validateEmailDomainsLists = (blacklistDomains?: string[], whitelistDomains?: string[]) => {
    if (!blacklistDomains?.length || !whitelistDomains?.length) {
        return;
    }

    const uniqueDomains = new Set([...blacklistDomains, ...whitelistDomains]);

    if (uniqueDomains.size !== blacklistDomains.length + whitelistDomains.length) {
        console.error('Blacklisted domains must not overlap whitelisted domains');
    }
};

const validateWithDomainsLists = (domainWithZone: string, options: EmailValidationOptions) => {
    if (!options.whitelistDomains?.value?.length && !options.blacklistDomains?.value?.length) {
        return { isValid: true };
    }

    if (options?.blacklistDomains?.value?.includes(domainWithZone)) {
        return {
            isValid: false,
            errorMessage: options.blacklistDomains?.errorMessage || 'Domain is blacklisted',
        };
    }

    if (!options?.whitelistDomains?.value?.includes(domainWithZone)) {
        return {
            isValid: false,
            errorMessage: options.whitelistDomains?.errorMessage || 'Domain is not whitelisted',
        };
    }

    return { isValid: true };
};

const validateEmail = (email: string, options?: EmailValidationOptions) => {
    if (!email) {
        return { isValid: true };
    }

    const emailRegex = options?.customEmailRegex?.value || constants.emailPattern;
    if (!emailRegex.test(email)) {
        return { isValid: false, errorMessage: options?.customEmailRegex?.errorMessage || 'Invalid email' };
    }

    if (!options) {
        return { isValid: true };
    }

    if (options.minLength?.value && email.length < options.minLength.value) {
        return { isValid: false, errorMessage: options.minLength?.errorMessage || 'Email is too short' };
    }

    if (options.maxLength?.value && email.length > options.maxLength.value) {
        return { isValid: false, errorMessage: options.maxLength?.errorMessage || 'Email is too long' };
    }

    const emailHost = email.split('@')[0];
    const emailDomainWithZone = email.split('@')[1];
    const emailZone = emailDomainWithZone.split('.').pop();

    if (!emailZone?.length) {
        return { isValid: false, errorMessage: options.customEmailRegex?.errorMessage || 'Invalid email' };
    }

    const emailDomain = emailDomainWithZone.substring(0, emailDomainWithZone.length - (emailZone.length + 1));

    const hostValidation = validateWithLengthOptions(emailHost, options, 'Host');
    if (!hostValidation.isValid) {
        return hostValidation;
    }

    const domainValidation = validateWithLengthOptions(emailDomain, options, 'Domain');
    if (!domainValidation.isValid) {
        return domainValidation;
    }

    const zoneValidation = validateWithLengthOptions(emailZone, options, 'Zone');
    if (!zoneValidation.isValid) {
        return zoneValidation;
    }

    const domainWithZoneValidation = validateWithDomainsLists(emailDomainWithZone, options);
    if (!domainWithZoneValidation.isValid) {
        return domainWithZoneValidation;
    }

    return { isValid: true };
};

const validatePassword = (password: string, options?: PasswordValidationOptions) => {
    if (!password || !options) {
        return { isValid: true };
    }

    if (options.minLength?.value && password.length < options.minLength.value) {
        return { isValid: false, errorMessage: options.minLength?.errorMessage || 'Password is too short' };
    }

    if (options.maxLength?.value && password.length > options.maxLength.value) {
        return { isValid: false, errorMessage: options.maxLength?.errorMessage || 'Password is too long' };
    }

    const lowercasedPassword = password.toLowerCase();
    const uppercasedPassword = password.toUpperCase();

    if (options.includeUppercase?.value && password === lowercasedPassword) {
        return {
            isValid: false,
            errorMessage:
                options.includeUppercase?.errorMessage || 'Password must contain at least one uppercase letter',
        };
    }

    if (options.includeLowercase?.value && password === uppercasedPassword) {
        return {
            isValid: false,
            errorMessage:
                options.includeLowercase?.errorMessage || 'Password must contain at least one lowercase letter',
        };
    }

    if (options.includeDigits?.value && !/\d/.test(password)) {
        return { isValid: false, errorMessage: options.includeDigits?.errorMessage || 'Password must contain digits' };
    }

    if (options.includeSpecialSymbols?.value && !constants.specialCharacters.test(password)) {
        return {
            isValid: false,
            errorMessage: options.includeSpecialSymbols?.errorMessage || 'Password must contain special characters',
        };
    }

    return { isValid: true };
};

const validationVariants = {
    email: validateEmail,
    password: validatePassword,
};

export const useValidation = ({ validationType, options, onValidate }: UseValidationArgs) => {
    const handleValidationBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!validationType) {
            return;
        }

        const validationResult = validationVariants[validationType](event.target.value, options);

        onValidate?.(validationResult);
    };

    const handleValidationKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!validationType) {
            return;
        }

        if (event.keyCode === constants.keyCodes.Enter) {
            event.preventDefault();
            const { value } = event.target as HTMLInputElement;

            const validationResult = validationVariants[validationType](value, options);

            onValidate?.(validationResult);
        }
    };

    useEffect(() => {
        validateLenghtOptions(options);
        if (validationType === 'email') {
            validateEmailDomainsLists(
                (options as EmailValidationOptions)?.whitelistDomains?.value,
                (options as EmailValidationOptions).blacklistDomains?.value,
            );
        }
    }, []);

    return {
        handleValidationBlur,
        handleValidationKeyDown,
    };
};

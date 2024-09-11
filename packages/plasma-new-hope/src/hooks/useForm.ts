import React, { RefObject, useEffect } from 'react';

type DataType = { [name: string]: string | boolean | null | number };

const initData = (ref: RefObject<HTMLFormElement>, defaultValues: DataType) => {
    if (ref.current) {
        const form = ref.current as HTMLFormElement;
        const items = form.elements;

        for (let i = 0; i < items.length; i++) {
            const item = items[i] as HTMLInputElement;
            const { name, value, type } = item;

            if (type === 'text' || type === 'textarea') {
                item.value = String(defaultValues[name]);
            }

            if (type === 'checkbox') {
                item.checked = Boolean(defaultValues[name]);
            }

            if (type === 'radio') {
                item.checked = defaultValues[name] === value;
            }

            if (type === 'number') {
                item.setAttribute('defaultValue', String(defaultValues[name]));
                const event = new Event('setInitValue');
                item.dispatchEvent(event);
            }
        }
    }
};

export const useFormPlasma = (onSubmit: (data: DataType) => void, defaultValues: DataType) => {
    const formRef = React.createRef<HTMLFormElement>();

    useEffect(() => {
        initData(formRef, defaultValues);
    });

    const formData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result: DataType = {};

        const form = event.target as HTMLFormElement;
        const items = form.elements;

        for (let i = 0; i < items.length; i++) {
            const item = items[i] as HTMLInputElement;
            const { name, value, type } = item;

            if (type === 'text' || type === 'textarea' || type === 'number') {
                result[name] = value;
            }

            if (type === 'checkbox') {
                result[name] = item.checked;
            }

            if (type === 'radio') {
                if (item.checked) {
                    result[name] = value;
                } else if (!(name in result)) {
                    result[name] = null;
                }
            }
        }

        onSubmit(result);
    };

    return { formRef, formData };
};

import React, { RefObject, useEffect } from 'react';

type DataType = { [name: string]: string | boolean | null | number | number[] };

const initData = (ref: RefObject<HTMLFormElement>, defaultValues: DataType) => {
    if (ref.current) {
        const form = ref.current as HTMLFormElement;
        const items = form.elements;

        for (let i = 0; i < items.length; i++) {
            const item = items[i] as HTMLInputElement;
            const { name, value, type } = item;

            if ((type === 'text' || type === 'textarea') && defaultValues[name]) {
                item.value = String(defaultValues[name]);
            }

            if (type === 'checkbox' && defaultValues[name]) {
                item.checked = Boolean(defaultValues[name]);
            }

            if (type === 'radio' && defaultValues[name]) {
                item.checked = defaultValues[name] === value;
            }

            if (type === 'number' && defaultValues[name]) {
                const sliderType = item.getAttribute('datatype');

                if (sliderType === 'slider-single') {
                    item.setAttribute('defaultValue', String(defaultValues[name]));
                    const event = new Event('setInitValue');
                    item.dispatchEvent(event);
                }

                if (sliderType === 'slider-double') {
                    const isMax = item.getAttribute('data-slidertype') === 'max' ? 1 : 0;
                    const data = defaultValues[name] as number[];

                    item.setAttribute('defaultValue', String(data[isMax]));
                    const event = new Event('setInitValue');
                    item.dispatchEvent(event);
                }
            }
        }
    }
};

const valideParams = (name: string) => {
    return name && name !== '';
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

            if ((type === 'text' || type === 'textarea') && valideParams(name)) {
                result[name] = value;
            } else if (type === 'checkbox' && valideParams(name)) {
                result[name] = item.checked;
            } else if (type === 'radio' && valideParams(name)) {
                if (item.checked) {
                    result[name] = value;
                } else if (!(name in result)) {
                    result[name] = null;
                }
            } else if (type === 'number' && valideParams(name)) {
                const sliderType = item.getAttribute('datatype');

                if (sliderType === 'slider-single') {
                    result[name] = value;
                }

                if (sliderType === 'slider-double') {
                    const isMin = item.getAttribute('data-slidertype') === 'min';
                    if (isMin) {
                        result[name] = [Number(value)];
                    } else if (!isMin && Array.isArray(result[name])) {
                        result[name] = [...(result[name] as number[]), Number(value)];
                    }
                }
            }
        }

        onSubmit(result);
    };

    return { formRef, formData };
};

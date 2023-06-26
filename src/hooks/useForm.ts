import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T ) => {

    const [values, setValues] = useState(initialState);

    type TargetType = {
        target : {
            name: keyof T,
            value: string
        }
    }

    const handleChange = ({ target } : TargetType ) => {
            setValues({
                ...values,
                [target.name]: target.value
            })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
    }

    return {
        ...values,
        formValues: values, 
        handleChange,
        handleInputChange
    }
}
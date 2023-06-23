import { memo } from 'react'

import classNames from 'classnames'
import { useField } from 'formik'

import InputError from './components/input-error'
import InputErrorIcon from './components/input-error-icon'
import InputLabel from './components/input-label'
import style from './index.module.scss'

interface IInputProps {
    name: string
    type?: 'text' | 'email'
    label?: string
    placeholder?: string
    isBlock?: boolean
    isErrorIconVisible?: boolean
}

export const Input = memo(
    ({ name, type = 'text', label, placeholder, isBlock = false, isErrorIconVisible }: IInputProps) => {
        const [field, meta] = useField<string>(name)

        const wrapperClass = classNames({
            [style.wrapper]: true,
            [style.wrapper__error]: Boolean(meta.touched && meta.error),
        })

        const inputClass = classNames({
            [style.input]: true,
            [style.input__error]: Boolean(meta.touched && meta.error),
        })

        return (
            <div className={wrapperClass} style={{ width: isBlock ? '100%' : 'fit-content' }}>
                {label && <InputLabel label={label} />}

                <div className={style.inputWrapper}>
                    <input
                        type={type}
                        className={inputClass}
                        placeholder={placeholder}
                        style={{ width: isBlock ? '100%' : 'fit-content' }}
                        {...field}
                    />

                    {meta.touched && meta.error && isErrorIconVisible ? <InputErrorIcon /> : null}
                </div>

                <InputError error={meta.touched && meta.error ? meta.error : null} />
            </div>
        )
    },
)

Input.displayName = 'Input'

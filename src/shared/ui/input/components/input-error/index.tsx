import classNames from 'classnames'

import { Typography } from 'shared/ui'

import style from './index.module.scss'

interface IInputErrorProps {
    error: string | null
}

const InputError = ({ error }: IInputErrorProps) => {
    const errorClass = classNames({
        [style.error]: true,
        [style.error__show]: Boolean(error),
        [style.error__hide]: !Boolean(error),
    })

    return (
        <div className={errorClass}>
            <Typography type={'label'} color={'red500'}>
                {error}
            </Typography>
        </div>
    )
}

export default InputError

import { Typography } from 'shared/ui'

import style from './index.module.scss'

interface IInputLabelProps {
    label: string
}

const InputLabel = ({ label }: IInputLabelProps) => {
    return (
        <div className={style.label}>
            <Typography type={'body2'} color={'gray300'}>
                {label}
            </Typography>
        </div>
    )
}

export default InputLabel

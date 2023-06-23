import { DangerBoldIcon } from 'shared/ui/icons'

import style from './index.module.scss'

const InputErrorIcon = () => {
    return (
        <div className={style.wrapper}>
            <DangerBoldIcon color={'red500'} height={'16px'} width={'16px'} />
        </div>
    )
}

export default InputErrorIcon

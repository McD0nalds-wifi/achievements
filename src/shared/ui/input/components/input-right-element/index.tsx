import { ReactNode } from 'react'

import style from './index.module.scss'

interface IInputRightElementProps {
    pointerEvents?: 'all' | 'none'
    children: ReactNode
}

const InputRightElement = ({ pointerEvents = 'none', children }: IInputRightElementProps) => {
    return (
        <div className={style.wrapper} style={{ pointerEvents }}>
            {children}
        </div>
    )
}

export default InputRightElement

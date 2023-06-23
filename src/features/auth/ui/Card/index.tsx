import { ReactNode } from 'react'

import style from './index.module.scss'

interface ICardProps {
    maxWidth?: string | number
    padding?: string | number
    children?: ReactNode
}

export const Card = ({ maxWidth = 650, padding = 40, children }: ICardProps) => {
    /* START - Get store values. */
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - Card content. */

    return (
        <div className={style.container} style={{ maxWidth, padding }}>
            {children}
        </div>
    )
}

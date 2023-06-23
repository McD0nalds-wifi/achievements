import { ReactNode } from 'react'

import { ColorsType } from 'shared/common/constants'

export { ArrowRightIcon } from './ArrowRightIcon'
export { DangerBoldIcon } from './DangerBoldIcon'
export { UserBoldIcon } from './UserBoldIcon'

export type IconCursorType = 'default' | 'pointer' | 'inherit'

export interface IIconProps {
    color: ColorsType | 'inherit'
    viewBox?: string
    height?: string
    width?: string
    cursor?: IconCursorType
    onClick?: () => void
}

interface ISvgIconProps extends IIconProps {
    children: ReactNode
}

export const SvgIcon = ({
    height = '24px',
    width = '24px',
    viewBox = '0 0 24 24',
    cursor = 'inherit',
    onClick,
    children,
}: ISvgIconProps) => (
    <svg
        style={{ cursor }}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        onClick={onClick}
    >
        {children}
    </svg>
)

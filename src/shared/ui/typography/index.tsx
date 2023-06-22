import { CSSProperties, ReactNode } from 'react'

import { COLORS, ColorsType } from 'shared/common/constants'

import style from './index.module.scss'

type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'a'
type TypographyType =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'label'
type TypographyAlignType = 'left' | 'center' | 'right'
type TypographyCursor = 'default' | 'pointer' | 'inherit'
type TypographyFontWeight = '400' | '500' | '700'

interface ITypographyProps {
    type: TypographyType
    styles?: CSSProperties | undefined
    align?: TypographyAlignType
    component?: TypographyComponentType
    color?: ColorsType | 'transparent'
    cursor?: TypographyCursor
    fontWeight?: TypographyFontWeight
    isUppercase?: boolean
    children?: ReactNode
    onClick?: () => void
}

export const Typography = ({
    type,
    styles,
    align = 'left',
    component = 'div',
    color = 'black',
    cursor = 'inherit',
    fontWeight = '400',
    isUppercase,
    children,
    onClick,
}: ITypographyProps) => {
    const Tag = component

    return (
        <Tag
            className={style[type]}
            style={{
                textAlign: align,
                color: color === 'transparent' ? color : COLORS[color],
                cursor: cursor,
                fontWeight,
                textTransform: isUppercase ? 'uppercase' : 'none',
                ...styles,
            }}
            onClick={onClick}
        >
            {children}
        </Tag>
    )
}

import { ReactNode } from 'react'

import classNames from 'classnames'
import { noop } from 'lodash'

import { Typography } from 'shared/ui'
import { IIconProps } from 'shared/ui/icons'

import style from './index.module.scss'

type ButtonType = 'primary' | 'default' | 'success' | 'accent'
type ButtonSize = 'small' | 'medium'
type ButtonHtmlType = 'button' | 'submit' | 'reset'

interface IButtonProps {
    type?: ButtonType
    size?: ButtonSize
    htmlType?: ButtonHtmlType
    children?: ReactNode
    isLoading?: boolean
    isDisabled?: boolean
    isBlock?: boolean
    isNoWrap?: boolean
    startIcon?: (props: IIconProps) => JSX.Element
    endIcon?: (props: IIconProps) => JSX.Element
    onClick?: () => void
}

export const Button = ({
    type = 'primary',
    size = 'medium',
    htmlType = 'button',
    children,
    isLoading = false,
    isDisabled = false,
    isBlock = false,
    isNoWrap = false,
    startIcon,
    endIcon,
    onClick,
}: IButtonProps) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    const buttonClass = classNames({
        [style.button]: true,
        [style[`button__${type}`]]: true,
        [style[`button__${size}`]]: true,
        [style['button__loading']]: isLoading,
    })

    const iconSize = size === 'small' ? '12px' : '20px'

    return (
        <button
            className={buttonClass}
            style={{ width: isBlock ? '100%' : 'fit-content', whiteSpace: isNoWrap ? 'nowrap' : 'normal' }}
            type={!isLoading ? htmlType : 'button'}
            disabled={isDisabled}
            onClick={!isLoading ? onClick : noop}
        >
            {StartIcon && <StartIcon color={'inherit'} height={iconSize} width={iconSize} />}

            <Typography
                type={size === 'small' ? 'body2' : 'body1'}
                fontWeight={'700'}
                color={isLoading ? 'transparent' : 'inherit'}
            >
                {children}
            </Typography>

            {EndIcon && <EndIcon color={'inherit'} height={iconSize} width={iconSize} />}
            <div className={style.loader} style={{ opacity: isLoading ? 1 : 0 }}>
                {isLoading && (
                    <div className={style.loader_spinner}>
                        {/*<LoaderIcon color={'inherit'} height={'24px'} width={'24px'} />*/}
                    </div>
                )}
            </div>
        </button>
    )
}

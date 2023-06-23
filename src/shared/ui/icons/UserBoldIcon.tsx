import { COLORS } from 'shared/common/constants'

import { IIconProps, SvgIcon } from './index'

export const UserBoldIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <circle
                cx={'12'}
                cy={'6'}
                r={'4'}
                fill={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
            />
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z'
                }
                fill={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
            />
        </SvgIcon>
    )
}

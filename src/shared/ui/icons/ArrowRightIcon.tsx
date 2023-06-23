import { COLORS } from 'shared/common/constants'

import { IIconProps, SvgIcon } from './index'

export const ArrowRightIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d={'M4 12H20M20 12L14 6M20 12L14 18'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </SvgIcon>
    )
}

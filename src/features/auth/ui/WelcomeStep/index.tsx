import { Link, useNavigate } from 'react-router-dom'

import partyPopperImage from 'assets/party-popper.gif'
import { routes } from 'shared/common/routes'
import { Button, Typography } from 'shared/ui'
import { ArrowRightIcon } from 'shared/ui/icons'

import { AUTH_STEPS } from '../../config/constants'
import { Card } from '../Card'
import style from './index.module.scss'

export const WelcomeStep = () => {
    /* START - Get store values. */
    const navigate = useNavigate()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - WelcomeStep content. */

    const handleRegistrationButtonClick = () => {
        navigate(routes.auth.getRoute(AUTH_STEPS.USERNAME_STEP))
    }

    return (
        <Card>
            <div className={style.title}>
                <img src={partyPopperImage} alt={'Party popper'} height={32} width={32} />

                <Typography type={'heading6'} fontWeight={'700'}>
                    Добро пожаловать в Ачивки
                </Typography>
            </div>

            <Typography type={'body1'} align={'center'}>
                Небольшое описание проекта. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum harum in
                non odio officia perferendis quae repudiandae sequi ut!
            </Typography>

            <div className={style.footer}>
                <Button endIcon={ArrowRightIcon} onClick={handleRegistrationButtonClick}>
                    Зарегистрироваться
                </Button>

                <Typography type={'body2'} align={'center'}>
                    Уже есть аккаунт?{' '}
                    <Link to={''} className={style.footer_link}>
                        Войти
                    </Link>
                </Typography>
            </div>
        </Card>
    )
}

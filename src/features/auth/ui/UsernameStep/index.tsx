import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import manTechnologistImage from 'assets/man-technologist.gif'
import { routes } from 'shared/common/routes'
import { useTypedDispatch } from 'shared/hooks'
import { Button, Input, Typography } from 'shared/ui'
import { ArrowRightIcon } from 'shared/ui/icons'

import { AUTH_STEPS } from '../../config/constants'
import { setUsername } from '../../model'
import { Card } from '../Card'
import style from './index.module.scss'

const validationSchema = z.object({
    username: z.string({ required_error: 'Укажите как вас зовут' }),
})

export const UsernameStep = () => {
    /* START - Get store values. */
    const navigate = useNavigate()

    const dispatch = useTypedDispatch()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - UsernameStep content. */

    const handleFormSubmit = ({ username }: { username: string }) => {
        dispatch(setUsername(username))

        navigate(routes.auth.getRoute(AUTH_STEPS.USER_PHOTO_STEP))
    }

    return (
        <div>
            <div className={style.info}>
                <img src={manTechnologistImage} alt={'Party popper'} height={50} width={50} />

                <Typography type={'subtitle'} fontWeight={'700'}>
                    Как вас зовут?
                </Typography>

                <Typography type={'body1'}>Люди используют настоящее имя в нашем приложении :)</Typography>
            </div>

            <Card>
                <Formik
                    validationSchema={toFormikValidationSchema(validationSchema)}
                    initialValues={{ username: '' }}
                    onSubmit={handleFormSubmit}
                    validateOnBlur
                >
                    {({ isValid }) => (
                        <Form className={style.form}>
                            <Input name={'username'} placeholder={'Имя Фамилия'} isBlock />

                            <Button htmlType={'submit'} isDisabled={!isValid} endIcon={ArrowRightIcon}>
                                Дальше
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

import { ChangeEvent } from 'react'

import { useNavigate } from 'react-router-dom'

import cowboyHatFaceImage from 'assets/cowboy-hat-face.gif'
import { routes } from 'shared/common/routes'
import { useTypedDispatch, useTypedSelector } from 'shared/hooks'
import { Button, InputFile, Typography } from 'shared/ui'
import { ArrowRightIcon, UserBoldIcon } from 'shared/ui/icons'

import { AUTH_STEPS } from '../../config/constants'
import { setUserPhoto } from '../../model'
import { Card } from '../Card'
import style from './index.module.scss'

export const UserPhotoStep = () => {
    /* START - Get store values. */
    const navigate = useNavigate()

    const { username, photo } = useTypedSelector((state) => state.auth.formData)

    const dispatch = useTypedDispatch()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - UserPhotoStep content. */

    const avatar = photo ? URL.createObjectURL(photo) : null

    const handleNextButtonClick = () => {
        navigate(routes.auth.getRoute(AUTH_STEPS.PHONE_NUMBER_STEP))
    }

    const handleInputFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const imageFile = event.currentTarget.files ? event.currentTarget.files[0] : null

        // TODO add file size check
        if (!imageFile || imageFile.type.split('/')[0] !== 'image') {
            // TODO show error
            return
        }

        dispatch(setUserPhoto(imageFile))
    }

    return (
        <div>
            <div className={style.info}>
                <img src={cowboyHatFaceImage} alt={'Party popper'} height={50} width={50} />

                <Typography type={'subtitle'} fontWeight={'700'}>
                    Отлично, {username}!
                </Typography>

                <Typography type={'body1'}>Загрузите свою фотографию, чтобы вы смогли получать ачивки</Typography>
            </div>

            <Card>
                <div className={style.selfie}>
                    <InputFile accept={'image/*'} onChange={handleInputFileChange}>
                        {avatar ? (
                            <img className={style.selfie_image} src={avatar} alt={'Avatar'} />
                        ) : (
                            <div className={style.selfie_placeholder}>
                                <UserBoldIcon color={'gray300'} height={'80px'} width={'80px'} />
                            </div>
                        )}
                    </InputFile>

                    <InputFile accept={'image/*'} onChange={handleInputFileChange}>
                        <div className={style.selfie_button}>
                            {avatar ? 'Выбрать другую фотографию' : 'Выбрать фотографию'}
                        </div>
                    </InputFile>
                </div>

                <div className={style.nextButton}>
                    <Button isDisabled={!avatar} endIcon={ArrowRightIcon} onClick={handleNextButtonClick}>
                        Дальше
                    </Button>
                </div>
            </Card>
        </div>
    )
}

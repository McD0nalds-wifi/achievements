import { AUTH_STEPS } from 'features/auth/config/constants'
import { useCurrentStep } from 'features/auth/hooks/useCurrentStep'
import { UserPhotoStep, UsernameStep, WelcomeStep } from 'features/auth/ui'
import { useTypedSelector } from 'shared/hooks'

import style from './index.module.scss'

const Auth = () => {
    /* START - Get store values. */
    const currentStep = useCurrentStep()
    /* END - Get store values. */

    /* START - Tracking side-effects. */
    /* END - Tracking side-effects. */

    /* START - Auth content. */

    const name = useTypedSelector((state) => state.auth.username)

    console.log(name)

    return (
        <div className={style.container}>
            {currentStep === AUTH_STEPS.WELCOME_STEP && <WelcomeStep />}

            {currentStep === AUTH_STEPS.USERNAME_STEP && <UsernameStep />}

            {currentStep === AUTH_STEPS.USER_PHOTO_STEP && <UserPhotoStep />}
        </div>
    )
}

export default Auth

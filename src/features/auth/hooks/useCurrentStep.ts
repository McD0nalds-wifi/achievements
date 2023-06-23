import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { routes } from 'shared/common/routes'

import { AUTH_STEPS } from '../config/constants'
import { AuthStepsType } from '../config/types'

export const useCurrentStep = () => {
    const { step } = useParams()
    const navigate = useNavigate()

    const [currentStep, setCurrentStep] = useState<AuthStepsType>(AUTH_STEPS.WELCOME_STEP)

    useEffect(() => {
        if (!Object.values(AUTH_STEPS).includes(step as AuthStepsType)) {
            navigate(routes.auth.getRoute(AUTH_STEPS.WELCOME_STEP))
            return
        }

        setCurrentStep(step as AuthStepsType)
    }, [step, navigate])

    return currentStep
}

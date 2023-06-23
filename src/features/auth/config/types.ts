import { AUTH_STEPS } from './constants'

export type AuthStepsKeysType = keyof typeof AUTH_STEPS

export type AuthStepsType = typeof AUTH_STEPS[AuthStepsKeysType]

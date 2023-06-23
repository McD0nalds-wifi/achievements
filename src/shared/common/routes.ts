import { AuthStepsType } from 'features/auth/config/types'

export const routes = {
    auth: {
        getRoute: (step: AuthStepsType) => `/auth/${step}`,
        path: '/auth/:step',
        pageName: 'Авторизация',
    },
} as const

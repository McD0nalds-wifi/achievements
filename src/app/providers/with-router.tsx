import { ComponentType, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const withRouter = (Component: ComponentType) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<div>loading...</div>}>
                <Component />
            </Suspense>
        </BrowserRouter>
    )

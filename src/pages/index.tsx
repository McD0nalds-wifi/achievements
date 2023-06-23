import { Route, Routes, useLocation } from 'react-router-dom'

import Auth from 'pages/auth'
import { routes } from 'shared/common/routes'

const Routing = () => {
    const location = useLocation()

    const state = location.state as { backgroundLocation?: Location }

    return (
        <Routes location={state?.backgroundLocation || location}>
            <Route path={routes.auth.path} element={<Auth />} />
        </Routes>
    )
}

export default Routing

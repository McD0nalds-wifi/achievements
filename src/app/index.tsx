import './styles/base.scss'
import Routing from 'pages/index'

import { withRouter } from './providers/with-router'
import { whithStore } from './providers/with-store'

const App = () => {
    return <Routing />
}

export default whithStore(withRouter(App))

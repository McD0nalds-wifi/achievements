import { createRoot } from 'react-dom/client'

import App from 'app/index'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<App />)

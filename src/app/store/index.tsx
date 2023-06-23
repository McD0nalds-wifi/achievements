import { appApi, getFetchBaseQueryError } from './appApi'
import { store } from './store'
export { store, appApi, getFetchBaseQueryError }

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

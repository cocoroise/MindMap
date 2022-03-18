import { createStore, createLogger } from 'vuex';
import { store as main, MainStore, MainState } from '@/store/modules/main'

export interface RootState {
  main: MainState
}

export type Store = MainStore<Pick<RootState, 'main'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export const store = createStore({
  plugins,
  modules: {
    main
  }
})

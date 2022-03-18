import { MutationTree } from 'vuex'
import { MainState } from './state'
import { MainMutationTypes } from './mutation-types'

export type Mutations<S = MainState> = {
  [MainMutationTypes.SET_NAME](state: S, name: string): void
}

export const mutations: MutationTree<MainState> & Mutations = {
  [MainMutationTypes.SET_NAME](state: MainState, name: string) {
    state.name = name
  },
}

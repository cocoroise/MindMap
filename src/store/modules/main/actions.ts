import { ActionTree, ActionContext } from 'vuex'
import { MainState } from './state'
import { Mutations } from './mutations'
import { MainMutationTypes } from './mutation-types'
import { RootState } from '@/store'
import { UserActionTypes } from './action-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<MainState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ): void
}

export const actions: ActionTree<MainState, RootState> & Actions = {
  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
    setTimeout(() => {
      commit(MainMutationTypes.SET_NAME, '拿铁喵喵')
    }, 300)
  }
}

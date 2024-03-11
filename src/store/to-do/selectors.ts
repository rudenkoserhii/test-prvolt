import { RootState } from 'store/store'
import { StateToDos } from 'types'

export const toDosValue = (state: RootState): StateToDos => state.toDos

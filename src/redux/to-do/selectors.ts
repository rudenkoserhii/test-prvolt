import { RootState } from 'redux/store'
import { StateToDos } from 'types'

export const toDosValue = (state: RootState): StateToDos => state.toDos

import { createSlice } from '@reduxjs/toolkit'
import { ActionType, ToDoType } from 'types'

const initialState: { 'toDos': ToDoType[] } = {
  'toDos': [],
}

export const toDosSlice = createSlice({
  'name': 'toDos',
  initialState,
  'reducers': {
    addToDo(state, action: ActionType) {
      state.toDos = [...state.toDos, action.payload]
    },
    editToDo(state, action: ActionType) {
      const index = state.toDos.findIndex(
        (element) => element.id === action.payload.id,
      )
      const toDo: ToDoType = state.toDos[index]
      const updatedToDo: ToDoType = {
        ...state.toDos[index],
        'isComplited': !toDo.isComplited,
      }

      state.toDos[index] = updatedToDo
    },
  },
})

export const { addToDo, editToDo } = toDosSlice.actions

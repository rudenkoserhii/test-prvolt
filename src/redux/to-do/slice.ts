/* eslint-disable arrow-parens */
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
        element => element.id === action.payload.id,
      )
      const toDo: ToDoType = {
        'id': action.payload.id,
        'title': action.payload.title,
        'createdAt': action.payload.createdAt,
        'isComplited': action.payload.isComplited,
      }

      state.toDos[index] = toDo
    },
  },
})

export const { addToDo, editToDo } = toDosSlice.actions

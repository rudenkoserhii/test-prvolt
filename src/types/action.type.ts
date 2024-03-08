import { ToDoType } from 'types'

type ActionType = {
  payload: ToDoType
  type: string
}

export { type ActionType }

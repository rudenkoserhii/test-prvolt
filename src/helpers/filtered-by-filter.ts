import { ToDoType } from 'types'

export const filteredByFilter = (
  toDos: ToDoType[],
  filter: string,
): ToDoType[] => {
  return toDos.filter(({ isComplited }) => {
    switch (filter) {
      case 'all': {
        return true
      }
      case 'completed': {
        return isComplited !== false
      }
      case 'current': {
        return isComplited !== true
      }
      default: {
        return true
      }
    }
  })
}

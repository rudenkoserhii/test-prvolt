/* eslint-disable @typescript-eslint/no-extra-parens */
import React from 'react'
import ToDoItem from 'components/to-do-item/to-do-item'
import { useSelector } from 'react-redux'
import { toDosValue } from '../../redux/to-do/selectors'
import { filterValue } from '../../redux/filter/selectors'

function ToDoList(): React.JSX.Element {
  const { toDos } = useSelector(toDosValue)
  const { filter } = useSelector(filterValue)
  return (
    <ul>
      {toDos
        .filter(({ isComplited }) => {
          switch (filter) {
            case 'all': {
              return true
            }
            case 'completed': {
              return isComplited
            }
            case 'current': {
              return isComplited
            }
            default: {
              return true
            }
          }
        })
        .map((element, id) => (
          <ToDoItem key={id} toDo={element} />
        ))}
    </ul>
  )
}

export default ToDoList

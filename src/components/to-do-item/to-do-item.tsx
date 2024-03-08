import React from 'react'
import { Card } from 'flowbite-react'
import { ToDoType } from 'types'
import { AppDispatch } from 'redux/store'
import { useDispatch } from 'react-redux'
import { editToDo } from '../../redux/to-do/slice'

function ToDoItem({ toDo }: { toDo: ToDoType }): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()

  const handleClick = (): void => {
    dispatch(editToDo(toDo))
  }
  return (
    <Card onClick={handleClick} className="max-w-sm">
      <p className="pointer-events-none whitespace-normal max-w-full">
        {toDo.title}
      </p>
    </Card>
  )
}

export default ToDoItem

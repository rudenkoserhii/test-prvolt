/* eslint-disable max-len */
import React from 'react'
import { Card } from 'flowbite-react'
import { ToDoType } from 'types'
import { AppDispatch } from 'store/store'
import { useDispatch } from 'react-redux'
import { editToDo } from 'store/to-do/slice'

function ToDoItem({ toDo }: { toDo: ToDoType }): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()

  const handleClick = ({ target }: React.MouseEvent<HTMLDivElement>): void => {
    target && (target as HTMLDivElement).classList.add('shake-horizontal')
    setTimeout(
      () => (target as HTMLDivElement).classList.remove('shake-horizontal'),
      500,
    )
    dispatch(editToDo(toDo))
  }
  return (
    <Card
      onClick={handleClick}
      className={`w-[calc((100vw-6*1rem)/5)] min-w-[calc((100vw-6*1rem)/5)] h-[14rem] cursor-pointer ${
        toDo.isComplited ? 'bg-[rgba(255,255,0,0.2)]' : 'bg-[rgba(255,0,0,0.2)]'
      } transition-all border-4 introText border-[#dafc00] dark:text-[#dafc00]
 dark:border-[#dafc00]`}
    >
      <p
        className="h-full pointer-events-none
 overflow-hidden text-ellipsis"
      >
        {toDo.title}
      </p>
    </Card>
  )
}

export default ToDoItem

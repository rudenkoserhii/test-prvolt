import React from 'react'
import { Card } from 'flowbite-react'
import { ToDoType } from 'types'
import { AppDispatch } from 'store/store'
import { useDispatch } from 'react-redux'
import { editToDo } from 'store/to-do/slice'
import { COLORS } from 'consts'

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
      className={`w-[calc((100vw-6*1rem)/5)] min-w-[calc((100vw-6*1rem)/5)]
        h-[14rem] cursor-pointer
        bg-[${toDo.isComplited ? COLORS.completed : COLORS.current}]
        transition-all border-4 introText border-[${COLORS.text}]
        dark:text-[${COLORS.text}] dark:border-[${COLORS.text}]`}
    >
      <p className="h-full pointer-events-none overflow-hidden text-ellipsis">
        {toDo.title}
      </p>
    </Card>
  )
}

export default ToDoItem

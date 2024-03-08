import React from 'react'
import { Card } from 'flowbite-react'
import { ToDoType } from 'types'

function ToDoItem({ toDo }: { toDo: ToDoType }): React.JSX.Element {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleClick = (): void => {
    // eslint-disable-next-line no-console
    console.log('click')
  }
  return (
    <Card onClick={handleClick} className="max-w-sm">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {toDo.title}
      </p>
    </Card>
  )
}

export default ToDoItem

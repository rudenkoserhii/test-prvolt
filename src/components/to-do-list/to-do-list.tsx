/* eslint-disable @typescript-eslint/no-extra-parens */
import React, { useState } from 'react'
import ToDoItem from 'components/to-do-item/to-do-item'
import { useSelector } from 'react-redux'
import { toDosValue } from '../../redux/to-do/selectors'
import { filterValue } from '../../redux/filter/selectors'
import { NUMBERS } from '../../constants'
import PaginationComponent from 'components/pagination/pagination'

function ToDoList(): React.JSX.Element {
  const [page, setPage] = useState<number>(NUMBERS.firstPage)
  const { toDos } = useSelector(toDosValue)
  const { filter } = useSelector(filterValue)
  return (
    <>
      <ul>
        {toDos
          .filter(({ isComplited }) => {
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
          .map((element, id) => (
            <ToDoItem key={id} toDo={element} />
          ))}
      </ul>
      <PaginationComponent
        page={page}
        setPage={(next: number): void => setPage(next)}
      />
    </>
  )
}

export default ToDoList

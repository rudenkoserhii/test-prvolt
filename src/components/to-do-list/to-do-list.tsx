/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-extra-parens */
import React, { useEffect, useState } from 'react'
import ToDoItem from 'components/to-do-item/to-do-item'
import { useSelector } from 'react-redux'
import { toDosValue } from 'store/to-do/selectors'
import { filterValue } from 'store/filter/selectors'
import { NUMBERS } from '../../consts'
import PaginationComponent from 'components/pagination/pagination'
import { ToDoType } from 'types'
import { filteredByFilter } from 'helpers'

function ToDoList(): React.JSX.Element {
  const [page, setPage] = useState<number>(NUMBERS.firstPage)
  const { toDos } = useSelector(toDosValue)
  const { filter } = useSelector(filterValue)
  const filtered = [...filteredByFilter(toDos, filter)]
  const quantity = [...filteredByFilter(toDos, filter)].length
  useEffect(() => setPage(NUMBERS.firstPage), [filter])
  return (
    <>
      <ul
        className="flex justify-center items-center gap-[1rem] flex-nowrap
 w-full transition-all mb-auto mt-10"
      >
        {filtered
          .splice(page - 1, 5)
          .sort(
            (currentElement, nextElement) =>
              Number(new Date(currentElement.createdAt)) -
              Number(new Date(nextElement.createdAt)),
          )
          .map((element: ToDoType, id: number) => (
            <ToDoItem key={id} toDo={element} />
          ))}
      </ul>
      <PaginationComponent
        page={page}
        setPage={(next: number): void => setPage(next)}
        quantity={quantity}
      />
    </>
  )
}

export default ToDoList

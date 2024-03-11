import React, { useEffect, useState } from 'react'
import ToDoItem from 'components/to-do-item/to-do-item'
import { useSelector } from 'react-redux'
import { toDosValue } from 'store/to-do/selectors'
import { filterValue } from 'store/filter/selectors'
import { NUMBERS } from '../../consts'
import PaginationComponent from 'components/pagination/pagination'
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
          w-full transition-all mb-auto mt-10 slide-in-right"
      >
        {filtered
          .splice(page - 1, 5)
          .sort(
            (prev, next) => Number(new Date(prev.createdAt)) -
              Number(new Date(next.createdAt)),
          )
          .map(
            (element, id) => <ToDoItem key={id} toDo={element} />,
          )}
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

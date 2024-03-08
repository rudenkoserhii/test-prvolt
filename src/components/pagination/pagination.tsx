import React from 'react'
import { Pagination } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { toDosValue } from '../../redux/to-do/selectors'

function PaginationComponent({
  page,
  setPage,
}: {
  page: number
  setPage: (next: number) => void
}): React.JSX.Element {
  const { toDos } = useSelector(toDosValue)

  const onPageChange = (next: number): void => setPage(next)

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="table"
        currentPage={page}
        totalPages={toDos.length}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  )
}

export default PaginationComponent

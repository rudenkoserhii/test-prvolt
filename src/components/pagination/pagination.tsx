import React, { useState } from 'react'
import { Pagination } from 'flowbite-react'

function PaginationComponent(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number): void => setCurrentPage(page)

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="table"
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  )
}

export default PaginationComponent

/* eslint-disable max-len */
import React from 'react'
import { Pagination } from 'flowbite-react'

function PaginationComponent({
  page,
  setPage,
  quantity,
}: {
  page: number
  setPage: (next: number) => void
  quantity: number
}): React.JSX.Element {
  const onPageChange = (next: number): void => {
    const buttonNext =
      document.querySelector('.pagination__box')?.children[1].children[1]
        .children[0]
    if (next + 4 >= quantity) {
      buttonNext?.setAttribute('disabled', 'disabled')
    } else {
      buttonNext?.removeAttribute('disabled')
    }
    setPage(next)
  }
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="table"
        currentPage={page}
        totalPages={quantity}
        onPageChange={onPageChange}
        showIcons
        className="pagination__box"
      />
    </div>
  )
}

export default PaginationComponent

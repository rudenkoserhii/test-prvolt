import React, { useEffect } from 'react'
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
  const buttonNext =
      document.querySelector('.pagination__box')?.children[1].children[1]
        .children[0]

  const onPageChange = (next: number): void => {
    if (buttonNext && next + 4 >= quantity) {
      buttonNext?.setAttribute('disabled', 'disabled')
    } else {
      buttonNext?.removeAttribute('disabled')
    }
    setPage(next)
  }
  useEffect(() => {
    if (buttonNext && quantity < 6) {
      buttonNext?.setAttribute('disabled', 'disabled')
    } else {
      buttonNext?.removeAttribute('disabled')
    }
  }, [quantity])

  return (
    <div className="flex justify-center">
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

import PaginationComponent from 'components/pagination/pagination'
import ToDoList from 'components/to-do-list/to-do-list'
import React from 'react'

function Main(): React.JSX.Element {
  return (
    <div>
      <ToDoList />
      <PaginationComponent />
    </div>
  )
}

export default Main

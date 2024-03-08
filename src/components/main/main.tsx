import Filter from 'components/filter/filter'
import ToDoList from 'components/to-do-list/to-do-list'
import React from 'react'

function Main(): React.JSX.Element {
  return (
    <div>
      <Filter />
      <ToDoList />
    </div>
  )
}

export default Main

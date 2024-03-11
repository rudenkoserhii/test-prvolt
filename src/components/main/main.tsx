import Filter from 'components/filter/filter'
import ToDoList from 'components/to-do-list/to-do-list'
import React from 'react'

function Main(): React.JSX.Element {
  return (
    <div className="p-[1rem] flex flex-col h-full">
      <Filter />
      <ToDoList />
    </div>
  )
}

export default Main

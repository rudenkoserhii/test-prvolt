import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filter/slice'
import { AppDispatch } from 'redux/store'
import { ActionType } from 'types'

function Filter(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div>
      <Button.Group>
        <Button
          color="gray"
          onClick={(): ActionType => dispatch(changeFilter('all'))}
        >
          All
        </Button>
        <Button
          color="gray"
          onClick={(): ActionType => dispatch(changeFilter('completed'))}
        >
          Completed
        </Button>
        <Button
          color="gray"
          onClick={(): ActionType => dispatch(changeFilter('current'))}
        >
          Current
        </Button>
      </Button.Group>
    </div>
  )
}

export default Filter

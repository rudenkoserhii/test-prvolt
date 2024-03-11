/* eslint-disable complexity */
/* eslint-disable max-len */
import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from 'redux/filter/slice'
import { AppDispatch } from 'redux/store'
import { ActionType } from 'types'
import { filterValue } from '../../redux/filter/selectors'
import { FILTERS } from 'consts'

function Filter(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const { filter } = useSelector(filterValue)

  return (
    <div>
      <Button.Group className="flex justify-center">
        {FILTERS}
        <Button
          className="w-[150px] border-4 border-[#dafc00] focus:ring-0 "
          style={{
            'backgroundColor': filter === 'all' ? '#dafc00' : 'transparent',
            'color': filter === 'all' ? '#8442b9' : '#dafc00',
          }}
          onClick={(): ActionType => dispatch(changeFilter('all'))}
        >
          All
        </Button>
        <Button
          className="w-[150px] border-y-4 border-[#dafc00] focus:ring-0 "
          style={{
            'backgroundColor':
              filter === 'completed' ? '#dafc00' : 'transparent',
            'color': filter === 'completed' ? '#8442b9' : '#dafc00',
          }}
          onClick={(): ActionType => dispatch(changeFilter('completed'))}
        >
          Completed
        </Button>
        <Button
          className="w-[150px] border-4 border-[#dafc00] focus:ring-0 "
          style={{
            'backgroundColor': filter === 'current' ? '#dafc00' : 'transparent',
            'color': filter === 'current' ? '#8442b9' : '#dafc00',
          }}
          onClick={(): ActionType => dispatch(changeFilter('current'))}
        >
          Current
        </Button>
      </Button.Group>
    </div>
  )
}

export default Filter

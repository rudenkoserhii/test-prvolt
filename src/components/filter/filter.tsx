import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from 'store/filter/slice'
import { AppDispatch } from 'store/store'
import { ActionType } from 'types'
import { filterValue } from 'store/filter/selectors'
import { FILTERS } from 'consts'

function Filter(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const { filter } = useSelector(filterValue)
  return (
    <div>
      <Button.Group className="flex justify-center">
        {FILTERS.map((element, idx) => (
          <Button
            key={idx}
            className={`introText w-[150px] border-y-4
 border-x-${element === 'completed' ? '0' : '4'}
 border-[#dafc00] focus:ring-0
 bg-[${filter === element ? '#dafc00' : 'transparent'}]
  text-[${filter === element ? '#8442b9' : '#dafc00'}]
 enabled:hover:bg-[#dafc00] enabled:hover:text-[#8442b9]
 enabled:hover:transition-all transition-all`}
            onClick={(): ActionType => dispatch(changeFilter(element))}
          >
            {element.replace(element[0], element[0].toUpperCase())}
          </Button>
        ))}
      </Button.Group>
    </div>
  )
}

export default Filter

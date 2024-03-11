import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from 'store/filter/slice'
import { AppDispatch } from 'store/store'
import { ActionType } from 'types'
import { filterValue } from 'store/filter/selectors'
import { COLORS, FILTERS } from 'consts'
import { toDosValue } from 'store/to-do/selectors'
import { filteredByFilter } from 'helpers'

function Filter(): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const { filter } = useSelector(filterValue)
  const { toDos } = useSelector(toDosValue)

  return (
    <div>
      <Button.Group className="flex justify-center">
        {FILTERS.map((element, idx) => <Button
          key={idx}
          className={`introText w-[150px] border-y-4
              border-x-${element === 'completed' ? '0' : '4'}
              border-[${COLORS.text}] focus:ring-0 relative
              bg-[${filter === element ? COLORS.text : 'transparent'}]
              text-[${filter === element ? COLORS.background : COLORS.text}]
              enabled:hover:bg-[${COLORS.text}]
              enabled:hover:text-[${COLORS.background}]
              enabled:hover:transition-all transition-all`}
          onClick={(): ActionType => dispatch(changeFilter(element))}
        >
          {element.replace(element[0], element[0].toUpperCase())}
          <span className={`absolute -bottom-[2rem] left-1/2
            translate x-[-50%] text-[${COLORS.text}]`}>
            {filteredByFilter(toDos, element).length}
          </span>
        </Button>)}
      </Button.Group>
    </div>
  )
}

export default Filter

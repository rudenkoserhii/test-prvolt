import { createSlice } from '@reduxjs/toolkit'
import { FilterType } from 'types'
import { FilterEnum } from 'types/filter.type'

const initialState: FilterType = {
  'filter': 'all' as FilterEnum.All,
}

export const filterSlice = createSlice({
  'name': 'filter',
  initialState,
  'reducers': {
    changeFilter(state: FilterType, action) {
      state.filter = action.payload
    },
  },
})

export const { changeFilter } = filterSlice.actions

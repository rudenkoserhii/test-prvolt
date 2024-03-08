import { RootState } from 'redux/store'
import { FilterType } from 'types'

export const filterValue = (state: RootState): FilterType => state.filter

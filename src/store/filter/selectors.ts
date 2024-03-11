import { RootState } from 'store/store'
import { FilterType } from 'types'

export const filterValue = (state: RootState): FilterType => state.filter

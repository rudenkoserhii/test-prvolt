enum FilterEnum {
  All = 'all',
  Completed = 'completed',
  Current = 'current',
}

type FilterType = {
  filter: FilterEnum
}

export { type FilterType, type FilterEnum }

import { UnknownAction, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { toDosSlice } from 'store/to-do/slice'
import { filterSlice } from 'store/filter/slice'
import { StateToDos, FilterType } from 'types'

const toDosPersistConfig: PersistConfig<StateToDos> = {
  'key': 'toDos',
  storage,
}

const filterPersistConfig: PersistConfig<FilterType> = {
  'key': 'filter',
  storage,
}

export const store = configureStore({
  'reducer': {
    'filter': persistReducer<FilterType, UnknownAction>(
      filterPersistConfig,
      filterSlice.reducer,
    ),
    'toDos': persistReducer<StateToDos, UnknownAction>(
      toDosPersistConfig,
      toDosSlice.reducer,
    ),
  },
  'middleware': (getDefaultMiddleware) => getDefaultMiddleware({
    'serializableCheck': false,
  }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

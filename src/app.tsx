import React from 'react'
import Header from './components/header/header'
import Main from './components/main/main'
import FooterComponent from './components/footer/footer'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/store'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <div className="h-full w-full flex flex-col">
          <Header />
          <Main />
          <FooterComponent />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App

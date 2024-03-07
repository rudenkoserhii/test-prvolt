import React from 'react'
import Header from './components/header/header'
import Main from './components/main/main'
import FooterComponent from './components/footer/footer'

function App(): React.JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <FooterComponent />
    </div>
  )
}

export default App

import React from 'react'
import logo from '../../asserts/images/logo.png'
import { URL } from '../../consts'
import Input from 'components/input/input'

function Footer(): React.JSX.Element {
  return (
    <header className="w-full h-fit p-5 flex gap-10">
      <a href={URL.homePage} title="ToDo Manager">
        <img src={logo} alt="Logo ToDoManager" className="w-auto h-[5rem]" />
      </a>
      <Input />
    </header>
  )
}

export default Footer

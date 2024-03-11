/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-extra-parens */
import React, { useState } from 'react'
import { FloatingLabel, Toast } from 'flowbite-react'
import ProgressComponent from 'components/progress/progress'
import { DURATIONS, NUMBERS } from 'consts'
import { BsX } from 'react-icons/bs'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/store'
import { addToDo } from 'store/to-do/slice'

function Input(): React.JSX.Element {
  const [value, setValue] = useState<string>('')
  const [showToast, setShowToast] = useState<boolean>(false)

  const dispatch: AppDispatch = useDispatch()

  const showToastHandler = (): void => {
    setShowToast(true)
    setTimeout(() => {
      document.querySelector('#toast')?.classList.remove('scale-in-center')
      document.querySelector('#toast')?.classList.add('scale-out-center')
    }, DURATIONS.toastOut)
    setTimeout(() => {
      document.querySelector('#toast')?.classList.remove('scale-out-center')
      setShowToast(false)
    }, DURATIONS.toast)
    setValue('')
  }

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value.length < NUMBERS.maxValue) {
      setValue(target.value)
    } else {
      const toDo = {
        'id': nanoid(),
        'title': target.value,
        'createdAt': new Date(),
        'isComplited': false,
      }
      dispatch(addToDo(toDo))
      showToastHandler()
      setValue('')
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (value.length > 0) {
      const toDo = {
        'id': nanoid(),
        'title': value,
        'createdAt': new Date(),
        'isComplited': false,
      }
      dispatch(addToDo(toDo))
      showToastHandler()
      setValue('')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex-1 [&>div>div>label]:border-0 relative
 [&>div>div>label]:bg-[#8442b9] [&>div>p]:border-0 [&>div>p]:px-[4px]
 [&>div>p]:bg-[#8442b9] [&>div>p]:absolute [&>div>p]:left-1/2
 [&>div>p]:translate-x-[-50%] [&>div>p]:mt-[14px]`}
      >
        <FloatingLabel
          onChange={handleChange}
          value={value}
          variant="outlined"
          label="Type the ToDo title here..."
          helperText={`${NUMBERS.maxValue - value.length} / ${NUMBERS.maxValue}`}
          // color={color()}
          className={`text-[#dafc00] bg-transparent border-4 introText
 border-[#dafc00] dark:text-[#dafc00] dark:border-[#dafc00]
 dark:focus:border-[#dafc00] focus:border-[#dafc00] rounded-md
peer-focus:text-[#dafc00] peer-focus:dark:text-[#dafc00]`}
        />
        {value.length > 0 && (
          <div>
            <BsX
              onClick={(): void => setValue('')}
              title="Clear Input"
              className={`absolute top-[30px] right-3 transition-all
 -translate-y-1/2 cursor-pointer h-[1.5rem] w-[1.5rem]
 hover:bg-[#dafc00]/25 rounded-md hover:transition-all`}
            />
          </div>
        )}
        <ProgressComponent value={value.length} />
      </form>
      {showToast && (
        <Toast
          id="toast"
          className={
            'scale-in-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center text-[#dafc00] bg-[#dafc00]/50'
          }
        >
          ToDo was added!
        </Toast>
      )}
    </>
  )
}

export default Input

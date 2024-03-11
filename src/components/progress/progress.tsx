/* eslint-disable @typescript-eslint/no-extra-parens */
import React from 'react'
import { Progress } from 'flowbite-react'
import { NUMBERS } from 'consts'

function ProgressComponent({ value }: { value: number }): React.JSX.Element {
  return (
    <Progress
      progress={Math.ceil((value / NUMBERS.maxValue) * 100)}
      className="mt-[12px] bg-transparent dark:bg-transparent border-[#dafc00]
 border-4 h-5 [&>div]:text-[#dafc00] [&>div]:dark:text-[#dafc00] rounded-md
 [&>div]:bg-[#dafc00] [&>div]:h-5 [&>div]:rounded-none transition-all"
    />
  )
}

export default ProgressComponent

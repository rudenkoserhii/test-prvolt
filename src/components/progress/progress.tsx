import React from 'react'
import { Progress } from 'flowbite-react'
import { COLORS, NUMBERS } from 'consts'

function ProgressComponent({ value }: { value: number }): React.JSX.Element {
  return (
    <Progress
      progress={Math.ceil(value / NUMBERS.maxValue * 100)}
      className={`mt-[12px] bg-transparent dark:bg-transparent
        border-[${COLORS.text}] border-4 h-5 [&>div]:text-[${COLORS.text}]
        [&>div]:dark:text-[${COLORS.text}] rounded-md
        [&>div]:bg-[${COLORS.text}] [&>div]:h-5 [&>div]:rounded-none
        transition-all`}
    />
  )
}

export default ProgressComponent

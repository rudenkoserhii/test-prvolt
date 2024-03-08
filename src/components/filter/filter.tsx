import React from 'react'
import { Rating } from 'flowbite-react'

function Hardness(): React.JSX.Element {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  )
}

export default Hardness

import React from 'react'

const ButtonBox = ({colorRandom, handleClick}) => {
  return (
    // <div>ButtonBox</div>
    <button style={{background:colorRandom}} className="box__btn" onClick={handleClick} >&#62;</button>
  )
}

export default ButtonBox
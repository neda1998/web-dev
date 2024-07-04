import React from 'react'

interface Props {
    HeadingMini:string,
    HeadingPrimary:string
}

const SectionHeading = ({HeadingMini,HeadingPrimary} : Props) => {
  return (
    <div className='text-center'>
        <p className="text-[#0b6cad] md:text-[16px] text-[15px]">{HeadingMini}</p>
        <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#02073e]">{HeadingPrimary}</h1>
    </div>
  )
}

export default SectionHeading
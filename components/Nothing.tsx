import React from 'react'
import Image from 'next/image'

function Nothing() {
  return (
    <div className='app-nothing'>
        <Image src='/404.webp' width={170} height={160} alt="لا توجد بيانات"/>
        <h3 className="title">لا توجد بيانات</h3>
    </div>
  )
}

export default Nothing
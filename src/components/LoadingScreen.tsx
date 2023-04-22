import spinner from '@/assets/icons/spinner.svg'
import Image from 'next/image'
import React from 'react'

export default function LoadingScreen({error}: any){
  return(
    <div className="loading vertical">
      {!error ? "Операция выполняется, подождите немного..." : "Произошла ошибка: " + error}
      <Image src={spinner} alt="Spinner" className='spin'/>
    </div>
  )
}

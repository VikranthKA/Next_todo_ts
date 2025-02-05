import { inputProps } from '@/types'
import React from 'react'

const Input = ({name,type,placeholder,value}:inputProps) => {
  return (
    <div>
        <input name={name} type={type} placeholder={placeholder} value={value}
            className='block w-full p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-200'
        />
    
      
    </div>
  )
}

export default Input

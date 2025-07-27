import Spinner from '@/ui/Spinner'
import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col items-center justify-center flc gap-x-4'>
          <span className='text-lg text-secondary-500'>در حال بار گذاری</span>
          <Spinner />
    </div>
  )
}

export default Loading
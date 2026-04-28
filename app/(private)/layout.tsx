import Header from '@/components/Header'
import React, { FC } from 'react'

interface PrivateLayoutProps {
  children: React.ReactNode
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='flex-1 overflow-auto bg-gray-100'>
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout
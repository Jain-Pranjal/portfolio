
import React, { ReactNode } from 'react'
import GridPattern from '@/components/ui/grid-pattern'
import CustomCursor from '@/components/CustomCursor'; // Import the custom cursor

interface BackgroundProps {
  children: ReactNode
}

const Background: React.FC<BackgroundProps> = ({ children }) => {

  return (
    <div className="background">
        <GridPattern/>
      {children}
        <CustomCursor />
    </div>

  )

}



export default Background
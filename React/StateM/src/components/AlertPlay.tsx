import React, { FC, ReactNode } from 'react'

interface ToolbarProps {
  message: string;
  children: ReactNode
}
const Toolbar: FC<ToolbarProps> = ( {message, children} ) =>{
  return (
    <>
        <button onClick={() => alert(message)}>
            {children}
        </button>
    </>
  )
}


  const AlertPlay: FC = () => {
    return (
        <div>
            <Toolbar message="Playing">
                Play Movie
            </Toolbar>
            <Toolbar message='Uploading'>
                Uploading!
            </Toolbar>
        </div>

    )
  }

export default AlertPlay

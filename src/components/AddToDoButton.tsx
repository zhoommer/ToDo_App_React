import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const AddToDoButton:React.FC = () => {
  return (
    <div className='absolute bottom-20 right-20 border border-blue-700 rounded-full bg-blue-700 p-1 hover:bg-blue-500'>
        <IconButton color='primary'>
            <Add className='text-white'/>
        </IconButton>
    </div>
  )
}

export default AddToDoButton

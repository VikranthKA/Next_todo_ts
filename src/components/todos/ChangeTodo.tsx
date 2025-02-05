import React from 'react'
import Form from '../ui/form'
import Input from '../ui/input'
import Button from '../ui/button'
import * as actions from "@/actions"
import { todoProps } from '@/types'
import { FaCheck } from 'react-icons/fa'


const ChangeTodo = ({todo}:{todo:todoProps}) => {
  return (
<Form action={actions.changeStatus}>
    <Input name="inputId" value={todo?.id} type='hidden'>
    
    </Input>

    <Button text={<FaCheck/>} type='submit' actionButton bgColor={todo?.isCompleted ? `bg-green-500` : `bg-blue-500` }> 

    </Button>
</Form>
  )
}

export default ChangeTodo

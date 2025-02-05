import { todoProps } from "@/types";
import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Form from "../ui/form";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/actions";
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
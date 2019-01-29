export const addTodo = newTodo => {
  return {
    type: "ADD_TODO",
    newTodo
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

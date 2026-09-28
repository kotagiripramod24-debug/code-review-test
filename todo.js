function addTodo(todos, title) {
  if (!title || title.trim() === "") {
    throw new Error("Todo title is required");
  }

  const todo = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  return [...todos, todo];
}

module.exports = { addTodo };

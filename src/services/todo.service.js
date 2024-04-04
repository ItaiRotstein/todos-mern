
export const fetchTodos = async (filter) => {
  console.log('from fetchtodos from service', filter);
  try {
    const res = await fetch(`http://192.168.1.152:8000/api/todos/${filter ? filter : ''}`);
    const data = await res.json();
    return (data)
  } catch (error) {
    console.log("Error fetching data", error);
  } 
}
export const addTodo = async (newTodo) => {
  try {
    await fetch("http://192.168.1.152:8000/api/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.log("Error adding data", error);
  }
};

export const updateTodo = async (updatedTodo) => {
  try {
    await fetch(`http://192.168.1.152:8000/api/todos/${updatedTodo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
  } catch (error) {
    console.log("Error updating data", error);
  }
};

export const deleteTodo = async (_id) => {
  await fetch(`http://192.168.1.152:8000/api/todos/${_id}`, {
    method: 'DELETE'
  });
};


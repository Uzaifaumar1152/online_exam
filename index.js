document.getElementById('btn').addEventListener('click', addTodo);

function addTodo() {
  const input = document.getElementById('input');
  const todoText = input.value.trim();

  if (todoText !== "") {
    const li = document.createElement('li');
    
   
    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);


    document.getElementById('list').appendChild(li);

    input.value = "";
  }
}

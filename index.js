document.getElementById('btn').addEventListener('click', addTodo);

function addTodo() {
  const input = document.getElementById('input');
  const todoText = input.value.trim();

  if (todoText !== "") {
    const li = document.createElement('li');
    
   
    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);

     // Add checkbox to mark as completed
     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
       if (checkbox.checked) {
         li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });
    li.appendChild(checkbox);

        // Add delete button
    const deleteButton = document.createElement('button-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      li.remove();
     });
    li.appendChild(deleteButton);



    document.getElementById('list').appendChild(li);

    input.value = "";
  }
}

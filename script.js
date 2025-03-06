function AddTask() {
  const inputField = document.getElementById('inputTask');
  const taskText = inputField.value.trim(); 


  if (taskText === "") {
      alert("Please enter a task before adding!"); 
      return; 
  }

  const newTask = document.createElement('li');
  const listTask = document.getElementById('listTask');
  newTask.textContent = taskText;
  listTask.appendChild(newTask);
  inputField.value = ""; 

  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deletebtn = document.createElement('button');
  deletebtn.textContent = 'Delete';
  newTask.appendChild(deletebtn);
  deletebtn.onclick = function () {
      newTask.remove();
  };
}

document.getElementById('Completed').onclick = function () {
  let tasks = document.querySelectorAll('li');
  tasks.forEach(function (task) {
      if (task.classList.contains('completed')) {
          task.style.display = 'block';
      } else {
          task.style.display = 'none';
      }
  });
};

document.getElementById('all').onclick = function () {
  let tasks = document.querySelectorAll('li');
  tasks.forEach(function (task) {
      task.style.display = 'block';
  });
};

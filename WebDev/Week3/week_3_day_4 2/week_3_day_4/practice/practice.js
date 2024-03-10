/*
TO DO APP

1. EASY: First write out the function that will add on to the existing list from the users input.
2. EASY: Create a button at the bottom of the list to clear out the whole list.
3. HARD: With each item that is added, also add a delete button. NOTE: need a running count to keep track of which id element to delete.
4. NIGHTMARE: Using the running count, can you figure out a way to edit the task? NOTE: need to add an edit button
*/

var taskNumber = 0;

function addTask() {
  taskNumber += 1;
  var task = document.getElementById("displayName").value;
  var newTaskElement = document.createElement("li");
  // newTaskElement.innerText = task;

  newTaskElement.innerHTML = `<span id= "${taskNumber}> ${task} <button onclick = "deleteTask()" id = "${taskNumber.button}">Delete</button> <button onclick = "editTask()">Edit</button> </span>`

{/* <span id="${taskNumber}"> ${task} <button onclick="updateTask()">Edit</button> <button onclick="removeTask()" id="${taskNumber.button}">Delete</button> </span> */}


  var dateCol = document.getElementById("dateCol");
  dateCol.append(newTaskElement);

}

function deleteTask() {
  console.log('delete task')
}

function editTask() {
  console.log('update task')
}
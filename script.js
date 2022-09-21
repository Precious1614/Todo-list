function addItems() {
  let todoSearch = document.querySelector("input");
  if (todoSearch.value == "") {
    alert(`Write out what you plan TO DO`);
  } else {
    let todoList = document.querySelector("ul");
    let eachTodos = document.createElement("li");
    let todoText = document.createTextNode(todoSearch.value);
    let deleteButton = document.createElement("button");
    let deleteText = document.createTextNode("Delete");

    eachTodos.appendChild(todoText);
    todoList.appendChild(eachTodos);
    deleteButton.appendChild(deleteText);
    eachTodos.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      todoList.removeChild(eachTodos);
    });
    
    todoSearch.value = "";
  }

  //   alert(todoSearch.value);
}

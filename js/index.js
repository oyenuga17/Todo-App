
let MODE = "ADD";
let editingIndex = null;

const todoInputField = document.querySelector(".form__input")
const todoListWrapper = document.querySelector(".todo__list")
const formButton = document.querySelector(".form__btn");

function onEditClick(e) {
    formButton.innerText = "Edit"
    const editButton = e.target;
    const li = editButton.parentNode.parentNode
    const todo__text = li.querySelector(".todo__text").innerText
    todoInputField.value = todo__text
    MODE= "EDIT";
    editingIndex = li.id;

}


function addListenersToEditButtons() {
    const buttonCollection = document.querySelectorAll(".edit__btn");
    const lastButton = buttonCollection[buttonCollection.length - 1];
    lastButton.addEventListener("click", onEditClick);
}

function deleteTodo(e) {
    const deleteButton = e.target;

    const li = deleteButton.parentNode.parentNode

    li.remove();

}

function addListenersToDeleteButtons() {
    const buttonCollection = document.querySelectorAll(".delete__btn");
    const lastButton = buttonCollection[buttonCollection.length - 1];

    lastButton.addEventListener("click", deleteTodo);

}


function addTodoToList(todo) {

    let li = document.createElement("li");

    li.id = `todo-${todoListWrapper.getElementsByTagName('li').length}`;

    li.innerHTML = ` 
                    <div class="input__wrapper">
                        <input class="todo__checkbox" type="checkbox" />
                        <span class="todo__text"> ${todo} </span>
                    </div>
                    <div>
                        <button id="edit_btn" class="btn edit__btn">
                            edit
                        </button>
                        <button id="delete_btn" class="btn delete__btn">
                            delete
                        </button>
                    </div>    
                        
                    `


    li.classList.add("todo__list__section")
    todoListWrapper.appendChild(li);

    addListenersToDeleteButtons();
    addListenersToEditButtons();
    todoInputField.value = ''

}


function editTodo(todo) {
    const todoLi = document.getElementById(editingIndex);
    todoLi.querySelector('.todo__text').innerText = todo;
    MODE = "ADD";
    editingIndex = null;
    todoInputField.value = ''
    formButton.innerText = "Add"
}

function validateForm(x) {
  if (x == "" || x == null ) {
    alert("add a todo");
      return false 
    }
    return true
}  

function TodoFormSubmit(event) {
   event.preventDefault();
  
const todoInputValue = todoInputField.value;

if (validateForm(todoInputValue)) {
        switch (MODE) {
        case "EDIT":
            editTodo(todoInputValue);
            break;
        default:
            addTodoToList(todoInputValue);
    }
    }  

  }

function init() {
    const form = document.querySelector(".form")
    form.addEventListener("submit", TodoFormSubmit);

}

init()




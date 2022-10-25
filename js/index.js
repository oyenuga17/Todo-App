function deleteTodo() {
 
}



function addListenersToDeleteButtons() {
    const buttonCollection = document.querySelectorAll(".delete__btn");
    const lastButton = buttonCollection[buttonCollection.length - 1];
    
    lastButton.addEventListener("click", deleteTodo);
}


function showTodoOutputValue(todo) {
    let li = document.createElement("li");

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

}



function TodoFormSubmit(event) {
    event.preventDefault();

    const todoInputValue = todoInputField.value;

    showTodoOutputValue(todoInputValue);

}


function init() {
    form = document.querySelector(".form")
    editButton = document.querySelector(".edit__btn")
    deleteBtn = document.querySelector(".delete__btn")
    todoInputField = document.querySelector(".form__input")

    todoListWrapper = document.querySelector(".todo__list")



    form.addEventListener("submit", TodoFormSubmit);

    editButton.addEventListener("click", EditTodo);
    deleteBtn.addEventListener("click", DeleteTodo);

}

init()




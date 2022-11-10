function onSubmitForm(e){
    e.preventDefault()
    const formInput = document.getElementById('todo-input')
    const formInputValue = formInput.value
    formInput.value = '';
    showAllTodo(formInputValue)
}

function editTodo(e){
    const clickedEditButton = e.target;
    const spanElement = clickedEditButton.parentNode.parentNode.children[1];
    const inputElement = clickedEditButton.parentNode.parentNode.children[2];
    
    if (e.target.innerHTML === 'Edit'){
        clickedEditButton.innerHTML = 'Save';
        inputElement.hidden = false;
        spanElement.hidden = true;
        inputElement.focus();
    }else{
        spanElement.innerHTML = inputElement.value;
        spanElement.hidden = false;
        inputElement.hidden = true;
        clickedEditButton.innerHTML = 'Edit';
    }
}

function addListenerToEdit(){
    const allEditButtons = document.querySelectorAll('.edit-btn')
    const lastEditButton = allEditButtons[allEditButtons.length - 1];
    lastEditButton.addEventListener('click', editTodo);
}

function deleteTodo(e){
    const clickedDelButton = e.target;
    const entireLiPerTodo = clickedDelButton.parentNode.parentNode.parentNode
    entireLiPerTodo.remove();
}

// This is called because it adds event listener to delete
function addListenerToDelete(){
    const allDeleteButtons = document.querySelectorAll('.del-btn')
    const lastDelButton = allDeleteButtons[allDeleteButtons.length - 1];
    lastDelButton.addEventListener('click', deleteTodo);
}

function showAllTodo(TodoItem){
    let newList = document.createElement('li');
    newList.innerHTML = `
        <div class="todo-list-item">
            <input type="checkbox" class="snd-input">
            <span>${TodoItem}</span>
            <input class="edit-todo-input" value=${TodoItem} hidden/>
            <div class="todo-btn">
                <button id="editbtn"  class="edit-btn pdn-border">Edit</button>
                <button id="deletebtn" class="del-btn pdn-border">Delete</button>
            </div>
        </div>
    `
    const newListContainer = document.getElementById('todo-ul');
    newListContainer.appendChild(newList);

    addListenerToEdit();
    addListenerToDelete();
}


const submitForm = document.getElementById('todoFormSubmit');
const submitTodoForm = submitForm.addEventListener('submit', onSubmitForm);

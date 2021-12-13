const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    
    //아이디가 같은 것을 삭제하는 대신 아이디가 같지 않은것들만 필터로 거르고 toDos 배열을 업데이트 시켜준다.
    //Date.now() 가 String 이기 때문에 비교가 되지 않으므로 한쪽을 Integer 또는 String 으로 바꿔준다.
    toDos = toDos.filter((i) => i.id !== parseInt(li.id));
    saveToDo();
}

function saveToDo() {
    //localStorage value 값은 문자열로 저장해야 되서 JSON.stringify 를 사용하여 배열을 문자열로 바꿔준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function showToDo(toDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.setAttribute("id", toDoObj.id);

    span.innerText = toDoObj.text;
    deleteBtn.innerText = "Delte";
    deleteBtn.addEventListener("click", deleteToDo);

    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();

    const toDo = toDoInput.value;
    const toDoObj = {
        //integer 인줄 알았는데 string 으로 잡힌다.
        id: Date.now(),
        text: toDo,
    };

    toDoInput.value = "";

    toDos.push(toDoObj);
    showToDo(toDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        showToDo(element);
    });
}
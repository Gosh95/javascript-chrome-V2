const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoListSecond = document.getElementById("todo-list-second");

let idx = 1;
let toDos = [];

const TODOS_KEY = "toDos";

function confirmComplete(text) {
    return confirm(`정말로 "${text}" 다했니?`);
}
function completeToDo(event) {
    const li = event.target.parentElement;

    const text = String(li.innerText).replace("complete", "");
    
    if(confirmComplete(text)) {
        alert("수고하셨습니다.");
        li.remove();
    } else {
        alert("조금만 더 힘내자!");
    }
    
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
    const completeBtn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.setAttribute("id", toDoObj.id);

    span.innerText = toDoObj.text;
    
    completeBtn.innerText = "complete";
    completeBtn.addEventListener("click", completeToDo);

    if(toDoObj.id % 2 == 1) {
        toDoList.appendChild(li);
    } else {
        toDoListSecond.appendChild(li);
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const toDo = toDoInput.value;
    const toDoObj = {
        //integer 인줄 알았는데 string 으로 잡힌다.
        id: idx++,
        text: toDo,
    };

    toDoInput.value = "";

    if(toDos.length >= 10) {
        return alert("🙉 할 일이 너무 많습니다.");
    } else {
        toDos.push(toDoObj);
    }

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
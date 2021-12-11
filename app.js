const age = parseInt(prompt("how old r u?"));

function checkAge(age) {
    if(age > 19) {
        alert("성인입니다.");
    } else {
        alert("미성년자입니다.");
    }
}

checkAge(age);
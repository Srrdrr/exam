let err = +prompt("1-sonni kiriting:");
let wew = prompt("Amalni tanlang:\n1) +\n2) -\n3) *\n4) /").trim();
let bob = +prompt("2-sonni kiriting:");

let operator = "";

if (wew === "1") {
    operator = "+";
} else if (wew === "2") {
    operator = "-";
} else if (wew === "3") {
    operator = "*";
} else if (wew === "4") {
    operator = "/";
} else {
    alert(" 1 dan 4 gacha son kirit BOMBOCLART!");
    operator = "?";
}

document.querySelector(".--qoshiluvchi").textContent = err;
document.querySelector(".---qoshiluvchi").textContent = operator;
document.querySelector(".----qoshiluvchi").textContent = bob;

document.querySelector(".button").addEventListener("click", function () {
    let result;

    if (operator === "+") {
        result = err + bob;
    } else if (err === "-") {
        result = err - bob;
    } else if (operator === "*") {
        result = err * bob;
    } else if (operator === "/") {
        if (bob === 0) {
            result = " 1 dan 4 gacha bolish kk!!";
        } else {
            result = birinchi / bob;
        }
    } else {
        result = "Amal noto‘g‘ri tanlangan!";
    }

    document.querySelector(".jovobi-chiqsh").innerHTML = `<p style="text-align:center; margin-top:40px;">Javob: ${result}</p> `
});
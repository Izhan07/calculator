let str = "";
let buttons = document.querySelectorAll(".btn")
let arr = Array.from(buttons);
let screen = document.querySelector("input");





arr.forEach((btn) => {
    btn.addEventListener("click", (evl) => {
        if (evl.target.innerText == '=') {
            str = eval(str);
            screen.value = str;

        } 
        else if (evl.target.innerText == "C") {
            str = "";
            screen.value = str;
        }



        else {
            if (evl.target.innerText !== "=" || evl.target.innerText !== "DE" || evl.target.innerText !== "C") {
                str = str + evl.target.innerText;
                screen.value = str;
            }

        }



    })
})


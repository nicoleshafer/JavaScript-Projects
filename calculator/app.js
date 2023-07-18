let screen = document.getElementsByClassName("span")

let arr;
let num;

const add = () => {
    for(let i = 0; i<arr.length; i++){
        num+=i
    }
    screen.innerText=num
}
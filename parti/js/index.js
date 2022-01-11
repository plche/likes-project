let element = document.querySelector(".likes-count");
let count = 3;
function add1() {
    count++;
    element.innerText = count + " Like(s)";
}
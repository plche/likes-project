let likes = [9, 12, 9];

function overOn(b) {
    b.classList.add("over");
}

function overOff(b) {
    b.classList.remove("over");
}

function add1(b) {
    if (b.classList.contains("u1")) {
        likes[0]++;
        document.getElementById("u1").innerText = likes[0] + " Likes(s)";
    }
    if (b.classList.contains("u2")) {
        likes[1]++;
        document.getElementById("u2").innerText = likes[1] + " Likes(s)";
    }
    if (b.classList.contains("u3")){
        likes[2]++;
        document.getElementById("u3").innerText = likes[2] + " Likes(s)";
    }
}
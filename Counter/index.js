let countEl = document.getElementById("count-el");
let saveCount = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    saveCount.textContent += count + " - ";
    count = 0;
    countEl.innerText = count;
}

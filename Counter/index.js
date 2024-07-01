let countEl = document.getElementById("count-el")
let saveCount = document.getElementById("save-el")
let count = 0
function increment (){
    countEl.innerText = count
    count ++
    console.log(count.innerText)

}

function save(){
    saveCount.textContent += count + " - "
    count.innerText = 0
}
const input = document.getElementById("favchap");
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByClassName("list")[0];


button.addEventListener('click', () => {
console.log("hello");
let li = document.createElement('LI');
li.textContent = input.value;
let deleteButton = document.createElement('BUTTON');
deleteButton.textContent = "❌";
li.appendChild(deleteButton);
list.appendChild(li);
input.value = "";
input.focus();
deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});
});
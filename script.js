const listContainer = document.querySelector(".list-container");
let input = document.querySelector(".input");
const addTaskBtn = document.querySelector(".addTaskBtn");

addTaskBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("You have to write something😑");
  } else {
    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);

    let span = document.createElement("span");
    let spanText = document.createTextNode("\u00d7");

    span.appendChild(spanText);

    li.appendChild(liText);
    li.appendChild(span);
    li.innerHtml = input.value;

    listContainer.appendChild(li);

    // li.addEventListener("click", () => {
    //   li.classList.toggle("checked");
    // });

    // span.addEventListener("click",(e)=>{
    //   e.remove()
    // })

    

  }
  input.value = "";
  saveData()
});


listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
});


let saveData = ()=>{
  localStorage.setItem("data",listContainer.innerHTML);
}

let getData = ()=>{
  
 listContainer.innerHTML = localStorage.getItem("data")
}
getData()
let inputBox=document.querySelector("#input-box");
let listContainer=document.querySelector(".list-container");
addTask=()=>{
    if(inputBox.value ===''){
        alert("Please type any task ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
   
});

saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}
showData=()=>{ 
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();
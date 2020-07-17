var myInput  =   document.querySelector(".myinput");
var btn      =   document.querySelector(".btn");
var saveData =   []; 
btn.addEventListener("click",function(){
 setTask();   
})

setTask = function(){
   var tasks;
  tasks = myInput.value;
  // save input value to local storage;
  
  if (localStorage.tasks) {
    saveData = JSON.parse(localStorage.tasks);
  }
  saveData.push(tasks);
  localStorage.tasks = JSON.stringify(saveData);
  retrieve();
};


  // get stored inputvalue;
  retrieve = function(){
    var y = document.querySelector("#ul");
    y.innerHTML = '';
    
    for(var i = 0; i < saveData.length; i++){
      var z = document.createElement('li');
      z.innerHTML =`<li>${saveData[i]}</li>`;
       y.appendChild(z);
    } 
  

    myInput.value = "";
  };

  window.onload = function(){
    if (localStorage.tasks) {
      saveData = JSON.parse(localStorage.tasks);
      retrieve();
    }
  }
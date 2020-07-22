var myInput  =   document.querySelector(".myinput");
var btn      =   document.querySelector(".btn");
var saveData =   []; 
btn.addEventListener("click",function(){
 setTask();   
})

setTask = function(){
  //  var tasks;
  //  tasks = myInput.value;
  var tasks =
    { name: myInput.value, 
      completed: false,
    };


  
  
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
      var input = `<input type="checkbox" id = check-${i} >`;
      z.innerHTML = `${input} ${saveData[i]}`;
       y.appendChild(z);
      //  var checkValue = document.querySelector(`#check-${i}`);
      //  console.log(checkValue);
      //  z.addEventListener("click",function(){
        
        //  console.log(checkValue);
        //  if(checkValue.value){
        //   //  console.log(checkValue.value);
        //    z.style.setProperty("text-decoration", "line-through");
        //  }
      //  })
    } 
    

    myInput.value = "";
  };
  // var getList = document.querySelectorAll('li');
  // for ()


// y.addEventListener( "click", function () {
//   
// });


  window.onload = function(){
    if (localStorage.tasks) {
      saveData = JSON.parse(localStorage.tasks);
      retrieve();
    }
  }



// ele.style.setProperty("text-decoration", "line-through");
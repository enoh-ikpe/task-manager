  var list = document.querySelector("#ul");
  var input = document.getElementsByClassName(".myinput");
  var btn = document.querySelector(".btn");
 

  btn.addEventListener("click",function(){
      var toDo;
          toDo = input.value;
        localStorage.toDo = toDo;
  

  if (localStorage.getItem('toDo') === null){
	     var toDoList = [];
		 toDoList.push(toDo);
		 localStorage.setItem('toDoList', toDoList);
   }
   else{
	   var toDoList = localStorage.getItem('toDoList');
	    toDoList.push(toDo);
		 localStorage.setItem('toDoList', toDoList);
   }
    	// getToDo();
});



// var getToDo = function(){
//  var toDoList = localStorage.getItem("toDoList");
//  list.innerHTML = '';
//  for (var i =0; i < toDoList.length; i++){
//    var todo_ = `<li>${toDoList[i]}</li>`;
//  }


// }
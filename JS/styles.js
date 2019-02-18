//create a function
function trackInt(){
  //create variables
  input001 = parseInt(document.getElementById("triangleValue1").value)
  input002 = parseInt(document.getElementById("triangleValue2").value)
  input003 = parseInt(document.getElementById("triangleValue3").value)
  //input sides
  length1 = input001 + input002
  length2 = input002 + input003
  length3 = input003 + input001
  //control flow 
    if(length1 == length2 && length2 == length3 && length3 == length1){
    alert("An equilateral triangle")
    }
    else if(length1 !== length2 && length2 == length3){
    alert("An iscosceles triangle")
    }
    else if(length3 !== length2 && length2 == length1){
    alert("An iscosceles triangle")
    }
    else if(length1 !== length2 && length2 !== length3 && length3 !== length1){
    alert("A scalene triangle")
    }
    else if(length1 >= length2 || length2 >= length3 || length3 >= length1){
    alert("Not a triangle")
    }
  }
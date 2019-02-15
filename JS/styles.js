//create a function
function trackInt(){
  //create variables
  entry001 = parseInt(document.getElementById(triangleValue1).value)
  entyr002 = parseInt(document.getElementById(triangleValue2).value)
  entry003 = parseInt(document.getElementById(triangleValue3).value)
  //input sides
  length1 = entry001 + entry002
  length2 = entry002 + entry003
  lenght3 = entry003 + entry001
  //control flow
  if(length1 == length2 && length2 == length3 && length3 == length1){
    alert ("equilateral")
    }
    else if(length1 !== length2 && length2 == length3){
    alert ("isocseles")
    }
    else if(length3 !== length2 && length2 == length1){
      alert ("isocseles")
      }
    else if(length1 !== length2 && length2 !== length3 && length3 !== length1){
      alert ("Scalene")
      }
    else if(length1 >= length2 || length2 >= length3 || length3 >= length1){
      alert("Not a triangle")
      }
}
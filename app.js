function getNumber(){
  var number1=parseInt(document.getElementById("number1").value)
  var number2=parseInt(document.getElementById("number2").value)
  return {"number1":number1,"number2":number2}
}

function setNumber(number){
  document.getElementById("answer").innerHTML=number
}

function add(){
  debugger
  var input=getNumber();
  var output=input.number1+input.number2;
  setNumber(output)
}

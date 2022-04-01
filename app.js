function getNumber(){
  var number1=parseInt(document.getElementById("number1").value)
  var number2=parseInt(document.getElementById("number2").value)
  return {"number1":number1,"number2":number2}
}

function setNumber(number){
  document.getElementById("answer").innerHTML=number
}

function add(){
  var input=getNumber();
  var output=input.number1+input.number2;
  setNumber(output)
}


function sub(){
  var input=getNumber();
  var output=input.number1-input.number2;
  setNumber(output)
}

function mul(){
  var input=getNumber();
  const {number1,number2}=input;
  var output=number1*number2;
  setNumber(output)
}

function div(){
  var input=getNumber();
  const {number1,number2}=input;
  var output=number1/number2;
  setNumber(output)
}

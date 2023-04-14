const number_buttons = document.getElementsByName('data-number');
const operations_buttons = document.getElementsByName('data-operations');
const additionals_buttons = document.getElementsByName('data-addtional');

var result = document.getElementById('result');
let number_Now = '';
let number_before = '';
let operation_new = undefined;
let addition_now = undefined;
let ima = '';

number_buttons.forEach(function(buttons){
  buttons.addEventListener('click', function(){
    add_Number(buttons.innerText);
  })
});

operations_buttons.forEach(function(operations){
  operations.addEventListener('click', function(){
    select_operations(operations.innerText);
  })
});

additionals_buttons.forEach(function(additionals){
  additionals.addEventListener('click', function (){
    select_additionals(additionals.innerText);
  })
})

additionals_buttons[0].addEventListener('click', function(){  //C
  clear();
  update_display();
})
additionals_buttons[1].addEventListener('click',function(){  // Seno
    cal = Math.asin(number_Now);
    number_Now = cal;
    update_display();
})

additionals_buttons[2].addEventListener('click',function(){ //raiz  
  math_OneOperation(0.5);
  update_display();
})
    
additionals_buttons[3].addEventListener('click',function(){ // x²
  math_OneOperation(2);
  update_display();
})
    
additionals_buttons[4].addEventListener('click',function(){ // +/-
  checker('-',  number_Now == '');
  update_display;
})
    
additionals_buttons[5].addEventListener('click',function(){ // PI
  number_Now = Math.PI;      
  update_display();
})
    
additionals_buttons[6].addEventListener('click',function(){ // Punto
  checker('.',ima == '');
  update_display;
})

additionals_buttons[7].addEventListener('click',function(){ // Igual
  answer();
  update_display();
})

function answer(){
  let cal;
  const before = parseFloat(number_before);
  const now = parseFloat(number_Now);
  if(isNaN(before) || isNaN(now)) return;
    switch(operation_new){
    case "+":
      cal = before + now;
      break;
    case "-":
      cal = before - now;
        break;
    case "x":
      cal = before * now;
      break;
    case "/":
      cal = before / now;
      break;
    case "^":
      cal = Math.pow(before,now);
      break;
    case "%":
      cal = (now * before)/100;
      break;
    default:
      return;
  }
  operation_new = undefined;
  addition_now = undefined;
  number_before = '';
  number_Now = cal;
}
//////////////funtions primary
function add_Number(num){
  number_Now = number_Now.toString() + num.toString();
  update_display();
}

function select_operations(operation){
  if(number_Now === '') return;
  if(number_before !== ''){
    answer();
  }
  operation_new = operation.toString();
  number_before = number_Now;
  number_Now = '';
}

function update_display(){
  result.value = number_Now;
}

function clear(){
  number_Now = '';
  number_before = '';
  operation_new = undefined;
  addition_now = undefined;
  respuesta = '';
}
function select_additionals(addition){
  if(number_Now === '') return;
  if(number_Now !== ''){ 
  }
    addition_now = addition.toString();
}

function checker(a,b){
  if (number_Now.includes(a) == false && b) {
    number_Now+= a;
    return(number_Now);
    }else if(number_before.includes(a) == false){
    number_before+=a;
    return(number_before);
   }
}

function math_OneOperation(a){
  cal = ''; 
  cal = Math.pow(number_Now,a);
  number_Now = cal;
}
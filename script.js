let output=document.getElementById('output-value');
buttons = document.querySelectorAll('button');
let outputValue = '';

 for(item of buttons) {
 	item.addEventListener('click',(e)=> {
       buttonText = e.target.innerText;
  
     if (buttonText=='X') {
            buttonText = '*';
            outputValue += buttonText;
            output.value =  outputValue;
        }
        else if (buttonText == '-') {
        	buttonText = '-';
        	outputValue +=buttonText;
        	output.value = outputValue; 
        }
        else if (buttonText == '+') {
        	buttonText = '+';
        	outputValue +=buttonText;
        	output.value = outputValue; 
        }
        else if (buttonText == '%') {
        	buttonText = '%';
        	outputValue +=buttonText;
        	output.value = outputValue; 
        }
        else if (buttonText == '/') {
        	buttonText = '/';
        	outputValue +=buttonText;
        	output.value = outputValue; 
        }
        else if (buttonText == '=') {
            output.value = eval(outputValue);
        }
        else if (buttonText == 'C') {
            outputValue = "";
            output.value = outputValue;
        }
        else if (buttonText == 'CE') {
            outputValue = outputValue.substr(0,outputValue.length-1);
            output.value = outputValue;
        }
        else {
            outputValue += buttonText;
            output.value = outputValue;
        }
         

        
    })
 }



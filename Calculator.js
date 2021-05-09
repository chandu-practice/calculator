var input_val = document.getElementById("input");
var input_txt =document.getElementById("input_text");



function clear_full(){
    input_val.value="";
    input_txt.innerHTML="";

}

function del(){
    if (input_val.value.length>1){        
        input_txt.innerHTML = input_val.value.slice(0,(input_val.value.length)-1); 
        input_val.value = input_val.value.slice(0,(input_val.value.length)-1);       
    }
    else{
        clear_full();
        
    }
        
}

function calculate(){
    let final_value = eval(input_val.value);
    input_val.value=final_value;
    
    
    
}

function add_value(e){
    input_val.value += e;
    input_txt.innerHTML += e;
}

function update(){
    input_txt.innerHTML=input_val.value;
}
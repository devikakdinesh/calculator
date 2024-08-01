// let displayValue = "";
       let res=document.getElementById("display");

function appendToDisplay(value) {
    if(res.value=='0'|| res.value===''){
        res.value = value;

    }else{
        res.value+=value;
    }
    // let res=document.getElementById("display");
    // displayValue += value;

}

function clr() {
    // let res=document.getElementById("display");
    // // displayValue = "";
    res.value = "";
}

function calculateResult() {
    let res=document.getElementById("display");
    try {
        res.value= eval(res.value);
        // res.value = result;
        //  = result.toString();displayValue
    } catch (error) {
        res.value = "";
    }
}
function backSpace(){
    
    const txt =res.value;
    res.value= txt.slice(0, -1);
    // /=currentValue.slice(0,-1);
}
function dot(){
    // let res=document.getElementById("display");
    let txt=res.value;
    if( txt==''||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('*')||txt.endsWith('/')){
        // displayValue+='0.';
        res.value+='0.';
    }else if(txt.endsWith('.')){
        // displayValue+='0.'
        res.value+=''
    }else{
        // displayValue += value;
        res.value+='.';
    }
}
function valueZero(){
    let txt=res.value;
    if( txt==='0'||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('*')||txt.endsWith('/')){
        // displayValue+='';
        res.value+='';
    }
     else{
        // displayValue+=value;
        res.value+='0';
    }
}
function operators(value){
    let txt=res.value;
    if( txt==''||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('*')||txt.endsWith('/')){
        // display+='';
        res.value+='';
    }
    else{
        // displayValue+=value;
        res.value+=value;
    }
}
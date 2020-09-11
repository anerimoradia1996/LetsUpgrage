

function printValue(){
    const element = document.getElementsByClassName('field');
    console.log(element[0].value);

    temp = element[0].value;

    element[1].value = temp;
    
    element[0].value = null;
}
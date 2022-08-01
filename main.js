const output= document.querySelector('#text'); //input text
const form= document.querySelector('#signup'); // form
const print= document.querySelector('small'); //errror message target

form.addEventListener("submit", e=>{
    let para= document.createElement('p');
    para.innerHTML = "Error! Input Cannot Be Empty";
 
    if (output.value==confirm()){
        e.preventDefault();
        print.appendChild(para);
            return false;
    }

    function confirm() {
        return "";
    }
     list();
     
    function list() {
        e.preventDefault();
        const node = document.createElement("li");
        const textnode = document.createTextNode(output.value);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
    output.value="";
    print.removeChild(print.firstElementChild);
});
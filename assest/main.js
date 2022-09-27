var btn_add=document.getElementById('btn_add');
var value=document.getElementById('input').value;



btn_add.onclick=function(){
    var h1=document.createElement('h1');
    h1.innerHTML=value;
    var todo=document.getElementById('todo');
    todo.appendChild(h1)

}
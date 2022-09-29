var btn_add=document.getElementById('btn_add');




btn_add.onclick=function(){
    var value=document.getElementById('input').value;
    var h1=document.createElement('h1');
    var icon=document.createElement('i');
    var div=document.createElement('div')
    div.setAttribute('class','divc')
    icon.setAttribute('class','fa-solid fa-trash-can')
    h1.innerHTML=value;
    // h1.setAttribute('class','h1class')
    var todo=document.getElementById('todo');
    div.appendChild(h1)
    div.appendChild(icon)
    todo.appendChild(div)

    var icon=document.querySelector('#todo')
    icon.addEventListener( `click`,(e)=>{
        var parent=e.target.parentElement;
        parent.remove()
    })

}
function todo() {
    var ParentDiv = document.getElementById('mydiv');
    var newPara = document.createElement('p');
    var value = document.getElementById('input-box').value;
    var newText = document.createTextNode(value);
    var del = document.createElement('input');
    randomId = Math.random();
    // newPara.setAttribute("id",randomId);
    newPara.setAttribute("class","para");
    del.setAttribute("type","button");
    del.setAttribute("value","delete");
    del.setAttribute("onclick","delt(this)");
    del.setAttribute("class","delbtn");
    newPara.appendChild(newText);
    newPara.appendChild(del);
    ParentDiv.appendChild(newPara);
}

// function delt(me) {
//     var parentId = me.parentElement.getAttribute("id");
//     //var x = me.parentElement.nodeName;
//     //console.log(parentId);  
//     document.getElementById(parentId).remove();
// }
function delt(me) {
    var parent = me.parentNode;
    var grandParent = parent.parentNode;
    grandParent.removeChild(parent);
    //console.log(grandParent);
    
}

//delt();
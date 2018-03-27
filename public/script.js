var insert = [];

function todo() {
    
    var ParentDiv = document.getElementById('mydiv');
    var newPara = document.createElement('p');
    var value = document.getElementById('input-box').value;
    insert.push(value);
    console.log(insert);
    
    //var newText = document.createTextNode(value);
    var newText = document.createElement('span');
    newText.innerHTML = value;
    var del = document.createElement('input');
    
    //randomId = Math.random();
    // newPara.setAttribute("id",randomId);
    newPara.setAttribute("class","para");
    del.setAttribute("type","button");
    del.setAttribute("value","X");
    del.setAttribute("onclick","delt(this)");
    del.setAttribute("class","delbtn");
    newPara.appendChild(newText);
    newPara.appendChild(del);
    ParentDiv.appendChild(newPara);
    
    //console.log(ParentDiv.childNodes[0].childNodes[0].childNodes);
    //console.log(ParentDiv.childNodes.length)
}

// function delt(me) {
//     var parentId = me.parentElement.getAttribute("id");
//     //var x = me.parentElement.nodeName;
//     //console.log(parentId);  
//     document.getElementById(parentId).remove();
// }
function delt(me) {
    var indexToRemove = me.previousSibling.innerHTML;
    var valueToRemove = insert.indexOf(indexToRemove);
    insert[valueToRemove] = undefined;
    var parent = me.parentNode;
    var grandParent = parent.parentNode;
    grandParent.removeChild(parent);
    //console.log(grandParent);
    
}

function validate() {
    var target = document.getElementById('input-box').value;
     if(target === "") {
        document.getElementById('input-box').style.borderBottom = '2px solid red';
       
        
    }
    
    else if(insert.includes(target)) {
        //console.log(insert.indexOf(target));
        alert('Item already present');
    }
    // else if (insert.length > 0) {
    //     var target2 = document.getElementById('input-box').value;
    //     console.log('control back to loop');
    //     console.log(target2);
        
    //     for(var i = 0; i < insert.length ; i++) {
    //         console.log(insert[i]+' :full array');
    //         if(insert[i] === target2) {
    //             console.log(insert[i]);
    //             console.log(target2);
    //             console.log(i);
                
    //             alert('Item already present');
    //             break;
                
    //         }


            
            // else {
            //     console.log(insert[i]);
            //     console.log(target); //error: target ki value change nhi horhi
            //     console.log(i);
                
            //     todo();
            //     //console.log(insert.length);
            //     console.log('not in loop if condition');
            //     break;
            // }
            
    //     }
    // }

    else {
        todo();
    }
}

function remBorder() {
   
        //target.style.border = 'none';
        document.getElementById('input-box').style.borderBottomColor = 'blue';
       
   

}

//delt();
// var x = document.getElementById("maindiv");
// var y = x.parentElement;
// console.log(y);


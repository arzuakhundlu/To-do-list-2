let inp = document.querySelector('.toDoInp');
let toDoText = document.getElementsByClassName('todolist-text');
let btn = document.getElementById('list-add');
let warning = document.querySelector('.p p');
let div = document.querySelector('.list-box');
let ul = document.querySelector('.todolist-task');


btn.addEventListener('click',()=>{
    
    let li = document.createElement('li');
    let span1 = document.createElement('span');
    span1.className = 'inp-text';
    let span2 = document.createElement('span')
    span2.className = 'delete';
    let icon = document.createElement('i');
    icon.setAttribute('class','fa-regular fa-circle-xmark');
    
    let spanIcon = document.createElement('span')
    spanIcon.className = 'icons';
    let spanEdit = document.createElement('span');
    spanEdit.className ='edit'
    let iconEdit = document.createElement('i');
    iconEdit.setAttribute('class','fa-solid fa-square-pen');
    
    
    if(inp.value === ''){
        warning.style.display = 'block';
    }
    else{
        warning.style.display = 'none';
        span1.innerHTML = inp.value;
        div.style.display = 'block';
        ul.append(li);
        li.append(span1);
        li.append(spanIcon);
        spanIcon.append(spanEdit);
        spanEdit.append(iconEdit)
        spanIcon.append(span2)
        span2.append(icon);
        inp.value = '';
    }
    
    // remove li
    span2.addEventListener('click',() => {
        ul.removeChild(li); 
        if(ul.innerHTML === ''){
            div.style.display = 'none';
        }
    });
    
    // edit
    let clickCounter = 0;
    spanEdit.addEventListener('click',()=> {
        
        clickCounter++;
        if(clickCounter === 1){
            span1.contentEditable = true;
            span1.style.backgroundColor = '#dbdbdb'
        }
        else{
            span1.contentEditable = false;
            span1.style.backgroundColor = '#fff'
            clickCounter = 0;
        }
        
    });
    
    
    // sort

    let arrow = document.querySelector('.arrow');
    let arrowUp = document.querySelector('.arrowUp');
    let arrowDown = document.querySelector('.arrowDown');
    let clickArrow = 0;
    arrow.addEventListener('click', () => {
        clickArrow++;
        let span1All = document.querySelectorAll('.inp-text');
        let arr = [];
        span1All.forEach(span1 =>{
            arr.push(span1.innerText)
        });
        if(clickArrow === 1){
            arr.sort();  
            arr.forEach((item,i)=>{
                span1All[i].innerText = item;
            })
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
        }
        else{
            arr.sort().reverse();  
            arr.forEach((item,i)=>{
                span1All[i].innerText = item;
            })
            arrowUp.style.display = 'block';
            arrowDown.style.display = 'none';
            clickArrow = 0 ;
        }
    });
});


// keyup Enter
inp.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById('list-add').click();
    }
  });



// input default
let xIcon = document.querySelector('.xIcon');
xIcon.addEventListener('click',()=>{
    inp.value = '';
});



const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group');
const listItem = document.querySelector('.list-group-item');
const search = document.querySelector('.form-search');
const check = document.querySelector('.search-form');
const clear = document.querySelector('.check');
const date = new Date().toLocaleString("en-US")
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'));

const generateTemplate = (todo) => {
    const todoHtml = `
    <li class="list-group-item">
        <span>${todo}</span>
        Created: ${date}
        

        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += todoHtml   
}






addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()
    itemsArray.push(todo)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }


})

data.forEach((item) => {
    generateTemplate(item)
  })






list.addEventListener('click', e => {

    if(e.target.tagName === "I") {

        e.target.parentElement.remove();
        
    }
    
})

const clearStorage = () => {
    localStorage.clear();
}

clear.addEventListener('click', e => {
    list.innerHTML = '';
    clearStorage();
   
})






// const filterTodos = (temp) => {

//     Array.from(list.children)
//         // .filter(todo => !todo.textContent.toLowerCase().includes(temp));
//         for (i = 0; i < listItem.length; i++) {
            
//             txtValue = listItem.textContent || listItem.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 listItem.style.display = "";
//             } else {
//                 listItem.style.display = "none";
//             }
//           }
//         // .forEach(todo => todo.classList.add('filtered'));
// }

check.addEventListener("keyup", e => {
    e.preventDefault();
    // const temp = search.value.trim().toLowerCase();
    search_todos();
})

function search_todos() {
    let input = search.value.toLowerCase();
    // input=input.toLowerCase();
    let x = document.getElementsByClassName('list-group-item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}

    





// if(validations) {
//     return <button>aaa</button>
// } else if(loading) {
//     return <button disabled>aaa</button>
// } else {
//     return <button disabled>bbb</button>
// }
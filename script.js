const input = document.getElementById('input');
const button = document.getElementsByTagName('button')[0];
const ul = document.querySelector('ul')


createList = () => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""

    let del = document.createElement('button')
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)
    del.addEventListener('click', deleteItem)

    function deleteItem() {
        li.classList.add('delete')
    }
}

addList = () => {
    if(input.value.length > 0){ //makes sure that an empty input field doesn't create a li
        createList()
    }
}
addListKey = (event) => {
    if(input.value.length > 0 && event.which === 13){ //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be displayed by event.keyCode === 13
        createList()
    }
}

button.addEventListener('click', addList)

input.addEventListener('keypress', addListKey)
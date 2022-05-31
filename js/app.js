let input = document.getElementById('first')
const btn = document.getElementById('submit-button')
const todo = document.getElementById('todo-list')

btn.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    const inp = document.querySelector('input')
    li.textContent = inp.value
    inp.value = ''
document.querySelector('ul').appendChild(li)})


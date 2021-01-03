const images = document.querySelectorAll('div.photo')

images.forEach(element => {
    element.addEventListener('click', takeElement)
})

const btnClose = document.querySelector('span.close')
btnClose.addEventListener('click', removeIsso)

function takeElement(e){
    document.getElementById('dialog').style.display = 'flex'
    const source = e.target
    addImage(source.dataset.local)
}
function addImage(image){
    const isso = document.createElement('img')
    isso.setAttribute('src', image)
    isso.classList.add('config-img')
    document.getElementById('dialog-img').appendChild(isso)
}
function removeIsso(){
    while(document.getElementById('dialog-img').firstChild){
        document.getElementById('dialog-img').removeChild(document.getElementById('dialog-img').firstChild)
    }
    document.getElementById('dialog').style.display = 'none'
}
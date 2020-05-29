/** help */
function log(message) {
    console.log('> ' + message)
}

/** app  */
const cards = document.querySelectorAll('.card')

const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
   // log('start')
   dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

   this.classList.add('is-dragging')
}

function drag() {
   // log('drag')
}

function dragend() {
   // log('end')
   dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
   this.classList.remove('is-dragging')
   const status = this.querySelector('.status')
   status.classList.remove('green', 'blue', 'red')
   const statusColor = this.parentElement.classList[1]
   status.classList.add(statusColor)
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
   // log(dragenter)
  
}

function dragover() {
   // log(dragover)
   this.classList.add('over')

   const cardBeingDragged = document.querySelector('.is-dragging')

   this.appendChild(cardBeingDragged)
}

function dragleave() {
   // log(dragleave)
   this.classList.remove('over')
   
}

function drop() {
   log(drop)
  this.classList.remove('over')
  
}
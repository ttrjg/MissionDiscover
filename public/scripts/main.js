import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

const deleteButtons = document.querySelectorAll('.actions a.delete')

const cancelButton = document.querySelector('.button.cancel')

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

deleteButtons.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

cancelButton.addEventListener('click', event => {
  modal.close()
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excuir'

  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#roomId').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}?`

  modal.open()
}

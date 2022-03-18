export default function modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')

  function open() {
    modalWrapper.classList.add('active')
  }

  function close() {
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}

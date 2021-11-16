const modal = $.modal({
    title: 'Some title',
    content: 'Some content',
    width: '600px'
})



let btnClose = document.querySelector('.closeBtn')

btnClose.addEventListener("click", () => {
    // Closing modal window by click to buttons
    modal.close()
})

let overlay = document.querySelector('.modal-overlay')

overlay.addEventListener('click', () => {
    // Closing modal window by click to overlay
    if (modal.closable()) {
        modal.close()
    }
})
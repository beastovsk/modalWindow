function _createModal(options) {
    const modal = document.createElement('div')
    
    modal.classList.add('myModal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span>Modal window</span>
                    <span class="closeBtn">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="modal-footer">
                    <button class="accept">Ok</button>
                    <button class="cancel">Cancel</button>
                </div>
            </div>
        </div>
    `)

    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
    const $modal = _createModal(options)

    return {
        open() {},
        close() {}
    }
}
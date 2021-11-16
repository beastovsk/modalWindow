function _createModal(options) {
    const modal = document.createElement('div')

    modal.classList.add('myModal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window" style="width: ${options.width}">
                <div class="modal-header">
                    <span>${options.title}</span>
                    <span class="closeBtn">&times;</span>
                </div>
                <div class="modal-body">
                    ${options.content || ''}
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
    let ANIMATION_SPEED = 2000

    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('close')

            setTimeout(() => {
                $modal.classList.remove('close')
            }, ANIMATION_SPEED)
        },
        closable() {
            // Giving to us 'true' if window is open and reverse
            if ($modal.classList.contains('open')) {
                return true
            } else {
                return false
            }
        },
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.addEventListener('click', null)
            destroyed = true
        }
    }
}
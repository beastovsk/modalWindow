function _createModal(options) {
    const modal = document.createElement('div')

    modal.classList.add('myModal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width}">
                <div class="modal-header">
                    <span>${options.title}</span>
                    <span class="closeBtn" data-close="true">&times;</span>
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button class="acceptBtn">Ok</button>
                    <button class="cancelBtn">Cancel</button>
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
    let destroyed = false


    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('close')

            setTimeout(() => {
                $modal.classList.remove('close')
            }, ANIMATION_SPEED)
        }
    }

    const listener = e => {
        if (e.target.dataset.close) {
            modal.close()
        }
    } 

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        }
    })
}
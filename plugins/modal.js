Element.prototype.appendAfter = function(elem) {
    elem.parentNode.insertBefore(this, elem.nextSibling)
}

function nope() {}

function _createFooter(buttons = []) {
    if (buttons.length == 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')
    
    buttons.forEach((btn) => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || nope

        wrap.appendChild($btn)
    })

    return wrap
}


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
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
            </div>
        </div>
    `)

    const footer = _createFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))


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
        }, 
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}
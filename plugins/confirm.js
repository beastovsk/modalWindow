$.confirm = function(options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {text: 'Delete', type: 'danger', handler() {
                    modal.close()
                    resolve()
                }},
                {text: 'Close', type: 'secondary', handler() {
                    reject()
                    modal.close()
                }}
            ]
            
        })
        setTimeout(() => modal.open(), 200)
    })
}
const modal = $.modal({
    title: 'Some title',
    content: 'Some content',
    width: '600px',
    footerButtons: [
        {text: 'Ok', type: 'secondary', handler() {
            console.log('Ok')
        }},
        {text: 'Cancel', type: 'secondary', handler() {
            console.log('Cancel')
            modal.close()
        }}
    ]
})



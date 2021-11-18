let fruits = [
    {id: 1, title: 'Apples', price: 20},
    {id: 2, title: 'Oranges', price: 30},
    {id: 3, title: 'Mango', price: 40}
]

const toHTML = fruit => `
    <div class="col">
        <div class="card">
            <img src="..." class="card-img-top" style="height: 300px;" alt="${fruit.title}">
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Check a price</a>
                <a href="#" class="btn btn-danger" data-btn="delete" data-id="${fruit.id}">Delete</a>
            </div>
        </div>
    </div>`


function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}
render()

document.addEventListener('click', event => {
    event.preventDefault()
    let BtnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
    

    if (BtnType == 'price') {
        priceModal.setContent(`
            <p>Price of ${fruit.title} is ${fruit.price}</p>
        `)
        priceModal.open()
        console.log(id, fruit)
    }

    if(BtnType == 'delete') {
        $.confirm({
            title: 'Are you sure?',
            content: `<p> You are removing: ${fruit.title}</p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch(() => {
            console.log('np ')
        })
    }
})




const priceModal = $.modal({
    title: 'Price',
    width: '600px',
    footerButtons: [
        {text: 'Закрыть', type: 'secondary', handler() {
            priceModal.close()
        }}
    ]
})

function bestBrand(brand) {
    return new Promise((resolve, reject) => {
        if (brand == 'Nike') {
            resolve({
                success: true,
                brand: brand,
                message: brand + 'Is the best'
            })
        } else {
            reject({
                success: false,
                message: 'Im not so sure!'
            })
        }
    })
}

function bestSneaker(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Nike Air Force 1 by ' + response.brand)
        } else {
            reject('Do you know Nike?')
        }
    })
}

// bestBrand('Nike')
// .then(resolve => {
//     console.log(resolve.brand + ' yeah ' + resolve.message)
//     return bestSneaker(resolve)
// })
// .then(resolve => {
//     console.log(resolve)
// })
// .catch(reject => {
//     console.log(reject.msg)
// })


// O await é utlizado antes mesmo da chamada de uma promisse mas só pode ser utilizada em uma função com 'async'
// try e catch são usados para fazer o tratamento de erros ao invés do then e catch

async function brands() {
    try {
    const bestBrandResponse = await bestBrand('Nike')
    console.log(bestBrandResponse)
    const bestSneakerResponse = await bestSneaker(bestBrandResponse)
    console.log(bestSneakerResponse)
    } catch (err) {
        console.log(err.msg)
    }
}
brands()
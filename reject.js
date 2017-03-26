let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'))
    }, 300)
})

onReject = err => {
    console.log(err.message);
}

promise.then(()=>{}, onReject)


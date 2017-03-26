let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve();
  }, 300)
})

promise.then((success)=>{
  console.log('FULFILLED!')
})

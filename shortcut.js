
var rejectedPromise = Promise.reject(new Error('total bullshit'))
var newPromise = Promise.resolve(console.log('firing!!!!'))

newPromise.catch((err)=>{
    console.log('i wont fire')
})
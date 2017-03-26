let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('TIMED OUT!');
    resolve();
  }, 300)
})
